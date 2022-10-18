import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {

    return (
        <div className="App">

            <Header />
        <main>
            <Routes>
                <Route path="*" element={<HomePage />} />
            </Routes>
        </main>

            <Footer />
        </ div>
    )
}

            export default App
