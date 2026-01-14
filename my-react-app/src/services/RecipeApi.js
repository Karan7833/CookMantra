const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const getRecipes = async (search = "") => {
  try {
    const response = await fetch(`${API_URL}${search}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};
