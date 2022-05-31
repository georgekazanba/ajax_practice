<?php
switch ($_GET["category"]){
    case 1:
        echo json_encode(array("1" => "Клавиатура SVEN","2" => "Клавиатура A4TECH"));
        break;
    case 2:
        echo json_encode(array("3" => "Монитор AOS","4" => "Монитор BENQ"));
        break;
    case 3:
        echo json_encode(array("5" => "Мышь DEFENDER","6" => "Мышь LOGITECH"));
        break;
    case 4:
        echo json_encode(array("7" => "Колонки JBL","8" => "Колонки EDIFIER"));
        break;
    default:
        echo "";
        break;
}
?>