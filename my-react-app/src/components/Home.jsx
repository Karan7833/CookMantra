import React from 'react';
import Additem from './Additem.jsx';

export default function Home(props) {
  return (
    <>
    

            
     
      <Additem
        imgsrc="/kachori.png"
        imgalt="Kachori"
        tittle="Kachori (Khasta Kachori with dal)"
        description="Khasta Dal Kachori – ek crispy aur flaky snack..."
      />

      <Additem
        imgsrc="/pavbhaji.png"
        imgalt="Pav Bhaji"
        tittle="Pav Bhaji Recipe"
        description="Pav Bhaji is popular Indian street food..."
      />

      <Additem
        imgsrc="/samosa.png"
        imgalt="Samosa"
        tittle="Samosa Recipe"
        description="Crispy samosa with spicy filling..."
      />
      <h2 className='ml-50 text-2xl font-bold   '>Work in progress! </h2>
      <li className=''>
      <p className='ml-50 mt-10 text-2xl '> check Signup</p>
      </li>
    </>
  );
};

// export default Home;
