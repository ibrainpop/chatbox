var pseudo;
var idName;

$(document).ready(function(){
    
    pseudo = processUser();  
    idName = idNumber();
     afficheMessage();
    $("#sendMessage").on("click", sendMessage);
})

//fonction permettant de récuperer le nom de la discussion en fonction de l'id
function idNumber(id){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    var id = unescape(temp[1]);
    
    $.ajax({
        url : 'infosReturn.php',
        method : 'post',
        data :  {Id_Discussion : id},
        dataType : 'json',
        success : function(nameId){            
            $(".discussion").append(nameId.Name);
            
        }
    })
    return id;
}

//fonction permettant de récuperer le paramètre pseudo dans l'url
function processUser(){    
    var parameters = location.search.substring(1).split("&");
   var temp = parameters[1].split("=");
    var pseudo = unescape(temp[1]);
    $(".utulisateur").append(pseudo);   
    return pseudo;
  
  }
  

  //fonction permettant d'envoyer les messages
  function sendMessage(e){ 
      e.preventDefault();      
      var message = $("#writtenMessage").val();
    
      console.log(pseudo);
      console.log(idName);
    console.log(message);

      $.ajax({
          url : 'chat.php',
          method : 'post',
          data : {Content : message, Id_Discussion : idName, User_Pseudo : pseudo},
          dataType : 'json',
          success : function(data){
              console.log(data);
          }
          

      })
  }

  //fonction permettant de renvoyer les messages du chat
  function afficheMessage(){
      $.ajax({
          url : 'chatDisplay.php',
          method : 'post',
          dataType : 'json',
          success : function (data){
            for(var i = 0; i<data.length; i++){
                $("#displayChat1").append(data[i].Content);
                $("#displayChat1").after('<p>Envoyé par ' + data[i].User_Pseudo + " le " + data[i].DateTime);
            }
          }
      })
  }
