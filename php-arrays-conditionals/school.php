<?php

$student = 'Alena Holligan';
$classAverage = 82;
$currentGrade = 11;

//Students class average <70%:
if ($classAverage < 70) {
  echo "Dear $student,\n We look forward to seeing you at summer school, beginning July 1st!\n";
} else {
    if ($currentGrade == 9) {
    //Student class average >=70% and current grade 9
    echo "Dear $student,\n
    Congratulations on completing your freshman year in High School! We’ll see you on September 1st for the start of your sophomore year!\n";
  } elseif ($currentGrade == 10) {
    //Student class average >=70% and current grade 10
    echo "Dear $student,\n
    Congratulations on completing your sophomore year in High School! We’ll see you on September 1st for the start of your junior year!\n";
  } elseif ($currentGrade == 11) {
    //Student class average >=70% and current grade 11
    echo "Dear $student,\n
    Congratulations on completing your junior year in High School! We’ll see you on September 1st for the start of your senior year!\n";
  } elseif ($currentGrade == 12) {
    //Student class average >= 70% and current grade 12
    echo "Dear $student,\n
    Congratulations! You’ve graduated High School! Don’t forget to come back and visit.\n";
  }
}


?>
