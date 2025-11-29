import{BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css' 
import './index.css' 
import Header from './components/HEADER.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
function App() {
  

  return (
    <><BrowserRouter>
  <Header />

  <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/Signup" element={<Signup />} />
  </Routes>
</BrowserRouter>


    </>
  )
}

export default App
