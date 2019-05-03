<?php
include "bdd_connection.php";

$nom = $_POST["Name"];

if(array_key_exists("Name",$_POST) && !empty($_POST["Name"])){
    $requete = $bdd->prepare("
    SELECT
        Id_Discussion
    FROM 
        discussion
    WHERE 
        Name=?
    ");
    $requete->execute([$nom]);
    $name_discution = $requete->fetch();
    if(empty($name_discution) == false){
        $resultat = ["result" => true];
    }else{
        $resultat = ["result" => false];
    }
}else{
    $resultat = ["result" => false];
}
echo json_encode($resultat);
