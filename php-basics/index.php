<!DOCTYPE html>
<?php
  $displayName = 'Angelica';
  date_default_timezone_set('UTC');
  $currentYear = date('Y');
  $currentDay = date('D');
  $currentDate = date('d');
  $currentMonth = date('M');
  $today = $currentDay . ', ' . $currentDate . ' ' . $currentMonth . ' ' . $currentYear;
 ?>
<html>
  <head>
  	<meta charset=utf-8>
  	<title>PHP Basics by <?php echo $displayName; ?></title>
  	<link href="css/style.css" rel="stylesheet" />
  </head>

  <body>
    <div id="wrap">
        <section class="sidebar text-center">
          <div class="avatar">
            <img src="img/logo.png" alt="Alt For Image">
          </div>
          <h1><?php echo $displayName; ?></h1>
          <p>Contact:<br />
          <a href="mailto:">EMAIL</a></p>
          <hr />
          <ul class="social">
            <li><a href=""><span class="icon twitter"></span></a></li>
          </ul>
          <hr />
          <p>Today: <?php echo $today; ?></p>
        </section>
        <section class="main">
          <h1>My First PHP Page</h1>

          <h2>Unit Conversion</h2>
            <?php include 'inc/units.php'; ?>
          <hr />

          <h2>Daily Exercise</h2>
            <?php include 'inc/exercise.php'; ?>
        </section>
    </div>
    <section class="footer text-center">
      &copy; <?php echo $currentYear .  ' ' . $displayName; ?>
    </section>
  </body>
</html>
