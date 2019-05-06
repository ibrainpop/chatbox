$(document).ready(function(){
    $("#rejoindre").on("submit", Rejoindre);
    $(".new-chat").on("submit", Creer);
    $(".connexion-chat").on("submit", Chat);
    // $(".discussion").html("Discussion : <p><strong>" + pseudo + "</strong><p/>");
})
function Rejoindre(e){
    e.preventDefault();
    var  name = $("#joinChat").val();
    $.ajax({
        url : 'rejoindre.php',
        method : 'post',
        data : {Name : name},
        dataType : 'json',
        success : function(data){
            if(data.result == true){ 
               // redirection vers page de connexion
                window.location.replace("connexion.html?Id_Discussion=" +data.Id_Discussion); 
            }else{
                $("#error-msg").append('<div class="alert alert-danger" role="alert">Cette discussion n\'existe pas</div>');
            }
        }

    })
}
function Creer(e){
    e.preventDefault();
    var creation = $("#creatChat").val();
    $.ajax({
        url : 'creer.php',
        method : 'post',
        data : {Name : creation},
        dataType : 'json',
        success : function(data){
            console.log(data);
            if(data.result == true){ 
                //redirection vers page de connexion
                 window.location.replace("connexion.html?Id_Discussion =" + data.Discussion);         
            }else{
                $("#error-msg").append('<div class="alert alert-danger" role="alert">Cette discussion existe déjà</div>')
            }
        }
        
    })
}
function Chat(e){
    e.preventDefault();
    var pseudo = $("#Chat").val();

    //récupération de l'id dans l'url
    var id = location.search.substring(15);
    
    // $.ajax({
    //     url : 'chat.php',
    //     method : 'post',
    //     data : {User_Pseudo : pseudo, Id_Discussion : id},
    //     dataType : 'json',
    //     success : function(data){
    //         console.log(data);
    //     }



    // })
}