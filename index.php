<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BIZFOX</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css" />
    <link rel="stylesheet" href="css/fullcalendar.css" />
    <link rel="stylesheet" href="css/fullcalendar.print.css" media="print"/>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" /> -->
</head>

<body>
    <div class="container-fluid">
        <nav class="nav navbar-default">
            <!-- navbar logo-->
            <div class="navbar-header">
                      <a href="index.php" class="nav navbar-brand">Full Calendar</a>
                    </div>

        </nav>
<div class="row">
<!--full  calendar panel column -->
    <div class="col-md-9">
        <div id="calendar"></div>
    </div>

<!-- project panel column -->
    <div class="col-md-3">
        <?php require_once "./server/project-panel.php" ;?>
    </div>

</div><!-- row ends-->

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/moment.js"></script>
<script src="js/fullcalendar.js"></script>
<script src="js/bootstrap-datetimepicker.js"></script>
<script src="js/timesheet_new.js"></script>
<script src="js/main.js"></script>

<script type="text/javascript">

$('.from_date').datetimepicker({
    language:  'fr',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 3,
    forceParse: 0,
    format: 'dd/mm/yyyy',
    startDate: -Infinity,      // set a minimum date
    endDate: new Date()  		// set a Maximum Date
    
})

 $('.to_date').datetimepicker({
    language:  'fr',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 3,
    forceParse: 0,
    useCurrent: false,
    format: 'dd/mm/yyyy',
    startDate: -Infinity,      // set a minimum date
    endDate: new Date()  		// set a Maximum Date
})

</script>

 <script type="text/javascript">
    $(".from_date").on("changeDate", function (e) {
    	
        $('.to_date').datetimepicker('setStartDate', e.date);
 
     });
     $(".to_date").on("changeDate", function (e) {
         $('.from_date').datetimepicker('setEndDate', e.date);
     });
    
    </script>
    
<script>
$(document).ready(function () {
  $("#1").click(function () {
   $("#1").addClass('big');
   $("#2,#3").removeClass('big');
  });
   $("#2").click(function () {
   $("#2").addClass('big');
   $("#1,#3").removeClass('big');
  });
   $("#3").click(function () {
   $("#3").addClass('big');
   $("#1,#2").removeClass('big');
  });
   $("#4").click(function () {
   $("#4").addClass('big');
   $("#5,#6").removeClass('big');
  });
   $("#5").click(function () {
   $("#5").addClass('big');
   $("#4,#6").removeClass('big');
  });
   $("#6").click(function () {
   $("#6").addClass('big');
   $("#4,#5").removeClass('big');
  });
  
    
});
</script>
</body>

</html>