import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data.meals[0]));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">{recipe.strMeal}</h1>
      <p className="text-gray-500 mt-2">
        {recipe.strCategory} | {recipe.strArea}
      </p>

      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <p className="mt-3 leading-relaxed">{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
