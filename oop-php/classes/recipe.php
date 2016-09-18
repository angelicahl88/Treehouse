<?php

class Recipe {
  private $title;
  private $ingredients = [];
  private $instructions= [];
  private $yield;
  private $tag = [];
  private $source = 'Angelica Hart Lindh';
  private $measurement = [
    'tsp',
    'tbsp',
    'cup',
    'oz',
    'fl oz',
    'doz',
    'pint',
    'gallon',
    'lb',
    'quart'
  ];
  public function addIngredient($item, $amount = null, $measure = null) {
    if($amount != null && !is_float($amount) && !is_int($amount)) {
      exit("The amount must be a float: " . gettype($amount) . " $amount given \n");
    }
    if($measure != null && !in_array(strtolower($measure), $this -> measurement)) {
      exit("You entered $measure, please enter a valid measurement: " . implode(", ", $this -> measurement) . "\n");
    }
    $this -> ingredients[] = [
      'item' => $item,
      'amount' => $amount,
      'measure' => $measure
    ];
  }
  public function getIngredients() {
    return $this -> ingredients;
  }
  public function setTitle($title) {
    if(empty($title)) {
      $this -> title = null;
    } else {
      $this -> title = ucwords($title);
    }
  }
  public function getTitle() {
    return $this -> title;
  }
  public function addInstruction($string) {
    $this -> instructions[] = $string;
  }
  public function getInstructions() {
    return $this -> instructions;
  }
  public function addTag($tag) {
    $this -> tags[] = strtolower($tag);
  }
  public function getTags() {
    return $this -> tags;
  }
  public function setYield($yield) {
    $this -> yield = $yield;
  }
  public function getYield() {
    return $this -> yield;
  }
  public function setSource($source) {
    $this -> source = ucwords($source);
  }
  public function getSource() {
    return $this -> source;
  }
  public function __construct($title = null) {
    $this -> setTitle($title);
  }
  public function __toString() {
    $output = "You are calling a " . __CLASS__ . " object with the titled ";
    $output .= $this -> getTitle() . "\n";
    $output .= "The file " . basename(__FILE__) . " is located in " . __DIR__ . "\n";
    $output .= "This display is from line " . __LINE__ . " in method " . __METHOD__ . "\n";
    $output .= "Other available methods are: \n";
    $output .= implode("\n", get_class_methods(__CLASS__));
    return $output;
  }
}


 ?>
