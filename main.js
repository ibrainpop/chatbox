$(document).ready(function(){
    $("#rejoindre").on("submit", Rejoindre);
    $(".new-chat").on("submit", Creer);
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
                //redirection vers page de connexion
                window.location.replace("connexion.html");
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
            if(data.result == true){ 
                $("#error-msg").append('<div class="alert alert-danger" role="alert">Cette discussion existe déjà</div>')
                
            }else{
                //redirection vers page de connexion
                window.location.replace("connexion.html");
                
            }
        }
        
    })
}