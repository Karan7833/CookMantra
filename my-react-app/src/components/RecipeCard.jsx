import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
      className=" border-[#DA70D6] rounded-lg p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="h-64 overflow-hidden rounded-xl">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold mt-4">{recipe.strMeal}</h2>
      <p className="text-gray-500">{recipe.strCategory}</p>
    </div>
  );
};

export default RecipeCard;
