<?php

include "bdd_connection.php";



if(!empty($_POST["User_Pseudo"])){
    $newPseudo = $_POST["User_Pseudo"];
    $id = $_POST["Id_Discussion"];
    $message = $_POST["Content"];


    $requete = $bdd->prepare("
    INSERT INTO message Id_Discussion, User_Pseudo, Content VALUES(?, ?, ?)
    ");

$requete->execute([$id, $newPseudo, $message]);

}

