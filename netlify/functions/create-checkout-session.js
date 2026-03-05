import Stripe from 'stripe';

/**
 * Netlify Function to create a Stripe Checkout Session
 *
 * This function is called by the frontend to create a secure Checkout Session
 * with Stripe. It uses the Stripe Secret Key to authenticate with Stripe's API.
 *
 * Environment Variables Required:
 * - STRIPE_SECRET_KEY: Your Stripe secret key (test or live)
 */

export const handler = async (event, context) => {
  // Handle CORS preflight FIRST
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Initialize Stripe with secret key
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY is not configured');
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Stripe is not configured on the server' }),
      };
    }

    const stripe = Stripe(stripeSecretKey);

    // Parse request body
    let requestBody;
    try {
      requestBody = JSON.parse(event.body);
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Invalid request body' }),
      };
    }

    const { lineItems, successUrl, cancelUrl } = requestBody;

    // Validate required fields
    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Line items are required' }),
      };
    }

    // Validate line items structure
    for (const item of lineItems) {
      if (!item.price || !item.quantity) {
        return {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ error: 'Each line item must have a price and quantity' }),
        };
      }
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl || `${event.headers.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${event.headers.origin}/cart`,
      shipping_address_collection: {
        allowed_countries: ['US'], // Update based on where you ship
      },
      billing_address_collection: 'auto',
    });

    // Return the session ID and URL to the frontend
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: session.id,
        url: session.url  // The checkout URL for direct redirect
      }),
    };

  } catch (error) {
    console.error('Error creating checkout session:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: error.message || 'Failed to create checkout session'
      }),
    };
  }
};