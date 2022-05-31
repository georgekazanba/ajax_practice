<?php
switch ($_GET["country"]){
    case 1:
        echo json_encode(array("1" => "Вашингтон","2" => "Сиэтл"));
        break;
    case 2:
        echo json_encode(array("3" => "Париж","4" => "Марсель"));
        break;
    default:
        echo "";
        break;
}
?>