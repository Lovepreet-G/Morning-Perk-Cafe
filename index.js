const express = require("express"); //include express in this app
const path = require("path"); //module to help with file paths

// api key
// api calls is 150 per day

const apiKey = "2b0c3de999c544409cc4377292d11744";

const app = express(); //create an Express app
const port = process.env.PORT || "8888";

//SET UP TEMPLATE ENGINE (PUG)
app.set("views", path.join(__dirname, "views")); //set up "views" setting to look in the <__dirname>/views folder
app.set("view engine", "pug"); //set up app to use Pug as template engine

//SET UP A PATH FOR STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//SET UP FOR EASIER FORM DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SET UP SOME PAGE ROUTES
// for home page 
app.get("/", async (request, res) => 
{
  let result = await getRecipeByType("drinks");
  res.render('index', { title: "Home", results : result }); 
});

// Route to list products based on their type
app.get("/products/:type", async (req, res) => {
  const productType = req.params.type;  
  let recipes = await getRecipeByType(productType);
  res.render("productByType", { title: productType, results: recipes });
  
});

//route to view recipe
app.get("/viewRecipe", async (req, res) => {
  const productId = req.query.productId;
  let recipedata = await getrecipedata(productId);  
  let recipesteps = await getrecipesteps(productId); 
  let recipeingredients = await getingredients(productId);
  res.render("productdetail", { title : recipedata.title , image : recipedata.image , summary : recipedata.summary , recipesteps , recipeingredients }); // Render productdetail.pug with the fetched data
  
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
});


// function to get recipe data by type
async function getrecipedata(productId)
{
  const recipeinfo = await fetch(`https://api.spoonacular.com/recipes/${productId}/information?apiKey=${apiKey}`);
  const data = await recipeinfo.json();
  const title = data.title;
  const image = data.image;
  const summary = data.summary; 
  const recipeData = {
    title: title,
    image: image,
    summary: summary
  };
  return recipeData;
}

// function to get recipe steps
async function getrecipesteps(productId)
{
  const getsteps = await fetch(`https://api.spoonacular.com/recipes/${productId}/analyzedInstructions?apiKey=${apiKey}`);
  const steps = await getsteps.json();
  return steps;
}

// function to get ingredients of recipe
async function getingredients(productId)
{
  const ingredientfetch = await fetch(`https://api.spoonacular.com/recipes/${productId}/ingredientWidget.json?apiKey=${apiKey}`)
  const ingredient = await ingredientfetch.json();
  console.log(ingredient);
  const sendingredient = ingredient.ingredients;

  return sendingredient;
}

// function to get recipe by type
async function getRecipeByType(type)
{
  const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${type}&apiKey=3509515ac0be4b0196f43c1e6479f9d3`);
  const data = await response.json();
  const recipes = data.results;
  return recipes;

}


