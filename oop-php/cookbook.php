<?php
include 'classes/recipe.php';
include 'classes/render.php';
include 'classes/recipe-collection.php';
include 'inc/all_recipes.php';

// $recipe1 = new Recipe('Getting baked with Beeds');
// $recipe1 -> addIngredient('ägg', 2, 'st');
// $recipe1 -> addIngredient('mjölk', 5, 'dl');
// $recipe1 -> addIngredient('socker', 1, 'dl');
// $recipe1 -> addIngredient('kakao', 2, 'msk');
// $recipe1 -> addIngredient('mjöl', 7, 'dl');
// $recipe1 -> addInstruction('Värm upp ugnen till 200 grader');
// $recipe1 -> addInstruction('Blanda ihop alla ingredienser och häll i en form. Sätt in i ugnen i ca 20 minuter och det börjar lukta gott. Ta ut och låt svalna i ca 5 min. Njut med en kopp java');
// $recipe1 -> addTag('Baking');
// $recipe1 -> addTag('Sweet');
// $recipe1 -> addTag('Dessert');
// $recipe1 -> setYield('One massive cake');
// $recipe1 -> setSource('BD Chops');
//
// $recipe2 = new Recipe('Hunting for food');
//
// echo $recipe1; //toString method is called
// echo new Render();

$cookbook = new RecipeCollection("Treehouse Recipes");
$cookbook -> addRecipe($lemon_chicken);
$cookbook -> addRecipe($granola_muffins);
$cookbook -> addRecipe($belgian_waffles);
$cookbook -> addRecipe($pepper_casserole);
$cookbook -> addRecipe($lasagna);
$cookbook -> addRecipe($dried_mushroom_ragout);
$cookbook -> addRecipe($rabbit_catalan);
$cookbook -> addRecipe($grilled_salmon_with_fennel);
$cookbook -> addRecipe($pistachio_duck);
$cookbook -> addRecipe($chili_pork);
$cookbook -> addRecipe($crab_cakes);
$cookbook -> addRecipe($beef_medallions);
$cookbook -> addRecipe($silver_dollar_cakes);
$cookbook -> addRecipe($french_toast);
$cookbook -> addRecipe($corn_beef_hash);
$cookbook -> addRecipe($granola);
$cookbook -> addRecipe($spicy_omelette);
$cookbook -> addRecipe($scones);

$breakfast = new RecipeCollection('Fav Breakfasts');
foreach ($cookbook -> filterByTag('breakfast') as $recipe) {
  $breakfast -> addRecipe($recipe);
}

echo Render::listShopping($breakfast -> getCombinedIngredients());
//echo Render::listRecipes($breakfast -> getRecipeTitles());
//echo Render::listRecipes($cookbook -> getRecipeTitles());
//echo Render::displayRecipe($granola_muffins);

?>
