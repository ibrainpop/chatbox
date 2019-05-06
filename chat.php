<?php

include "bdd_connection.php";

$newPseudo = $_POST["User_Pseudo"];
$id = $_POST["Id_Discussion"];

if(!empty($_POST["User_Pseudo"])){

    $requete = $bdd->prepare("
    INSERT INTO message Id_Discussion, User_Pseudo, Content, DateTime VALUES( ?, ?, ?, ?, ?)
    ");

    $requete->execute([$newPseudo]);
    $current_discussion = $requete-fetchAll();
    var_dump($newPseudo);
}else{
    echo "Merci de saisir un Pseudo";
}
echo json_encode($newPseudo);