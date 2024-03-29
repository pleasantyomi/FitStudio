import { Route, Routes } from "react-router-dom"
import Website from "./pages/Website"
import Class from "./pages/Class"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Trainers from "./pages/Trainers"
import Prices from "./pages/Prices"
import Testimonials from "./pages/Testimonials"
function App() {
  return (
    <>
    <div className="font-primarys">
      <Header/>
      <Routes>
        <Route path="/" element={<Website/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path ="/classes" element={<Class/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/prices" element={<Prices/>}/>
        <Route path="/testimony" element={<Testimonials/>}/>
      </Routes>
      <Footer/>
    </div>


    </>
  )
}

export default App
