<?php

include "bdd_connection.php";

$discussionName = $_POST["Id_Discussion"];

$requete = $bdd->prepare("
    SELECT Name FROM discussion WHERE Id_Discussion = ?
    ");

$requete->execute([$discussionName]);
$returnedName = $requete->fetch();

echo json_encode($returnedName);