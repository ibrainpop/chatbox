$(document).ready(function(){
    idNumber();
    processUser();
    $("#sendMessage").on("click", sendMessage);
})

//fonction permettant de récuperer le nom de la discussion en fonction de l'id
function idNumber(){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    var id = unescape(temp[1]);
    console.log(id);
    $.ajax({
        url : 'infosReturn.php',
        method : 'post',
        data :  {Id_Discussion : id},
        dataType : 'json',
        success : function(nameId){
            console.log(nameId);
            return nameId;
        }
    })
}

//fonction permettant de récuperer les paramètres dans l'url
function processUser()
  {
    
    var parameters = location.search.substring(1).split("&");

    // var temp = parameters[0].split("=");
    // var id = unescape(temp[1]);
   var temp = parameters[1].split("=");
    var pseudo = unescape(temp[1]);
    console.log(pseudo);
    return pseudo;

    // $(".discussion").append(id);
    // $(".utulisateur").append(pseudo);
   
  }

  //fonction permettant d'envoyer les messages
  function sendMessage(){
      var user = processUder();
      var idName = idNumber();
      var message = $("writtenMessage").val();
      $.ajax({
          url : 'chat.php',
          method : 'post',
          data : {Content : message, Id_Discussion : idName, User_Peudo : user },
          dataType : 'json',
          success : function(donnee){
              console.log(donnee);
          }

      })
  }
