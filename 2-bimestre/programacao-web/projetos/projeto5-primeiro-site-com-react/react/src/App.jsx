import {Header} from "./components/Header"
import {Home} from "./components/Home"
import {Sobre} from "./components/Sobre"
import {Contato} from "./components/Contato"
import {Footer} from "./components/Footer"

export default function App() {
    return (
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