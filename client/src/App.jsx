import { Route, Routes, BrowserRouter } from "react-router-dom"

import AddContest from "./pages/AddContest"
import ContestList from "./pages/ContestList"
import About from "./pages/About"

import Layout from "./pages/Layout"
import Demo from "./pages/Demo"

import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContestList />} />
          <Route path="/add-contest" element={<AddContest />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App