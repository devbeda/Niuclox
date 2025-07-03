import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Layout from './Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/atoms/ScrollToTop";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop /> {/* ✅ Correct placement */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
