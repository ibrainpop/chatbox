<?php

include "bdd_connection.php";

$discussionName = $_POST["Name"];

$requete = $bdd->prepare("
    SELECT Name FROM discussion WHERE Id_Discussion = ?
    ");

$requete->execute([$discussionName]);
$returnedName = $requete->fetch();

echo json_encode($returnedName);