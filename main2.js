var pseudo;
var idName;

$(document).ready(function(){
    
    pseudo = processUser();  
    idName = idNumber();
    afficheMessage();
    $("#sendMessage").on("click", sendMessage);
    setInterval(afficheMessage, 2000);
    
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

      $.ajax({
          url : 'chat.php',
          method : 'post',
          data : {Content : message, Id_Discussion : idName, User_Pseudo : pseudo},
          dataType : 'json',
          success : function(data){
              console.log(data);
              afficheMessage();
          }          

      })
      $("#writtenMessage").val("");
  }

  //fonction permettant de renvoyer les messages du chat
  function afficheMessage(){
    var idMessageCurrent = $("#displayChat1 div:last-of-type .sent").data("id");
    console.log(idMessageCurrent);
    if(idMessageCurrent == undefined) idMessageCurrent = 0;
            
      $.ajax({
          url : 'chatDisplay.php',
          method : 'post',
          data: {lastId : idMessageCurrent},
          dataType : 'json',
          success : function (data){
            
            for(var i = 0; i<data.length; i++){
                if(pseudo == data[i].User_Pseudo){
                $("#displayChat1").append("<div class='self' ><p class='sent' data-id= "+ data[i].Id_message + ">" + data[i].Content + "</p>" + "<p>Envoyé par " + data[i].User_Pseudo + " le " + data[i].DateTime + "</p></div>");
            }else{
                $("#displayChat1").append("<div><p class='sent' data-id= "+ data[i].Id_message + ">" + data[i].Content + "</p>" + "<p>Envoyé par " + data[i].User_Pseudo + " le " + data[i].DateTime + "</p></div>");
                }
            }
            
          }
      })
   
    }
    // setInterval(sendMessage, 2000);
    
    
    
