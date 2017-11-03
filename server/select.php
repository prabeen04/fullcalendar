<?php
require_once "db.php";

if(isset($_GET))
//echo json_encode('fgfgffgfg'); 

    {

       // header('Content-Type: application/json');
       header("Access-Control-Allow-Origin: *");
       
        // $start = mysqli_real_escape_string($connection,$_GET[“start”]);

        // $end = mysqli_real_escape_string($connection,$_GET[“end”]);

        

        $result = mysqli_query($connection,"SELECT * FROM  events");

        while($row = mysqli_fetch_assoc($result))

        {

            $events[] = $row; 

        }

        echo json_encode($events); 

        exit;

    }
?>