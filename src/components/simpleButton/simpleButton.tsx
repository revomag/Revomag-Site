import {ReactElement} from "react";
import "./simpleButton.scss";

interface ButtonProps {
    buttonText: string;
    destination: string;
}

/**
 * Generic button for either internal or external navigation
 * @param buttonText
 * @param href
 * @constructor
 */
export default function SimpleButton({buttonText, destination}: ButtonProps): ReactElement {
    const handleClick = () => {
        // Check if the provided URL is internal or external
        if (destination.startsWith('/')) {
            // Internal route
            window.location.href = destination;
        } else {
            // External URL
            window.open(destination, '_blank');
        }
    };

    return (
        <div className={'button-container'}>
            <button onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
}
