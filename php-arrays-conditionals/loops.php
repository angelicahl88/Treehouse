<?php

$currentYear = date('Y');
$year = $currentYear - 100;
$nicknames = array('Beeds', 'Bulldog', 'BD', 'Bulld');
// while (++$year <= $currentYear) {
//   echo $year . "\n";
// }

// do {
//   echo $year . "\n";
// } while (++$year <= $currentYear);


while (list($key, $val) = each($nicknames)) {
  echo "$key => $val\n";
}

?>
