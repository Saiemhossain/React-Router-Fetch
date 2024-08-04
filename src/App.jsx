import { Route, Routes } from "react-router"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import Data from "./pages/Data"

function App() {


  return (
    <>
      <Header />
      <Data />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
