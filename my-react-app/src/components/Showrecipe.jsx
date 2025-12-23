import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Flame, ChefHat } from "lucide-react";

const recipes = {
  "khasta-kachori": {
    name: "Khasta Kachori",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    time: "45 mins",
    calories: "320 kcal",
    difficulty: "Medium",
    ingredients: [
      "2 cups Maida",
      "1/4 cup Ghee",
      "1 cup Moong Dal (soaked)",
      "Saunf, Hing, Lal Mirch",
      "Oil for frying"
    ],
    steps: [
      "Maida me ghee aur namak mila kar dough tayar kare.",
      "Moong dal ko pees kar masala ke sath bhune.",
      "Dough ke andar filling bhare.",
      "Low flame par golden brown fry kare.",
      "Garama-garam serve kare."
    ]
  }
};

export default function ShowRecipePage() {
  // const { slug } = useParams();
  // const recipe = recipes[slug];
  // // const { slug } = useParams();
  // console.log("SLUG:", slug);


  // if (!recipe) return <div className="p-10">Recipe not found</div>;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >  <img src={"/kachori.png"} alt={"recipename"} className="w-full h-72 object-cover" />

          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{recipes.name}</h1>

            <div className="flex gap-6 text-gray-600 mb-6">
              <span className="flex items-center gap-2"><Clock size={18} /> {recipes.time}</span>
              <span className="flex items-center gap-2"><Flame size={18} /> {recipes.calories}</span>
              <span className="flex items-center gap-2"><ChefHat size={18} /> {recipes.difficulty}</span>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside space-y-1">
                {/* {recipes.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))} */}
              </ul>
            </div>
          </div>

          <div>
             <h2 className="text-xl font-semibold mb-2">Steps</h2>
          <ol className="list-decimal list-inside space-y-2">
           {/* {recipes.steps.map((step, i) => (
                <li key={i}>{step}</li>
         ))}  */}
         </ol>
          </div>
        </motion.div>  </div>



    </>
    // /* // <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6"> */ }
    // {* //   <motion.div */ }
    // {/* //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
    //   >
    //     <img src={recipe.image} alt={recipe.name} className="w-full h-72 object-cover" />

    //     <div className="p-6">
    //       <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

    //       <div className="flex gap-6 text-gray-600 mb-6">
    //         <span className="flex items-center gap-2"><Clock size={18}/> {recipe.time}</span>
    //         <span className="flex items-center gap-2"><Flame size={18}/> {recipe.calories}</span>
    //         <span className="flex items-center gap-2"><ChefHat size={18}/> {recipe.difficulty}</span>
    //       </div>

    //       <div className="grid md:grid-cols-2 gap-6">
    //         <div>
    //           <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
    //           <ul className="list-disc list-inside space-y-1">
    //             {recipe.ingredients.map((item, i) => (
    //               <li key={i}>{item}</li>
    //             ))}
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="text-xl font-semibold mb-2">Steps</h2>
    //           <ol className="list-decimal list-inside space-y-2">
    //             {recipe.steps.map((step, i) => (
    //               <li key={i}>{step}</li>
    //             ))} */}
    // {/* //           </ol> */ }
    // {/* //         </div>
    //   //       </div>
    //   //     </div>
    //   //   </motion.div>
    //   // </div> */}
  );
}
