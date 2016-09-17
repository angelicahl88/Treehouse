<?php

  function helloFirst() {
    echo "Hello, there\n";
  }

  //$currentUser = 'Beeds';

  function is_mike($currentUser) {
    //global $currentUser;
    if($currentUser == 'Mike') {
      echo "It is $currentUser\n";
    } else {
      echo "It is not Mike, it is $currentUser\n";
    }
  }

//is_mike('Mike');


function hello($arr) {
  if (is_array($arr)) {
    foreach($arr as $name) {
      echo "Hello $name, how is it going?\n";
    }
  } else {
    echo "Hello friends!\n";
  }
}

// hello([
//   'Hampton',
//   'Mike',
//   'Charlie'
// ]);

function greeting($name = 'Angelica', $timeOfDay = Null) {
  if($timeOfDay) {
    echo "Hi there $name, good $timeOfDay! \n";
  } else {
    echo "Hello, there $name\n";
  }
}
//greeting('Owain', 'morning');

$func = 'greeting';

$func();

 ?>
