import { useEffect, useState } from "react";
import { getRecipes } from "../services/RecipeApi";
import RecipeCard from "../components/RecipeCard";
// import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data || []);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">All Recipes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((item) => (
          <RecipeCard key={item.idMeal} recipe={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
