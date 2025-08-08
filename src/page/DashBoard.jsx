import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import "../assets/css/DashBoard.css";
import { useEffect, useState } from "react";

function DashBoard() {
  const [letter, setLetter] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (letter === "") {
      setRecipes([]);
      return;
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.meals) {
          const recipeInfo = result.meals.filter((recipe) =>
            recipe.strMeal.toLowerCase().includes(letter.toLowerCase())
          );
          setRecipes(recipeInfo);
          // console.log(recipeInfo);
        } else {
          setRecipes([]);
        }
      })
      .catch((error) => console.error(error));
  }, [letter]);
  return (
    <section>
      <NavBar />
      <div className="container d-flex flex-column align-item-center p-5 text-center justify-content-center dash-body">
        <div className="dash-head">
          <h1>What would you like to cook today?</h1>
          <div className="dash-input d-flex justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search recipes, cooks, tips..."
              value={letter}
              onChange={(e) => setLetter(e.target.value)}
            />
          </div>
          <div>
            {recipes.map((info) => (
              <div key={info.idMeal}>
                <h3>{info.strMeal}</h3>
                <img src={info.strMealThumb} alt="" className="img-fluid" />
                <h5>Ingredient</h5>
                <ul className="text-start">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const measure = info[`strMeasure${i + 1}`];
                    const ingredient = info[`strIngredient${i + 1}`];
                    if (
                      ingredient &&
                      ingredient.trim() &&
                      measure &&
                      measure.trim()
                    ) {
                      return (
                        <li key={i}>
                          {measure} {ingredient}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
                <ol className="text-start">
                  {info.strInstructions
                    .split(".")
                    .map((step, idx) =>
                      step.trim() ? <li key={idx}>{step.trim()}.</li> : null
                    )}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default DashBoard;
