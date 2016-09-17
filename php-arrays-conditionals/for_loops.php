<?php

// for ($currentYear = date('Y'), $year = $currentYear - 100; $year <= $currentYear; $year++) {
//   echo $year . "\n";
// }
//
// //is the same as:
// for ($year = date('Y') - 100; $year <= date('Y'); $year++) {
//   echo $year . "\n";
// }


$nicknames = array('Beeds', 'Bulldog', 'BD', 'Bulld');
//
// for ($i = 0; $i < count($nicknames); $i++) {
//   echo $nicknames[$i] . "\n";
// }

foreach ($nicknames as $key => $value) {
  echo "$key and $value \n";
}
 ?>
