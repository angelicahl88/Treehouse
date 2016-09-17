<?php

// Report simple running errors
error_reporting(E_ALL);
// Display errors on screen
ini_set('display_errors', 1);
// HTML formatted errors
ini_set('html_errors', 1);

$error_levels = [
  'E_ALL',
  'E_NOTICE', //common, ignorable
  'E_WARNING', //common, ignorable
  'E_ERROR', //common, stop all processes from running
  'E_STRICT',
  'E_DEPRECATED',
  'E_PARSE'
];

foreach ($error_levels as $error) {
  echo "$error \n";
}
 ?>
