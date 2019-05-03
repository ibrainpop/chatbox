$(document).ready(function(){
    $("#rejoindre").on("click", Rejoindre);
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
            if(data.result == true){ //redirection vers page de connexion
                window.location.replace("connexion.html");
            }else{
                $("#error-msg").append('<div class="alert alert-danger" role="alert">Cette discussion existe déjà</div>');
            }
        }

    })
}