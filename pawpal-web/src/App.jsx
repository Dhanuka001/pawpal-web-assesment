import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Literature from "./components/Literature";
import Methodology from "./components/Methodology";
import Navbar from "./components/Navbar";
import Downloads from "./components/Downloads";
import ResearchObjectives from "./components/ResearchObjectives";
import ResearchProblemSolution from "./components/ResearchProblemSolution";
import ScrollTopButton from "./components/ScrollTopButton";
import Technologies from "./components/Technologies";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Literature />
        <ResearchProblemSolution />
        <ResearchObjectives />
        <Methodology />
        <Technologies />
        <Downloads />
        <About />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
