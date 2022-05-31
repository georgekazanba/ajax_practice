function funcSuccess(data){
    if(data===""){$("select[name='city']").empty();}
    else{
        data=JSON.parse(data);
        for (let id in data){$("select[name='city']").append($("<option value='" + id + "'>" + data[id] + "</option>"))}
    }
}
$(document).ready(function(){
    $("select[name='country']").bind("change",funAjax);
    function funAjax(){
        $("select[name='city']").empty();
        $.ajax({
            url:"country.php",
            type:"GET",
            data:({country:$("select[name='country']").val()}),
            dataType:"html",
            success:funcSuccess
        });
    }
});