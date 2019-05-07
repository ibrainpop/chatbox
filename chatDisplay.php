<?php

include "bdd_connection.php";

$requete = $bdd->prepare("
SELECT Id_message, Id_Discussion, User_Pseudo, Content, DateTime FROM message 
WHERE Id_message > ?
");

$requete->execute([$_POST["lastId"]]);
$messagesDisplay = $requete->fetchAll();

echo json_encode($messagesDisplay);