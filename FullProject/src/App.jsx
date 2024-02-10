import { Route, Routes } from "react-router-dom"
import Website from "./pages/Website"
import Classes from "./pages/Classes"
import About from "./pages/About"
import Blog from "./pages/Blog"

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Website/>}/>
        <Route to="/about" element={<About/>}/>
        <Route to ="/classes" element={<Classes/>}/>
        <Route to="/Blog" element={<Blog/>}/>
      </Routes>
    </div>

    </>
  )
}

export default App
