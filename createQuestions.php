

<?php 

$letLevelOneQuetions = array();




define ('question', 'question');



$sql = mysqli_connect("localhost", "root", "", "campus rush");

// search the database for the questions level 1
$result = mysqli_query($sql, "SELECT * FROM questions WHERE level = 1") or die("Failed to search database");
$row = mysqli_fetch_array($result);

if ($row['level'] == 1) {

 //   $letLevelOneQuetions = [{question: $row['questions'], choiceA: $row['answer1'], 
  //      choiceB: $row['answer2'], choiceC: $row['answer3'], choice4: $row['answer4'],
 //   correctAnswer: $row['answerKey']     }]

//$letLevelOneQuetions [] = new $letLevelOneQuetions([{
   // $row['questions'],$row['answer1'], 
   // $row['answer2'], $row['answer3'],  
   // $row['answer4'], $row['answerKey']     

    $letLevelOneQuetions [] = (object) array(question => $row['questions'] );
};

// correct answer may be an issue


$js_array =  json_encode($letLevelOneQuetions);
echo $js_array;


?>


