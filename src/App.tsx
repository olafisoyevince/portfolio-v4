import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
    return (
        <section className=" px-10">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Footer />
        </section>
    );
}

export default App;
