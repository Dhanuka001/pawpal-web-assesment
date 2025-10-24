import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Literature from "./components/Literature";
import ResearchProblemSolution from "./components/ResearchProblemSolution";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Literature />
        <ResearchProblemSolution />
      </main>
      <Footer />
    </>
  );
}

export default App;
