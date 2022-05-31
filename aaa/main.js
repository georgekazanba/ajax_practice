function funcBefore(){$("#information").text("Ожидание данных...")}
function funcSuccess(data){
    if(data=="fail"){alert("Имя занято!");$("#information").text("");}
    else{$("#information").text(data);}
}
$(document).ready(function(){
    $("#done").bind("click",function(){
        let admin = "Admin";
        $.ajax({
            url:"content.php",
            type:"POST",
            data:({name:$('#name').val()}),
            dataType:"html",
            beforeSend:funcBefore,
            success:funcSuccess
        });
    });
});