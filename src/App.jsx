import Principal from "./pags/Principal"
import Header from './components/header/Header'
import Blog1 from "./pags/Blog1"
import Blog2 from "./pags/Blog2"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
 
  return (
    <main className="h-auto w-full bg-neutral-900 flex flex-col items-center gap-3">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="*" element={<h2>ERROR 404</h2>} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
        </Routes>
      
      </BrowserRouter>
    </main>
  )
}

export default App
