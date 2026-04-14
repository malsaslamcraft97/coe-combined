import Hero from "./components/Hero";
import "./App.css";
import MainCardLayout from "./components/MainCardLayout";

function App() {
  return (
    <main className="app-shell">
      <Hero />

      <div className="flex justify-center">
        <MainCardLayout />
      </div>
    </main>
  );
}

export default App;
