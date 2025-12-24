import React from 'react';
import Additem from './Additem.jsx';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-4 m-7 gap-7 min-h-screen">

            
     
    <Link to="/Showrecipe">  <Additem
        imgsrc="/kachori.png"
        imgalt="Kachori"
        tittle="Kachori (Khasta Kachori with dal)"
        description="Khasta Dal Kachori – ek crispy aur flaky snack..."
      /> </Link>

     <Link to="/Showrecipe">  <Additem
        imgsrc="/pavbhaji.png"
        imgalt="Pav Bhaji"
        tittle="Pav Bhaji Recipe"
        description="Pav Bhaji is popular Indian street food..."
      />  </Link>

     <Link to="/Showrecipe">  <Additem
        imgsrc="/samosa.png"
        imgalt="Samosa"
        tittle="Samosa Recipe"
        description="Crispy samosa with spicy filling..."
      /></Link>
      <h2 className='ml-50 text-2xl font-bold   '>Work in progress! </h2>
      <li className=''>
      <p className='ml-50 mt-10 text-2xl '> check Signup</p>
      </li>

      </div>
    </>
  );
};

// export default Home;
