import { Route, Routes } from "react-router-dom"
import Website from "./pages/Website"
import Class from "./pages/Class"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Trainers from "./pages/Trainers"
import Prices from "./pages/Prices"
function App() {
  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Website/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path ="/classes" element={<Class/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/prices" element={<Prices/>}/>
      </Routes>
      <Footer/>
    </div>


    </>
  )
}

export default App
