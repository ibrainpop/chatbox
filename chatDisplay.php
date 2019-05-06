<?php

include "bdd_connection.php";

$requete = $bdd->prepare("
SELECT Id_message, Id_Discussion, User_Pseudo, Content, DateTime FROM message
");

$requete->execute();
$messagesDisplay = $requete->fetchAll();

echo json_encode($messagesDisplay);