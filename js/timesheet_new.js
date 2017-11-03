//Global Variables

var color_class_select = null;
var select_switch=false;
var div_exist=false;
var day_hover_select =null;

var jsonObjectString=null;
var jsonMultiSelectString=null;
var jsonHalfHolidayString=null;
var jsonFullHolidayString=null;



function showProjects(data) {
 	
	 $('#projectList').empty();
	 $('#projectList').append('<option value="" >Select</option>');
	
	
  for ( var i = 0, len = data.length; i < len; ++i) {
      var user = data[i];
      $('#projectList').append("<option value=\"" + user  + "\">" + user + "</option>");
	}
	
}

$('#projectList').change(function() {
  
  
  var e=$("#projectList option:selected").text();
  

  
  
  $.ajax({  
	 	 type: "POST",   
	     url : "/mPortal/activity_list",         		
	     data : "projectName=" + e , 
	     success : function(response) {  
	    	 
	    	showActivity(response);   
	     },  
	     error : function(e) {  
	      alert('Error: ' + e);   
	     }  
	    }); 
});

function showActivity(data) {
	
	 $('#activityList').empty();
	 $('#activityList').append('<option value="" >Select</option>');
	
	
 for ( var i = 0, len = data.length; i < len; ++i) {
     var user = data[i];
     $('#activityList').append("<option value=\"" + user  + "\">" + user + "</option>");
	}
	
}



$(document).ready(function() {

	$(':radio[value=Project]').attr('checked', true);
	$(':radio[value=External]').attr('checked', true);
	
	 $('#day_divide_holiday').toggle($('#half_day_chkbox_holiday').is(':checked'));
	 $('#to_date_holiday').toggle(!$('#half_day_chkbox_holiday').is(':checked'));
	
	$("input[id='multiSelect_hidden']").val(select_switch);

	var y = $('input[name="category"]:checked').val();
	if (y == 'Project') {
		
		$('#table').addClass('table_timesheet_project').removeClass('table_timesheet_holiday');

		$('#project_span').toggle(!$(this).is(':checked'));
		$('#holiday_span').toggle($(this).is(':checked'));
		$('#travel_span').toggle($(this).is(':checked'));
		$('#clientRelationship_span').toggle($(this).is(':checked'));

		var x = $('input[name="project_type"]:checked').val();
		
		if (x=='External') {
			 $.ajax({  
			 	 type: "POST",   
			     url : "/mPortal/external_project_list",         		
			     data : "type=" + x ,  
			     success : function(response) {  
			    	 
			    	showProjects(response);   
			     },  
			     error : function(e) {  
			      alert('Error: ' + e);   
			     }   
		 
	 		 });
		}

	} else if (y == 'Travel') {

		$('#travel_span').toggle($(this).is(':checked'));
		$('#project_span').toggle(!$(this).is(':checked'));
		$('#holiday_span').toggle(!$(this).is(':checked'));
		$('#clientRelationship_span').toggle(!$(this).is(':checked'));

	} else if (y == 'clientRelationship') {

		$('#clientRelationship_span').toggle($(this).is(':checked'));
		$('#holiday_span').toggle(!$(this).is(':checked'));
		$('#project_span').toggle(!$(this).is(':checked'));
		$('#travel_span').toggle(!$(this).is(':checked'));

	} else if (y == 'Holiday') {

		$('#holiday_span').toggle($(this).is(':checked'));
		$('#project_span').toggle(!$(this).is(':checked'));
		$('#travel_span').toggle(!$(this).is(':checked'));
		$('#clientRelationship_span').toggle(!$(this).is(':checked'));
		$("input[id=multiSelect_holiday_hidden]").val(false);

	}

});



$('input[name="project_type"]').change(function(){
	var y = $( 'input[name="project_type"]:checked' ).val();

	
	if (y=='Internal') {
		
		
		 $.ajax({  
		 	 type: "POST",   
		     url : "/mPortal/internal_project_list",         		
		     data : "type=" + y ,  
		     success : function(response) {  
		    	 
		    	showProjects(response);   
		     },  
		     error : function(e) {  
		      alert('Error: ' + e);   
		     }   
	 
		 });
	}
	else{
		
		 $.ajax({  
		 	 type: "POST",   
		     url : "/mPortal/external_project_list",         		
		     data : "type=" + y ,  
		     success : function(response) {  
		    	 
		    	showProjects(response);   
		     },  
		     error : function(e) {  
		      alert('Error: ' + e);   
		     }   
	 
		 });
		
		
	}
		
});


$('input[name="category"]').change(function() {
	var x = $('input[name="category"]:checked').val();

	if (x == 'Project') {
		$('#table').addClass('table_timesheet_project').removeClass('table_timesheet_holiday').removeClass('table_timesheet_travel');
		$("#table td").removeClass('selected_holiday');
		
		$('#project_span').toggle($(this).is(':checked'));
		$('#holiday_span').toggle(!$(this).is(':checked'));
		$('#travel_span').toggle(!$(this).is(':checked'));
		$('#clientRelationship_span').toggle(!$(this).is(':checked'));
		
		
		$('input[name="project_type"]').attr('checked',false);
		
		$('input[name="project_type"]').change(function(){
			var y = $( 'input[name="project_type"]:checked' ).val();

			
			if (y=='Internal') {
				
				
		 		 $.ajax({  
				 	 type: "POST",   
				     url : "/mPortal/internal_project_list",         		
				     data : "type=" + y ,  
				     success : function(response) {  
				    	 
				    	showProjects(response);   
				     },  
				     error : function(e) {  
				      alert('Error: ' + e);   
				     }   
			 
		 		 });
			}
			else{
				
				 $.ajax({  
				 	 type: "POST",   
				     url : "/mPortal/external_project_list",         		
				     data : "type=" + y ,  
				     success : function(response) {  
				    	 
				    	showProjects(response);   
				     },  
				     error : function(e) {  
				      alert('Error: ' + e);   
				     }   
			 
		 		 });
				
				
			}
				
		});
		

	} else if (x == 'Travel') {

		$('#travel_span').toggle($(this).is(':checked'));
		$('#project_span').toggle(!$(this).is(':checked'));
		$('#holiday_span').toggle(!$(this).is(':checked'));
		$('#clientRelationship_span').toggle(!$(this).is(':checked'));
		
		$('#table').addClass('table_timesheet_travel').removeClass('table_timesheet_holiday').removeClass('table_timesheet_project');
		$("#table td").removeClass('selected_holiday');

	} else if (x == 'clientRelationship') {

		$('#clientRelationship_span').toggle($(this).is(':checked'));
		$('#holiday_span').toggle(!$(this).is(':checked'));
		$('#project_span').toggle(!$(this).is(':checked'));
		$('#travel_span').toggle(!$(this).is(':checked'));

	} else if (x == 'Holiday') {
		$('#table').addClass('table_timesheet_holiday').removeClass('table_timesheet_project').removeClass('table_timesheet_travel');
		$('#table').find('div.fst').remove();
		$('#table').find('div.snd').remove();
		$('#table').find('div.multi_fst').remove();
		$('#table').find('div.multi_snd').remove();
		
		$('#holiday_span').toggle($(this).is(':checked'));
		$('#project_span').toggle(!$(this).is(':checked'));
		$('#travel_span').toggle(!$(this).is(':checked'));
		$('#clientRelationship_span').toggle(!$(this).is(':checked'));
		$("input[id=multiSelect_holiday_hidden]").val(false);
		
	}

});




