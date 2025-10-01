import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import InfoSection from "./components/InfoSection";
import Wish from "./components/Wish";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <section id="hero"><Hero/></section>
      <section id="countdown"><Countdown/></section>
      <section id="gallery"><Gallery/></section>
      <section id="info"><InfoSection/></section>
      <section id="wish"><Wish/></section>
      <Footer/>
    </>
  )
}

export default App
