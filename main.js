$(document).ready(function(){
    $("#rejoindre").on("click", Rejoindre);
})
function Rejoindre(){
    var  name = $("#joinChat").val();
    $.ajax({
        url : 'rejoindre.php',
        method : 'post',
        data : {name :name},
        dataType : 'json',
        success : function(data){
            console.log(data);
        }

    })
}