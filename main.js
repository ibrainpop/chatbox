$(document).ready(function(){
    $("#rejoindre").on("submit", Rejoindre);
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
            console.log(data);
        }

    })
}