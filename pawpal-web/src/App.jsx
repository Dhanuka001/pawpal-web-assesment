import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Literature from "./components/Literature";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Literature />
      </main>
      <Footer />
    </>
  );
}

export default App;
