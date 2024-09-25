import Header from "./components/Header/Header.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Home from "./components/Home/Home.jsx";
import "../src/index.css";
// importar o faq e login depois

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Slider />
    </>
  );
}

export default App;
