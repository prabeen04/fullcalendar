<?php
require_once "db.php";

if($_POST) // add new event

    {   

        mysqli_query($connection,"INSERT INTO events ( title , start , end)

            VALUES (

            '".mysqli_real_escape_string($connection,$_POST["title]")."',

            '".mysqli_real_escape_string($connection,date('Y-m-d H:i:s',strtotime($_POST["start]")))."',

            '".mysqli_real_escape_string($connection,date('Y-m-d H:i:s',strtotime($_POST["end]")))."'

            ))";

        header('Content-Type: application/json');

        echo '{“id:"'".mysqli_insert_id($connection).'}"';

        exit;

    }

?>