$("#timesheet_form")
		.submit(
				function(e) {

					var str = $("#timesheet_form");
					e.preventDefault();

					var data = {};
					// alert(JSON.stringify(str));

					/*
					 * $.each(this, function(i, v){ var input = $(v);
					 * data[input.attr("name")] = input.val(); delete
					 * data["undefined"]; });
					 */
					var newDate_fromDate = null;
					var newDate_toDate = null;
					
					

					if ($('input[name="from_date"]').val()) {

						var date_from = new Date($('input[name="from_date"]').val()),
						yr = date_from.getFullYear(),
						month = (date_from.getMonth()+1) < 10 ? '0' + (date_from.getMonth()+1): (date_from.getMonth()+1),
						day = date_from.getDate() < 10 ? '0' + date_from.getDate(): date_from.getDate();
						newDate_fromDate = yr + '-' + month + '-' + day;

					}

					if ($('input[name="to_date"]').val()) {
						var date_to = new Date($('input[name="to_date"]').val()), yr = date_to
								.getFullYear(), month = (date_to.getMonth()+1) < 10 ? '0'
								+ (date_to.getMonth()+1)
								: (date_to.getMonth()+1), day = date_to.getDate() < 10 ? '0'
								+ date_to.getDate()
								: date_to.getDate();
						newDate_toDate = yr + '-' + month + '-' + day;
					}

					data["project_type"] = $(
							'input[name="project_type"]:checked').val();
					data["project"] = $('#projectList').val();
					data["activity"] = $('#activityList').val();
					data["from_date"] = newDate_fromDate;
					data["to_date"] = newDate_toDate;
					data["from_time"] = $("#labelTime").val();
					data["to_time"] = $("#labelTime_To").val();
					data["details"] = $('input[name="details"]').val();
					data["multiselect_check"] = $('#multiSelect_hidden').val();
					

				//	alert(JSON.stringify(data));

					if ($('input[name="from_date"]').val()) {

						$.ajax({
							 type: "POST",   
							    url : "/mPortal/planner_project_data",           
							   
							    data: {'fromdate': newDate_fromDate, 
							    		'todate': newDate_toDate,
							    		'projectName':$('#projectList').val(),
							    		'activityName':$('#activityList').val(),
							    		'fromTime':$("#labelTime").val(),
							    		'toTtime':$("#labelTime_To").val(),
							    		'detailsDesc':$('input[name="details"]').val(),
							    		'multiselectCheck':$('#multiSelect_hidden').val()
							    	  },
							    success : function(response) {
							    	multiSelectJson= response;
							    	
							    	dataRetrieve(response);
							  
							
							
							},
							error : function(e) {
								alert('Error: ' + e);
							}
						});

					}

				}); //End of Project Form Action



//Holiday Form Action
$("#timesheet_holiday_form").submit(function(e) {

	e.preventDefault();
	
	
	var newDate_fromDate = null;
	var newDate_toDate = null;
	var dayValue=null;
	
	

	if ($('input[name="fromDateHoliday"]').val()) {

		var date_from = new Date($('input[name="fromDateHoliday"]').val()),
		yr = date_from.getFullYear(),
		month = (date_from.getMonth()+1) < 10 ? '0' + (date_from.getMonth()+1): (date_from.getMonth()+1),
		day = date_from.getDate() < 10 ? '0' + date_from.getDate(): date_from.getDate();
		newDate_fromDate = yr + '-' + month + '-' + day;

	}

	if ($('input[name="toDateHoliday"]').val()) {
		var date_to = new Date($('input[name="toDateHoliday"]').val()), yr = date_to
				.getFullYear(), month = (date_to.getMonth()+1) < 10 ? '0'
				+ (date_to.getMonth()+1)
				: (date_to.getMonth()+1), day = date_to.getDate() < 10 ? '0'
				+ date_to.getDate()
				: date_to.getDate();
		newDate_toDate = yr + '-' + month + '-' + day;
	}
	
	
	if ($('#half_day_chkbox_holiday').is(":checked")) {
		if($('#sliderCheckboxHDayHalf').is(":checked")){
			dayValue="Afternoon";
			 
		 }else if (!$('#sliderCheckboxHDayHalf').is(":checked")) {
			 dayValue="Morning";
		}
	}else{
		
		dayValue=null;
	}
	
	
	if ($('input[name="fromDateHoliday"]').val()) {
		

		$.ajax({
			 type: "POST",   
			    url : "/mPortal/planner_holiday_data",           
			   
			    data: {'fromdate': newDate_fromDate, 
			    		'todate': newDate_toDate,
			    		'halfDay': $('#half_day_chkbox_holiday').is(":checked"),
			    		'dayDivide': dayValue,
			    		'coverDesc':$('input[name="coverHoliday"]').val(),
			    		'detailsDesc':$('input[name="detailsHoliday"]').val(),
			    		'multiHolidayCheck':$('#multiSelect_holiday_hidden').val()
			    	  },
			    success : function(response) {
			    	multiSelectJson= response;
			    	dataRetrieve(response);
			
			
			},
			error : function(e) {
				alert('Error: ' + e);
			}
		});

	}

}); //End of Holiday Form Action




$("#timesheet_travel_form").submit(function(e) {
	e.preventDefault();
	
	
	var newDate_fromDate = null;
	var newDate_toDate = null;
	
	

	if ($('input[name="from_date_travel_outbound"]').val()) {

		var date_from = new Date($('input[name="from_date_travel_outbound"]').val()),
		yr = date_from.getFullYear(),
		month = (date_from.getMonth()+1) < 10 ? '0' + (date_from.getMonth()+1): (date_from.getMonth()+1),
		day = date_from.getDate() < 10 ? '0' + date_from.getDate(): date_from.getDate();
		newDate_fromDate = yr + '-' + month + '-' + day;

	}

	if ($('input[name="to_date_travel_outbound"]').val()) {
		var date_to = new Date($('input[name="to_date_travel_outbound"]').val()), yr = date_to
				.getFullYear(), month = (date_to.getMonth()+1) < 10 ? '0'
				+ (date_to.getMonth()+1)
				: (date_to.getMonth()+1), day = date_to.getDate() < 10 ? '0'
				+ date_to.getDate()
				: date_to.getDate();
		newDate_toDate = yr + '-' + month + '-' + day;
	}
	
	
	if ($('input[name="from_date_travel_outbound"]').val()) {
		
		

		$.ajax({
			 type: "POST",   
			    url : "/mPortal/planner_travel_data",           
			   
			    data: {'outbound_fromdate': newDate_fromDate, 
			    		'outbound_todate': newDate_toDate,
			    		'projectName':$('#projectList_travel').val(),			    		
			    		'outbound_fromTime':$("#labelTime_from_outbound_travel").val(),
			    		'outbound_toTime':$("#labelTime_to_outbound_travel").val(),
			    		'detailsDesc':$('input[name="details_travel"]').val(),
			    		'multiselectCheck':$('#multiSelect_hidden_travel').val(),
			    		'fromOutbound':$('#outbound_from_travel').val(),
			    		'toOutBound':$('#outbound_to_travel').val(),
			    		
			    	  },
			    success : function(response) {
			    	
			    	multiSelectJson= response;
			    	dataRetrieve(response);
			
			},
			error : function(e) {
				alert('Error: ' + e);
			}
		});

	}

	
	
}); //End of Holiday Form Action



