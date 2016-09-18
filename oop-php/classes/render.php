<?php

class Render {
  public function __toString() {
    $output .= "\n Other available methods of class " . __CLASS__ ." are: \n";
    $output .= implode("\n", get_class_methods(__CLASS__));
    return $output;
  }
  public static function listShopping($ingredient_list) {
    ksort($ingredient_list);
    return implode("\n", array_keys($ingredient_list));
  }
  public static function listRecipes($titles) {
    asort($titles);
    return implode("\n", $titles);
  }
  public static function listIngredients($ingredients) {
    $output = "";
    foreach($ingredients as $ing) {
      $output .= $ing['item'] . " " . $ing['amount'] . $ing['measure'] . "\n";
    }
    return $output;
  }
  public static function displayRecipe($recipe) {
    $output = "";
    $output .= $recipe -> getTitle() . " by " . $recipe -> getSource();
    $output .= "\n";
    $output .= "Yield: " .$recipe -> getYield();
    $output .= "\n";
    $output .= "\n";

    $output .= self::listIngredients($recipe -> getIngredients());

    $output .= "\n";

    foreach($recipe -> getInstructions() as $inst) {
      $output .= $inst . "\n";
    }

    $output .= "\n";

    foreach($recipe -> getTags() as $tag) {
      $output .= $tag . "\n";
    }

    $output .= "\n";

    return $output;
  }
}

 ?>
