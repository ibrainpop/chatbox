<?php
include 'bdd_connection.php';

var_dump($_POST);
$newName = $_POST['Name'];
//permet de mettre en majuscule le nom de la discussion
$newNom = strtoupper($newName);

//permet de remplacer l'espace par un tiret
$nom = str_replace(" ", "-", $newNom);


if(array_key_exists("Name",$_POST) && !empty($_POST["Name"])){
    

    $requete = $bdd->prepare("
    SELECT Id_Discussion FROM  discussion WHERE Name=?
    ");
    $requete->execute([$nom]);
    $name_discution = $requete->fetch();

    if(empty($name_discution) == false){
        $resultat = ["result" => true];
    }else{
        if($resultat = ["result" => false]){   
        $requete = $bdd->prepare("
        INSERT INTO  discussion (Name) VALUES (?)
        ");
        $requete->execute([$nom]);
        }
        
    }
    
}else{
    $resultat = ["result" => false];
}
echo json_encode($resultat);
