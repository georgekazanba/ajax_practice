function funcSuccess(data){
    if(data===""){$("select[name='product']").empty();}
    else{
        data=JSON.parse(data);
        for (let id in data){$("select[name='product']").append($("<option value='" + id + "'>" + data[id] + "</option>"))}
    }
}
$(document).ready(function(){
    $("select[name='category']").bind("change",funAjax);
    function funAjax(){
        $("select[name='product']").empty();
        $.ajax({
            url:"category.php",
            type:"GET",
            data:({category:$("select[name='category']").val()}),
            dataType:"html",
            success:funcSuccess
        });
    }
});