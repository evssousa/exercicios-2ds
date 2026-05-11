import Footer from "./components/Footer";
import Header from "./components/Header";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

export default function App() {
    return(
        <div>
            <Header />
            
            <main>
                <Home />
                <Sobre />
                <Contato />
            </main>

            <Footer />
        </div>
    )
}


