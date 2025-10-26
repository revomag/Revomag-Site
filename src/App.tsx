import './App.css'
import Routes from "./routes";
import Footer from "./components/footer/footer";
import { CartProvider } from "./contexts/CartContext";

function App() {
    return (
        <CartProvider>
            <Routes/>
            <Footer/>
        </CartProvider>
    );
}

export default App