function dataRetrieve(dataResponse){
	

	
	var dateArray=dataResponse.split("@-@");
	
	var singleDate_ajax=dateArray[0];
	var multiDate_ajax=dateArray[1];
	
	var halfDay_ajax=dateArray[2];
	var fullDay_ajax=dateArray[3];
	var multiHoliday_ajax=dateArray[4];
	//alert(multiHoliday_ajax);
	
	var singleDate_travel_ajax=dateArray[5];
	var multiDate_travel_ajax=dateArray[6];
	
	
	
	var singleDateJson=$.parseJSON(singleDate_ajax);
	var multiDateJson=$.parseJSON(multiDate_ajax);
	var halfDayJson=$.parseJSON(halfDay_ajax);
	var fullDayJson=$.parseJSON(fullDay_ajax);
	var multiHolidayDayJson=$.parseJSON(multiHoliday_ajax);
	var singleDateTravelJson=$.parseJSON(singleDate_travel_ajax);
	var multiDateTravelJson=$.parseJSON(multiDate_travel_ajax);
	
	//alert(singleDateJson);
	/*alert(multiDate_ajax);*/
	

	var yearHeader= $("#table td").parents('table').find('.yearHeader').text();
	
	 $('#table tbody tr td').removeClass('evnt-green').html('');
	 $('#table tbody tr td').removeClass('retrieved_holiday').html('');
	 $('#table tbody tr td').removeClass('approved_holiday').html('');
	 $('#table tbody tr td').removeClass('multiselectcell').html('');
	 $('#table tbody tr td').removeClass('evnt-green-travel').html('');
	 $("#table td").removeClass('selected_holiday');
	 $('#table').find('div.fst').remove();
	 $('#table').find('div.snd').remove();
	 $('#table').find('div.fst_travel').remove();
	 $('#table').find('div.snd_travel').remove();
	 $('#table').find('div.multi_fst').remove();
	 $('#table').find('div.multi_fst_travel').remove();
	 $('#table').find('div.multi_snd_travel').remove();
	
	 var i =0;
	 $("#table").find('.dayMonth').each(function () {
		 
		 var testString=temp[i].replace(/\s+/g, '')+yearHeader;
		 
		// alert(testString);
		 
		 var table_x=$(this).parents('table').find('th');
		 
		 
			////////////////////HALF HOLIDAY///////////////////	  
						
					  $.each(halfDayJson, function (key, value) {
				           
						  if(key==testString){
							  
							  var DayValueInLoop=null;
							  var StatusInLoop=null;
							  
							  for (var k in value){
								  if(value[k]=='Morning' || value[k]=='Afternoon'){
									  DayValueInLoop=value[k];
								  }
							  }
							  
							  
							  for (var k in value){
								  if(value[k]=='Pending' || value[k]=='Approved'){
									  StatusInLoop=value[k];
								  }
								  
							  }
							  
							  var x_holiday= table_x.eq(i);
							  if (DayValueInLoop=='Morning') {
								  if (StatusInLoop=='Pending') {
									  
									  for(j = 2; j < 9; j++) { 
											$('#table tr:eq('+j+') td:eq('+ (x_holiday.index())+')').addClass('retrieved_holiday');
										}
									
								  }
								  
								  if (StatusInLoop=='Approved') {
									  
									  for(j = 2; j < 9; j++) { 
											$('#table tr:eq('+j+') td:eq('+ (x_holiday.index())+')').addClass('approved_holiday');
										}
									
								  }
								 
							  }else if(DayValueInLoop=='Afternoon'){
								  
								  if (StatusInLoop=='Pending') {
									  
									  for(j = 8; j < 15; j++) { 
											$('#table tr:eq('+j+') td:eq('+ (x_holiday.index())+')').addClass('retrieved_holiday');
									  }  
								  }
								  
								  if (StatusInLoop=='Approved') {
									  
									  for(j = 8; j < 15; j++) { 
											$('#table tr:eq('+j+') td:eq('+ (x_holiday.index())+')').addClass('approved_holiday');
									  }  
									  
								  }
								  
								 
							  }
							  
							  
							  
							 /* for (var k in value){
								alert(value[k]);
								 
								 var x_holiday= table_x.eq(i);
								 
								 if(value[k]=='Morning'){
									 
									 for(j = 2; j < 9; j++) { 
											$('#table tr:eq('+j+') td:eq('+ (x_holiday.index())+')').addClass('retrieved_holiday');
										}
								 }
								 if(value[k]=='Afternoon'){
									 
									 for(j = 8; j < 15; j++) { 
											$('#table tr:eq('+j+') td:eq('+ (x_holiday.index())+')').addClass('retrieved_holiday');
										}
								
								 
								 }
								 
								 
								 
							  }*/
						  }
						  
				        }); 
					   
					////////////////////FULL HOLIDAY///////////////////	 
					
					
					$.each(fullDayJson, function (key, value) {
						           
								  if(key==testString){
									  
									  var StatusInLoop=null;
									  for (var k in value){
										  if(value[k]=='Pending' || value[k]=='Approved'){
											  StatusInLoop=value[k];
										  }
										  
									  }
									  var x_holiday= table_x.eq(i);
								
									  if (StatusInLoop=='Pending') {
										  
										  $('#table tbody td:nth-child('+( x_holiday.index()+2)+')').addClass('retrieved_holiday');	
											 
									  }else if(StatusInLoop=='Approved'){
										  $('#table tbody td:nth-child('+( x_holiday.index()+2)+')').addClass('approved_holiday');	
											 
											 
									  }
									  
									  
									
								  }
								  
						        }); 
								 
			
		 
//////////////////////////////SINGLE SELECT CELL///////////////////////////
					 $.each(singleDateJson, function (key, value) {
					      if(key==testString){
						        
				         		
				        	  for (var j = 0; j < value.length; j++) {
				        		  
				        		var v=value[j];
				        		
				        		for (var k in v){
				        			  var timeSplit=k.split("-");
					        		  var oneTimeSplit=timeSplit[0].split(":");
					        		  
					        		//  alert(oneTimeSplit[0]);
					        		/*   if (oneTimeSplit[1]=="00") {
					        			  
					        			  alert("hello");
										
									  } */
									  
									  var keyValueEventSplit=v[k].split("-@");
									  var Id=keyValueEventSplit[0];
									  var projectName=keyValueEventSplit[1];
									  var activityName=keyValueEventSplit[2];
									  var ProjectType=keyValueEventSplit[3];
									  
					        		  var onlyHour=(parseInt(oneTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
					        		  
					        		  var time_final=onlyHour+":00";
				        		   
				        		    
				        			 $("#table").find('.timeHeader').each(function () {
				        				 
				        				 
				        				 	  var time  = this.parentNode.cells[0];
							        		  
							        		  
							        		  if (time_final==$(time).text()) {
							        			  row_header_index = $(this).closest('tr').index();
						        				  $('#table tbody tr:eq('+row_header_index+') td:eq('+(i-1)+')').append('<div id="neofirst" class="fsthalf"  name=""/><div id="neoSecond" class="sndhalf" name=""/>');
							        			  
							        			  if (oneTimeSplit[1]=="00") {
							        				
							        				  $('#table tbody tr:eq('+row_header_index+') td:eq('+(i-1)+')').find("div.fsthalf").addClass("selectedFirstHalf").html(projectName);
													
												  }
							        			  else {
							        				  $('#table tbody tr:eq('+row_header_index+') td:eq('+(i-1)+')').find("div.sndhalf").addClass("selectedSecondHalf").html(projectName);
							        				  
							        			  }
							        			  
							        			  
							        			  
							        		  }
				        		  
				        			 })
				        	
				        			
				        			
				        		}
		
				        		  
				      			} 
				        	
				           }
				         
				       });
					 
					 
					 
//////////////////////////////SINGLE TRAVEL SELECT CELL///////////////////////////
					 $.each(singleDateTravelJson, function (key, value) {
					      if(key==testString){
						        
				         		
				        	  for (var j = 0; j < value.length; j++) {
				        		  
				        		var v=value[j];
				        		
				        		for (var k in v){
				        			  var timeSplit=k.split("-");
					        		  var oneTimeSplit=timeSplit[0].split(":");
					        		  
					        		//  alert(oneTimeSplit[0]);
					        		/*   if (oneTimeSplit[1]=="00") {
					        			  
					        			  alert("hello");
										
									  } */
									  
									  var keyValueEventSplit=v[k].split("-@");
									  var Id=keyValueEventSplit[0];
									  var projectName=keyValueEventSplit[1];
									  var activityName=keyValueEventSplit[2];
									  var ProjectType=keyValueEventSplit[3];
									  
					        		  var onlyHour=(parseInt(oneTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
					        		  
					        		  var time_final=onlyHour+":00";
				        		   
				        		    
				        			 $("#table").find('.timeHeader').each(function () {
				        				 
				        				 
				        				 	  var time  = this.parentNode.cells[0];
							        		  
							        		  
							        		  if (time_final==$(time).text()) {
							        			  row_header_index = $(this).closest('tr').index();
						        				  $('#table tbody tr:eq('+row_header_index+') td:eq('+(i-1)+')').append('<div id="neofirst_travel" class="fsthalf_travel"  name=""/><div id="neoSecond_travel" class="sndhalf_travel" name=""/>');
							        			  
							        			  if (oneTimeSplit[1]=="00") {
							        				
							        				  $('#table tbody tr:eq('+row_header_index+') td:eq('+(i-1)+')').find("div.fsthalf_travel").addClass("selectedFirstHalf_travel").html(projectName);
													
												  }
							        			  else {
							        				  $('#table tbody tr:eq('+row_header_index+') td:eq('+(i-1)+')').find("div.sndhalf_travel").addClass("selectedSecondHalf_travel").html(projectName);
							        				  
							        			  }
							        			  
							        			  
							        			  
							        		  }
				        		  
				        			 })
				        	
				        			
				        			
				        		}
		
				        		  
				      			} 
				        	
				           }
				         
				       });
				       
				        

	        
	     i++;
	 });
	 
	 
	 
//////////////////////////////MULTIDATE HOLIDAY////////////////////////////////////////////////	 
	
		 
		$.each(multiHolidayDayJson, function (key, value) {
			
			 var keyDateString_holiday=key.split("-@");
			 var key_fromDate_holiday=keyDateString_holiday[0];
			 var key_toDate_holiday=keyDateString_holiday[1];
			 
			
			           
			 var s =0;
			 var start_date_count_holiday=0;
			 var end_date_count_holiday=0;
			 
			 var status_holiday=null;
			 
			for (var k in value) {
				if (k=="status") {
					status_holiday=value[k];
				}
				
				
			}
			
			$("#table").find('.dayMonth').each(function () {
				 
				var testString=temp[s].replace(/\s+/g, '')+yearHeader;
				
				
				 if(key_fromDate_holiday==testString ){
					 start_date_count_holiday=s;
					 
		           }
				 
				 
				 if(key_toDate_holiday==testString ){
					 end_date_count_holiday=s;
		        	
		           }

				 s++;
			 })
			 
			 if(start_date_count_holiday!=0 || end_date_count_holiday!=0){
				 
				 	if (start_date_count_holiday!=0 && end_date_count_holiday!=0) {
				 		var start_date_count_holiday_this_week=start_date_count_holiday;
						var end_date_count_holiday_this_week=end_date_count_holiday;
						
						for (; start_date_count_holiday_this_week <= end_date_count_holiday_this_week; start_date_count_holiday_this_week++) {
							if (start_date_count_holiday_this_week ==6 || start_date_count_holiday_this_week ==7) {
								
								
							}else{
								if (status_holiday=="Pending") {
									$('#table tbody td:nth-child('+( start_date_count_holiday_this_week+1)+')').addClass('retrieved_holiday');
								//	alert(start_date_count_holiday_this_week);
									
								}else if(StatusInLoop=='Approved'){
									
									
									$('#table tbody td:nth-child('+( start_date_count_holiday_this_week+1)+')').addClass('approved_holiday');
									
								//	alert(start_date_count_holiday_this_week);
								}
								
								
							}
							
							
							 
							 
						}
				 		
				 	}
				 
					if (start_date_count_holiday!=0 && end_date_count_holiday==0) {
						var start_date_holiday_index=start_date_count_holiday;	
						var start_date_count_holiday_this_week=start_date_count_holiday;
						var end_date_count_holiday_this_week=7;
						
						for (; start_date_count_holiday_this_week <= end_date_count_holiday_this_week; start_date_count_holiday_this_week++) {
							if (start_date_count_holiday_this_week ==6 || start_date_count_holiday_this_week ==7) {
								
								
							}else{
								
								if (status_holiday=="Pending") {
									$('#table tbody td:nth-child('+( start_date_count_holiday_this_week+1)+')').addClass('retrieved_holiday');
									
									
								}else if(StatusInLoop=='Approved'){
									
									
									$('#table tbody td:nth-child('+( start_date_count_holiday_this_week+1)+')').addClass('approved_holiday');
									
									
								}
								
							}
							
							
							 
							 
						}
						
						
					}
					
					if (start_date_count_holiday==0 && end_date_count_holiday!=0) {
						var start_date_holiday_index=start_date_count_holiday;	
						var start_date_count_holiday_this_week=0;
						var end_date_count_holiday_this_week=end_date_count_holiday;
						
						for (; start_date_count_holiday_this_week <= end_date_count_holiday_this_week; start_date_count_holiday_this_week++) {
							
							if (start_date_count_holiday_this_week ==6 || start_date_count_holiday_this_week ==7) {
								
								
							}else{
								
								if (status_holiday=="Pending") {
									$('#table tbody td:nth-child('+( start_date_count_holiday_this_week+1)+')').addClass('retrieved_holiday');
									
									
								}else if(StatusInLoop=='Approved'){
									
									
									$('#table tbody td:nth-child('+( start_date_count_holiday_this_week+1)+')').addClass('approved_holiday');
									
									
								}
								
							}
							
						}
						
						
					}
				 
					
				 
				 
			 }
			 
			 
			
		// alert(start_date_count_holiday+" "+end_date_count_holiday);
	      
					  
		}); 	 
	 	 
	 
	 

		



//////////////////////////////MULTISELECT CELL////////////////////////////////////////////////	 



		 $.each(multiDateJson, function (key, value) {
			 
			 var keyDateString=key.split("-@");
			 var key_fromDate=keyDateString[0];
			 var key_toDate=keyDateString[1];
			 
			 var s =0;
			 var start_date_count=0;
			 var end_date_count=0;
			 
			
			$("#table").find('.dayMonth').each(function () {
				 
				var testString=temp[s].replace(/\s+/g, '')+yearHeader;
				
				
				 if(key_fromDate==testString ){
					 start_date_count=s;
					 
		           }
				 
				 
				 if(key_toDate==testString ){
					 end_date_count=s;
		        	
		           }

				 s++;
			 })
	      
	       
	   //    alert(start_date_count+" _ "+end_date_count);
		var i=0;	
			if(start_date_count!=0 || end_date_count!=0){
				
				
				if (start_date_count!=0 && end_date_count==0) {
					var start_date_index=start_date_count;	
					var start_date_count_this_week=start_date_count;
					var end_date_count_this_week=7;
					
					
					
					for (; start_date_count_this_week <= end_date_count_this_week; start_date_count_this_week++) {
						i=start_date_count_this_week;
						
						var v=value[0];
						var data = [];
						var project_value;
						
						if (start_date_count_this_week==start_date_index) {
							
							
							for (var k in v){	
					    		
				    		
				    			  var timeSplit=k.split("-");
				        		  var oneTimeSplit=timeSplit[0].split(":");
				        		  var secondTimeSplit=timeSplit[1].split(":");
								  var keyValueEventSplit=v[k].split("-@");
								  var Id=keyValueEventSplit[0];
								  var projectName=keyValueEventSplit[1];
								  var activityName=keyValueEventSplit[2];
								  var ProjectType=keyValueEventSplit[3];
								  
								  var onlyHour_start=(parseInt(oneTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_start_final=null;
				        		  
								  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_end_final=null;
				        		  
				        		  if (start_date_count_this_week==end_date_count_this_week) {
				        			  
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=onlyHour_end+":00";
									
				        		  }else{
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=19+":00";
				        			  
				        		  }
				        		  
				        		//  alert(time_end_final);
				        		  
				        		  $("#table").find('.timeHeader').each(function () {
				        			  
				        			  var time  = this.parentNode.cells[0];
				        			  
				        				if (time_start_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
												data.push(row_header_index);
												
												project_value =projectName;
												
				        				}
				        				
										if (time_end_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
										//		alert("Final: "+row_header_index);
												data.push(row_header_index);
												
				        				}
				        			  
				        			}); 
				    		   
								  
							
				    			
				    		}//end of for loop
							
							
							var counter=0;
				    		while (data[0] <= data[1]) {
				    			if (counter==0) {
				    				
				    			
				    				
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
								}else{
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
								}
				    			counter++;
				    		   	data[0]++;
				    		}
							
							
						}else if(start_date_count_this_week==end_date_count_this_week){
							
							
							for (var k in v){	
								    		
							    			
							    			  var timeSplit=k.split("-");
							        		  var oneTimeSplit=timeSplit[0].split(":");
							        		  var secondTimeSplit=timeSplit[1].split(":");
											  var keyValueEventSplit=v[k].split("-@");
											  var Id=keyValueEventSplit[0];
											  var projectName=keyValueEventSplit[1];
											  var activityName=keyValueEventSplit[2];
											  var ProjectType=keyValueEventSplit[3];
											  
											  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_start_final=onlyHour_start+":00";
							        		  
											  var onlyHour_end=(parseInt("19")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_end_final=onlyHour_end+":00";
							        		  
							        		//  alert(time_end_final);
							        		  
							        		  $("#table").find('.timeHeader').each(function () {
							        			  
							        			  var time  = this.parentNode.cells[0];
							        			  
							        				if (time_start_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
															data.push(row_header_index);
															
															project_value =projectName;
															
							        				}
							        				
													if (time_end_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
													//		alert("Final: "+row_header_index);
															data.push(row_header_index);
															
							        				}
							        			  
							        			}); 
							    		   
											  
										
							    			
							    		}//end of for loop

										var counter=0;
										while (data[0] <= data[1]) {
											if (counter==0) {
												
											
												
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
											}else{
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
											}
											counter++;
										   	data[0]++;
										}
							
						}else{
							
							
						for (var k in v){	
							    		
						    			
						    			  var timeSplit=k.split("-");
						        		  var oneTimeSplit=timeSplit[0].split(":");
						        		  var secondTimeSplit=timeSplit[1].split(":");
										  var keyValueEventSplit=v[k].split("-@");
										  var Id=keyValueEventSplit[0];
										  var projectName=keyValueEventSplit[1];
										  var activityName=keyValueEventSplit[2];
										  var ProjectType=keyValueEventSplit[3];
										  
										  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_start_final=onlyHour_start+":00";
						        		  
										  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_end_final=19+":00";
						        		  
						        		//  alert(time_end_final);
						        		  
						        		  $("#table").find('.timeHeader').each(function () {
						        			  
						        			  var time  = this.parentNode.cells[0];
						        			  
						        				if (time_start_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
														data.push(row_header_index);
														
														project_value =projectName;
														
						        				}
						        				
												if (time_end_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
												//		alert("Final: "+row_header_index);
														data.push(row_header_index);
														
						        				}
						        			  
						        			}); 
						    		   
										  
									
						    			
						    		}//end of for loop

									var counter=0;
									while (data[0] <= data[1]) {
										if (counter==0) {
											
										
											
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
										}else{
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
										}
										counter++;
									   	data[0]++;
									}
							
						}
						
				    	 
				    		
				    	 	
				    		
				    		
				    		  
				  			} ;
					
					
				//end of this week	
				}else if(start_date_count==0 && end_date_count!=0){
					var start_date_index=1;	
					var start_date_count_next_week=1;
					var end_date_count_next_week=end_date_count;
					
					
					
					for (; start_date_count_next_week <= end_date_count_next_week; start_date_count_next_week++) {
						i=start_date_count_next_week;
						
						var v=value[0];
						var data = [];
						var project_value;
						
						if (start_date_count_next_week==start_date_index) {
							
							
							for (var k in v){	
					    		
				    		
				    			  var timeSplit=k.split("-");
				        		  var oneTimeSplit=timeSplit[0].split(":");
				        		  var secondTimeSplit=timeSplit[1].split(":");
								  var keyValueEventSplit=v[k].split("-@");
								  var Id=keyValueEventSplit[0];
								  var projectName=keyValueEventSplit[1];
								  var activityName=keyValueEventSplit[2];
								  var ProjectType=keyValueEventSplit[3];
								  
								  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_start_final=null;
				        		  
								  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_end_final=null;
				        		  
				        		  if (start_date_count_next_week==end_date_count_next_week) {
				        			  
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=onlyHour_end+":00";
									
				        		  }else{
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=19+":00";
				        			  
				        		  }
				        		  
				        		//  alert(time_end_final);
				        		  
				        		  $("#table").find('.timeHeader').each(function () {
				        			  
				        			  var time  = this.parentNode.cells[0];
				        			  
				        				if (time_start_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
												data.push(row_header_index);
												
												project_value =projectName;
												
				        				}
				        				
										if (time_end_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
										//		alert("Final: "+row_header_index);
												data.push(row_header_index);
												
				        				}
				        			  
				        			}); 
				    		   
								  
							
				    			
				    		}//end of for loop
							
							
							var counter=0;
				    		while (data[0] <= data[1]) {
				    			if (counter==0) {
				    				
				    			
				    				
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
								}else{
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
								}
				    			counter++;
				    		   	data[0]++;
				    		}
							
							
						}else if(start_date_count_next_week==end_date_count_next_week){
							
							
							for (var k in v){	
								    		
							    			
							    			  var timeSplit=k.split("-");
							        		  var oneTimeSplit=timeSplit[0].split(":");
							        		  var secondTimeSplit=timeSplit[1].split(":");
											  var keyValueEventSplit=v[k].split("-@");
											  var Id=keyValueEventSplit[0];
											  var projectName=keyValueEventSplit[1];
											  var activityName=keyValueEventSplit[2];
											  var ProjectType=keyValueEventSplit[3];
											  
											  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_start_final=onlyHour_start+":00";
							        		  
											  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_end_final=onlyHour_end+":00";
							        		  
							        		//  alert(time_end_final);
							        		  
							        		  $("#table").find('.timeHeader').each(function () {
							        			  
							        			  var time  = this.parentNode.cells[0];
							        			  
							        				if (time_start_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
															data.push(row_header_index);
															
															project_value =projectName;
															
							        				}
							        				
													if (time_end_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
													//		alert("Final: "+row_header_index);
															data.push(row_header_index);
															
							        				}
							        			  
							        			}); 
							    		   
											  
										
							    			
							    		}//end of for loop

										var counter=0;
										while (data[0] <= data[1]) {
											if (counter==0) {
												
											
												
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
											}else{
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
											}
											counter++;
										   	data[0]++;
										}
							
						}else{
							
							
						for (var k in v){	
							    		
						    			
						    			  var timeSplit=k.split("-");
						        		  var oneTimeSplit=timeSplit[0].split(":");
						        		  var secondTimeSplit=timeSplit[1].split(":");
										  var keyValueEventSplit=v[k].split("-@");
										  var Id=keyValueEventSplit[0];
										  var projectName=keyValueEventSplit[1];
										  var activityName=keyValueEventSplit[2];
										  var ProjectType=keyValueEventSplit[3];
										  
										  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_start_final=onlyHour_start+":00";
						        		  
										  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_end_final=19+":00";
						        		  
						        		//  alert(time_end_final);
						        		  
						        		  $("#table").find('.timeHeader').each(function () {
						        			  
						        			  var time  = this.parentNode.cells[0];
						        			  
						        				if (time_start_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
														data.push(row_header_index);
														
														project_value =projectName;
														
						        				}
						        				
												if (time_end_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
												//		alert("Final: "+row_header_index);
														data.push(row_header_index);
														
						        				}
						        			  
						        			}); 
						    		   
										  
									
						    			
						    		}//end of for loop

									var counter=0;
									while (data[0] <= data[1]) {
										if (counter==0) {
											
										
											
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
										}else{
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
										}
										counter++;
									   	data[0]++;
									}
							
						}
						
				    	 
				    		
				    	 	
				    		
				    		
				    		  
				  			} ;
					
					
					//end of next week
				}else{
					
					var start_date_index=start_date_count;	
					var start_date_count_same_week=start_date_count;
					var end_date_count_same_week=end_date_count;
					
					for (; start_date_count_same_week <= end_date_count_same_week; start_date_count_same_week++) {
						i=start_date_count_same_week;
						
						var v=value[0];
						var data = [];
						var project_value;
						
						if (start_date_count_same_week==start_date_index) {
							
							
							for (var k in v){	
					    		
				    		
				    			  var timeSplit=k.split("-");
				        		  var oneTimeSplit=timeSplit[0].split(":");
				        		  var secondTimeSplit=timeSplit[1].split(":");
								  var keyValueEventSplit=v[k].split("-@");
								  var Id=keyValueEventSplit[0];
								  var projectName=keyValueEventSplit[1];
								  var activityName=keyValueEventSplit[2];
								  var ProjectType=keyValueEventSplit[3];
								  
								  var onlyHour_start=(parseInt(oneTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_start_final=null;
				        		  
								  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_end_final=null;
				        		  
				        		  if (start_date_count_same_week==end_date_count_same_week) {
				        			  
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=onlyHour_end+":00";
									
				        		  }else{
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=19+":00";
				        			  
				        		  }
				        		  
				        		//  alert(time_end_final);
				        		  
				        		  $("#table").find('.timeHeader').each(function () {
				        			  
				        			  var time  = this.parentNode.cells[0];
				        			  
				        				if (time_start_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
												data.push(row_header_index);
												
												project_value =projectName;
												
				        				}
				        				
										if (time_end_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
										//		alert("Final: "+row_header_index);
												data.push(row_header_index);
												
				        				}
				        			  
				        			}); 
				    		   
								  
							
				    			
				    		}//end of for loop
							
							
							var counter=0;
				    		while (data[0] <= data[1]) {
				    			if (counter==0) {
				    				
				    			
				    				
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
								}else{
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
								}
				    			counter++;
				    		   	data[0]++;
				    		}
							
							
						}else if(start_date_count_same_week==end_date_count_same_week){
							
							
							for (var k in v){	
								    		
							    			
							    			  var timeSplit=k.split("-");
							        		  var oneTimeSplit=timeSplit[0].split(":");
							        		  var secondTimeSplit=timeSplit[1].split(":");
											  var keyValueEventSplit=v[k].split("-@");
											  var Id=keyValueEventSplit[0];
											  var projectName=keyValueEventSplit[1];
											  var activityName=keyValueEventSplit[2];
											  var ProjectType=keyValueEventSplit[3];
											  
											  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_start_final=onlyHour_start+":00";
							        		  
											  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_end_final=onlyHour_end+":00";
							        		  
							        		//  alert(time_end_final);
							        		  
							        		  $("#table").find('.timeHeader').each(function () {
							        			  
							        			  var time  = this.parentNode.cells[0];
							        			  
							        				if (time_start_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
															data.push(row_header_index);
															
															project_value =projectName;
															
							        				}
							        				
													if (time_end_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
													//		alert("Final: "+row_header_index);
															data.push(row_header_index);
															
							        				}
							        			  
							        			}); 
							    		   
											  
										
							    			
							    		}//end of for loop

										var counter=0;
										while (data[0] <= data[1]) {
											if (counter==0) {
												
											
												
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
											}else{
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
											}
											counter++;
										   	data[0]++;
										}
							
						}else{
							
							
						for (var k in v){	
							    		
						    			
						    			  var timeSplit=k.split("-");
						        		  var oneTimeSplit=timeSplit[0].split(":");
						        		  var secondTimeSplit=timeSplit[1].split(":");
										  var keyValueEventSplit=v[k].split("-@");
										  var Id=keyValueEventSplit[0];
										  var projectName=keyValueEventSplit[1];
										  var activityName=keyValueEventSplit[2];
										  var ProjectType=keyValueEventSplit[3];
										  
										  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_start_final=onlyHour_start+":00";
						        		  
										  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_end_final=19+":00";
						        		  
						        		//  alert(time_end_final);
						        		  
						        		  $("#table").find('.timeHeader').each(function () {
						        			  
						        			  var time  = this.parentNode.cells[0];
						        			  
						        				if (time_start_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
														data.push(row_header_index);
														
														project_value =projectName;
														
						        				}
						        				
												if (time_end_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
												//		alert("Final: "+row_header_index);
														data.push(row_header_index);
														
						        				}
						        			  
						        			}); 
						    		   
										  
									
						    			
						    		}//end of for loop

									var counter=0;
									while (data[0] <= data[1]) {
										if (counter==0) {
											
										
											
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell").html(project_value);;
										}else{
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green multiselectcell");
										}
										counter++;
									   	data[0]++;
									}
							
						}
						
				    	 
				    		
				    	 	
				    		
				    		
				    		  
				  			} ;
				}//end of Same Week
				
				
				

			
		}   
	  
	       
  
       
       
       
       
    });
		 
		 
		 
		 
//////////////////////////////MULTISELECT TRAVEL CELL////////////////////////////////////////////////	 



		 $.each(multiDateTravelJson, function (key, value) {
			 
			 var keyDateString=key.split("-@");
			 var key_fromDate=keyDateString[0];
			 var key_toDate=keyDateString[1];
			 
			 var s =0;
			 var start_date_count=0;
			 var end_date_count=0;
			 
			
			$("#table").find('.dayMonth').each(function () {
				 
				var testString=temp[s].replace(/\s+/g, '')+yearHeader;
				
				
				 if(key_fromDate==testString ){
					 start_date_count=s;
					 
		           }
				 
				 
				 if(key_toDate==testString ){
					 end_date_count=s;
		        	
		           }

				 s++;
			 })
	      
	       
	   //    alert(start_date_count+" _ "+end_date_count);
		var i=0;	
			if(start_date_count!=0 || end_date_count!=0){
				
				
				if (start_date_count!=0 && end_date_count==0) {
					var start_date_index=start_date_count;	
					var start_date_count_this_week=start_date_count;
					var end_date_count_this_week=7;
					
					
					
					for (; start_date_count_this_week <= end_date_count_this_week; start_date_count_this_week++) {
						i=start_date_count_this_week;
						
						var v=value[0];
						var data = [];
						var project_value;
						
						if (start_date_count_this_week==start_date_index) {
							
							
							for (var k in v){	
					    		
				    		
				    			  var timeSplit=k.split("-");
				        		  var oneTimeSplit=timeSplit[0].split(":");
				        		  var secondTimeSplit=timeSplit[1].split(":");
								  var keyValueEventSplit=v[k].split("-@");
								  var Id=keyValueEventSplit[0];
								  var projectName=keyValueEventSplit[1];
								  var activityName=keyValueEventSplit[2];
								  var ProjectType=keyValueEventSplit[3];
								  
								  var onlyHour_start=(parseInt(oneTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_start_final=null;
				        		  
								  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_end_final=null;
				        		  
				        		  if (start_date_count_this_week==end_date_count_this_week) {
				        			  
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=onlyHour_end+":00";
									
				        		  }else{
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=19+":00";
				        			  
				        		  }
				        		  
				        		//  alert(time_end_final);
				        		  
				        		  $("#table").find('.timeHeader').each(function () {
				        			  
				        			  var time  = this.parentNode.cells[0];
				        			  
				        				if (time_start_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
												data.push(row_header_index);
												
												project_value =projectName;
												
				        				}
				        				
										if (time_end_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
										//		alert("Final: "+row_header_index);
												data.push(row_header_index);
												
				        				}
				        			  
				        			}); 
				    		   
								  
							
				    			
				    		}//end of for loop
							
							
							var counter=0;
				    		while (data[0] <= data[1]) {
				    			if (counter==0) {
				    				
				    			
				    				
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
								}else{
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
								}
				    			counter++;
				    		   	data[0]++;
				    		}
							
							
						}else if(start_date_count_this_week==end_date_count_this_week){
							
							
							for (var k in v){	
								    		
							    			
							    			  var timeSplit=k.split("-");
							        		  var oneTimeSplit=timeSplit[0].split(":");
							        		  var secondTimeSplit=timeSplit[1].split(":");
											  var keyValueEventSplit=v[k].split("-@");
											  var Id=keyValueEventSplit[0];
											  var projectName=keyValueEventSplit[1];
											  var activityName=keyValueEventSplit[2];
											  var ProjectType=keyValueEventSplit[3];
											  
											  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_start_final=onlyHour_start+":00";
							        		  
											  var onlyHour_end=(parseInt("19")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_end_final=onlyHour_end+":00";
							        		  
							        		//  alert(time_end_final);
							        		  
							        		  $("#table").find('.timeHeader').each(function () {
							        			  
							        			  var time  = this.parentNode.cells[0];
							        			  
							        				if (time_start_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
															data.push(row_header_index);
															
															project_value =projectName;
															
							        				}
							        				
													if (time_end_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
													//		alert("Final: "+row_header_index);
															data.push(row_header_index);
															
							        				}
							        			  
							        			}); 
							    		   
											  
										
							    			
							    		}//end of for loop

										var counter=0;
										while (data[0] <= data[1]) {
											if (counter==0) {
												
											
												
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
											}else{
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
											}
											counter++;
										   	data[0]++;
										}
							
						}else{
							
							
						for (var k in v){	
							    		
						    			
						    			  var timeSplit=k.split("-");
						        		  var oneTimeSplit=timeSplit[0].split(":");
						        		  var secondTimeSplit=timeSplit[1].split(":");
										  var keyValueEventSplit=v[k].split("-@");
										  var Id=keyValueEventSplit[0];
										  var projectName=keyValueEventSplit[1];
										  var activityName=keyValueEventSplit[2];
										  var ProjectType=keyValueEventSplit[3];
										  
										  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_start_final=onlyHour_start+":00";
						        		  
										  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_end_final=19+":00";
						        		  
						        		//  alert(time_end_final);
						        		  
						        		  $("#table").find('.timeHeader').each(function () {
						        			  
						        			  var time  = this.parentNode.cells[0];
						        			  
						        				if (time_start_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
														data.push(row_header_index);
														
														project_value =projectName;
														
						        				}
						        				
												if (time_end_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
												//		alert("Final: "+row_header_index);
														data.push(row_header_index);
														
						        				}
						        			  
						        			}); 
						    		   
										  
									
						    			
						    		}//end of for loop

									var counter=0;
									while (data[0] <= data[1]) {
										if (counter==0) {
											
										
											
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
										}else{
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
										}
										counter++;
									   	data[0]++;
									}
							
						}
						
				    	 
				    		
				    	 	
				    		
				    		
				    		  
				  			} ;
					
					
				//end of this week	
				}else if(start_date_count==0 && end_date_count!=0){
					var start_date_index=1;	
					var start_date_count_next_week=1;
					var end_date_count_next_week=end_date_count;
					
					
					
					for (; start_date_count_next_week <= end_date_count_next_week; start_date_count_next_week++) {
						i=start_date_count_next_week;
						
						var v=value[0];
						var data = [];
						var project_value;
						
						if (start_date_count_next_week==start_date_index) {
							
							
							for (var k in v){	
					    		
				    		
				    			  var timeSplit=k.split("-");
				        		  var oneTimeSplit=timeSplit[0].split(":");
				        		  var secondTimeSplit=timeSplit[1].split(":");
								  var keyValueEventSplit=v[k].split("-@");
								  var Id=keyValueEventSplit[0];
								  var projectName=keyValueEventSplit[1];
								  var activityName=keyValueEventSplit[2];
								  var ProjectType=keyValueEventSplit[3];
								  
								  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_start_final=null;
				        		  
								  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_end_final=null;
				        		  
				        		  if (start_date_count_next_week==end_date_count_next_week) {
				        			  
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=onlyHour_end+":00";
									
				        		  }else{
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=19+":00";
				        			  
				        		  }
				        		  
				        		//  alert(time_end_final);
				        		  
				        		  $("#table").find('.timeHeader').each(function () {
				        			  
				        			  var time  = this.parentNode.cells[0];
				        			  
				        				if (time_start_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
												data.push(row_header_index);
												
												project_value =projectName;
												
				        				}
				        				
										if (time_end_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
										//		alert("Final: "+row_header_index);
												data.push(row_header_index);
												
				        				}
				        			  
				        			}); 
				    		   
								  
							
				    			
				    		}//end of for loop
							
							
							var counter=0;
				    		while (data[0] <= data[1]) {
				    			if (counter==0) {
				    				
				    			
				    				
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
								}else{
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
								}
				    			counter++;
				    		   	data[0]++;
				    		}
							
							
						}else if(start_date_count_next_week==end_date_count_next_week){
							
							
							for (var k in v){	
								    		
							    			
							    			  var timeSplit=k.split("-");
							        		  var oneTimeSplit=timeSplit[0].split(":");
							        		  var secondTimeSplit=timeSplit[1].split(":");
											  var keyValueEventSplit=v[k].split("-@");
											  var Id=keyValueEventSplit[0];
											  var projectName=keyValueEventSplit[1];
											  var activityName=keyValueEventSplit[2];
											  var ProjectType=keyValueEventSplit[3];
											  
											  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_start_final=onlyHour_start+":00";
							        		  
											  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_end_final=onlyHour_end+":00";
							        		  
							        		//  alert(time_end_final);
							        		  
							        		  $("#table").find('.timeHeader').each(function () {
							        			  
							        			  var time  = this.parentNode.cells[0];
							        			  
							        				if (time_start_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
															data.push(row_header_index);
															
															project_value =projectName;
															
							        				}
							        				
													if (time_end_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
													//		alert("Final: "+row_header_index);
															data.push(row_header_index);
															
							        				}
							        			  
							        			}); 
							    		   
											  
										
							    			
							    		}//end of for loop

										var counter=0;
										while (data[0] <= data[1]) {
											if (counter==0) {
												
											
												
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
											}else{
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
											}
											counter++;
										   	data[0]++;
										}
							
						}else{
							
							
						for (var k in v){	
							    		
						    			
						    			  var timeSplit=k.split("-");
						        		  var oneTimeSplit=timeSplit[0].split(":");
						        		  var secondTimeSplit=timeSplit[1].split(":");
										  var keyValueEventSplit=v[k].split("-@");
										  var Id=keyValueEventSplit[0];
										  var projectName=keyValueEventSplit[1];
										  var activityName=keyValueEventSplit[2];
										  var ProjectType=keyValueEventSplit[3];
										  
										  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_start_final=onlyHour_start+":00";
						        		  
										  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_end_final=19+":00";
						        		  
						        		//  alert(time_end_final);
						        		  
						        		  $("#table").find('.timeHeader').each(function () {
						        			  
						        			  var time  = this.parentNode.cells[0];
						        			  
						        				if (time_start_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
														data.push(row_header_index);
														
														project_value =projectName;
														
						        				}
						        				
												if (time_end_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
												//		alert("Final: "+row_header_index);
														data.push(row_header_index);
														
						        				}
						        			  
						        			}); 
						    		   
										  
									
						    			
						    		}//end of for loop

									var counter=0;
									while (data[0] <= data[1]) {
										if (counter==0) {
											
										
											
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
										}else{
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
										}
										counter++;
									   	data[0]++;
									}
							
						}
						
				    	 
				    		
				    	 	
				    		
				    		
				    		  
				  			} ;
					
					
					//end of next week
				}else{
					
					var start_date_index=start_date_count;	
					var start_date_count_same_week=start_date_count;
					var end_date_count_same_week=end_date_count;
					
					for (; start_date_count_same_week <= end_date_count_same_week; start_date_count_same_week++) {
						i=start_date_count_same_week;
						
						var v=value[0];
						var data = [];
						var project_value;
						
						if (start_date_count_same_week==start_date_index) {
							
							
							for (var k in v){	
					    		
				    		
				    			  var timeSplit=k.split("-");
				        		  var oneTimeSplit=timeSplit[0].split(":");
				        		  var secondTimeSplit=timeSplit[1].split(":");
								  var keyValueEventSplit=v[k].split("-@");
								  var Id=keyValueEventSplit[0];
								  var projectName=keyValueEventSplit[1];
								  var activityName=keyValueEventSplit[2];
								  var ProjectType=keyValueEventSplit[3];
								  
								  var onlyHour_start=(parseInt(oneTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_start_final=null;
				        		  
								  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
				        		  
				        		  var time_end_final=null;
				        		  
				        		  if (start_date_count_same_week==end_date_count_same_week) {
				        			  
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=onlyHour_end+":00";
									
				        		  }else{
				        			  time_start_final  = onlyHour_start+":00";
				        			  time_end_final	=19+":00";
				        			  
				        		  }
				        		  
				        		//  alert(time_end_final);
				        		  
				        		  $("#table").find('.timeHeader').each(function () {
				        			  
				        			  var time  = this.parentNode.cells[0];
				        			  
				        				if (time_start_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
												data.push(row_header_index);
												
												project_value =projectName;
												
				        				}
				        				
										if (time_end_final==$(time).text()) {
				        					
				        					
												row_header_index = $(this).closest('tr').index();
										//		alert("Final: "+row_header_index);
												data.push(row_header_index);
												
				        				}
				        			  
				        			}); 
				    		   
								  
							
				    			
				    		}//end of for loop
							
							
							var counter=0;
				    		while (data[0] <= data[1]) {
				    			if (counter==0) {
				    				
				    			
				    				
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
								}else{
				    				$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
								}
				    			counter++;
				    		   	data[0]++;
				    		}
							
							
						}else if(start_date_count_same_week==end_date_count_same_week){
							
							
							for (var k in v){	
								    		
							    			
							    			  var timeSplit=k.split("-");
							        		  var oneTimeSplit=timeSplit[0].split(":");
							        		  var secondTimeSplit=timeSplit[1].split(":");
											  var keyValueEventSplit=v[k].split("-@");
											  var Id=keyValueEventSplit[0];
											  var projectName=keyValueEventSplit[1];
											  var activityName=keyValueEventSplit[2];
											  var ProjectType=keyValueEventSplit[3];
											  
											  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_start_final=onlyHour_start+":00";
							        		  
											  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
							        		  
							        		  var time_end_final=onlyHour_end+":00";
							        		  
							        		//  alert(time_end_final);
							        		  
							        		  $("#table").find('.timeHeader').each(function () {
							        			  
							        			  var time  = this.parentNode.cells[0];
							        			  
							        				if (time_start_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
															data.push(row_header_index);
															
															project_value =projectName;
															
							        				}
							        				
													if (time_end_final==$(time).text()) {
							        					
							        					
															row_header_index = $(this).closest('tr').index();
													//		alert("Final: "+row_header_index);
															data.push(row_header_index);
															
							        				}
							        			  
							        			}); 
							    		   
											  
										
							    			
							    		}//end of for loop

										var counter=0;
										while (data[0] <= data[1]) {
											if (counter==0) {
												
											
												
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
											}else{
												$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
											}
											counter++;
										   	data[0]++;
										}
							
						}else{
							
							
						for (var k in v){	
							    		
						    			
						    			  var timeSplit=k.split("-");
						        		  var oneTimeSplit=timeSplit[0].split(":");
						        		  var secondTimeSplit=timeSplit[1].split(":");
										  var keyValueEventSplit=v[k].split("-@");
										  var Id=keyValueEventSplit[0];
										  var projectName=keyValueEventSplit[1];
										  var activityName=keyValueEventSplit[2];
										  var ProjectType=keyValueEventSplit[3];
										  
										  var onlyHour_start=(parseInt("7")).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_start_final=onlyHour_start+":00";
						        		  
										  var onlyHour_end=(parseInt(secondTimeSplit[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
						        		  
						        		  var time_end_final=19+":00";
						        		  
						        		//  alert(time_end_final);
						        		  
						        		  $("#table").find('.timeHeader').each(function () {
						        			  
						        			  var time  = this.parentNode.cells[0];
						        			  
						        				if (time_start_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
														data.push(row_header_index);
														
														project_value =projectName;
														
						        				}
						        				
												if (time_end_final==$(time).text()) {
						        					
						        					
														row_header_index = $(this).closest('tr').index();
												//		alert("Final: "+row_header_index);
														data.push(row_header_index);
														
						        				}
						        			  
						        			}); 
						    		   
										  
									
						    			
						    		}//end of for loop

									var counter=0;
									while (data[0] <= data[1]) {
										if (counter==0) {
											
										
											
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell").html(project_value);;
										}else{
											$('#table tbody tr:eq('+ data[0]+') td:eq('+(i-1)+')').attr("class","evnt-green-travel multiselectcell");
										}
										counter++;
									   	data[0]++;
									}
							
						}
						
				    	 
				    		
				    	 	
				    		
				    		
				    		  
				  			} ;
				}//end of Same Week
				
				
				

			
		}   
	  
	       
  
       
       
       
       
    });
	 

}