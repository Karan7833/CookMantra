import{BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css' 
import './index.css' 
import Header from './components/Header.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import Showrecipe from './components/Recipedetail.jsx'
import RecipeDetail from "./components/Recipedetail.jsx"
function App() {
  

  return (
    <><BrowserRouter>
  <Header />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Showrecipe" element={<RecipeDetail/>} />

  </Routes>
</BrowserRouter>


    </>
  )
}

export default App
