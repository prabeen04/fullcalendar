<div class="panel panel-primary">
	<div class="panel-heading">
		<h3 class="panel-title">Add Events</h3>
	</div>
	<div class="panel-body">
		<div class="form-group">
			<div class="col-sm-12">
				<div class="radio">
					<label class="col-sm-4"><input type="radio" name="category"
							id="optionsRadios1" value="Project">Project</label>&nbsp;&nbsp;

					<label class="col-sm-4"><input type="radio" name="category"
							id="optionsRadios1" value="Travel">Travel</label>&nbsp;&nbsp;

					<label class="col-sm-3"><input type="radio" name="category"
							id="optionsRadios1" value="Holiday"
							>Holiday</label>&nbsp;&nbsp;

					<label class="col-sm-3"><input type="radio" name="category"
							id="optionsRadios1" value="clientRelationship">Account
						</label>
				</div>
			</div>
		</div>

		<span id="project_span">			
			<form role="form" class="form-horizontal  form-group-sm" id="timesheet_form">			
				<div class="form-group" id="project_type">
					<label class="col-sm-3 control-label">Type </label>
					<div class="col-sm-9">
						<div class="radio">
							<label><input type="radio" name="project_type"
								id="external_id" value="External">External </label>&nbsp;&nbsp;&nbsp;&nbsp;
							<label><input type="radio" name="project_type"
								id="internal_id" value="Internal">Internal</label>
						</div>
					</div>
				</div>
				<div class="form-group" id="project_div">
					<label class="col-sm-3 control-label">Project</label>
					<div class="col-sm-9">
						<select class="form-control line" id="projectList" name="project"
							required>
							<option>Select</option>
						</select>
					</div>
				</div>
				<div class="form-group" id="activity_div">
					<label class="col-sm-3 control-label" style="margin-left:-2px">Activity</label>
					<div class="col-sm-9">
						<select class="form-control line" id="activityList"
							name="activity" >
							<option>Select</option>
						</select>
					</div>					
				</div>
				<div class="form-group">
					<div class="col-sm-6">
						<div class="input-group date form_date" data-date=""
							data-date-format="dd MM yyyy" data-link-field="dtp_input2"
							data-link-format="yyyy-mm-dd">
							<input type="text" class="form-control" value="" 
								placeholder="From" date-format="DD-MM-YYYY HH:mm:ss" name="from_date" id="from_date_project" required>
							<span class="input-group-addon"> 
								class="glyphicon glyphicon-calendar"></span>

		<input type="hidden" name="project-start-time" id="project-start-time">
		<input type="hidden" name="project-end-time" id="project-end-time">
		<input type="hidden" name="project-timezone" id="project-timezone">
		</span>
		</div>
	</div>

	<div class="col-sm-6">
		<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
			<input type="text" class="form-control" value="" placeholder="To" name="to_date" id="to_date_project" required> <span class="input-group-addon"> 
									class="glyphicon glyphicon-calendar"></span>
			</span>
		</div>
	</div>

	</div>

	<div class="form-group">
		<span class="col-sm-2 control-label" style="margin-top:-4px"><img src="images/clock.ico" alt="" class="" id=""></span >
						<div class="col-sm-5">
							<select id="labelTime" class="form-control" name="from_time" >
								<option value="">Select</option>
							</select>
						</div>
						<div class="col-sm-5">
							<select id="labelTime_To" class="form-control"
								name="to_time" >
								<option value="">Select</option>

							</select>
						</div>
					</div>

					<div class="form-group">
						<label class="col-sm-3 control-label">Details</label>
						<div class="col-sm-9">
							<input type="text" name="details"
								placeholder="Enter Details" id="details"
								class="form-control">
						</div>
					</div> <input type="hidden" id="multiSelect_hidden"
					name="multiselect_check" value="" />
					
					
					<div class="form-group">
					<center>
						<button type="submit" class="btn btn-primary" id="fullcalendar-button" >Submit</button>
						<button type="button" class="btn btn-danger"
							onclick="getEventId()">Delete</button>
					</center>
				</div>								
					</form>
				</span>


		<span id="holiday_span">
				
			<form role="form" class="form-horizontal  form-group-sm" id="timesheet_holiday_form">
				
			
					<div class="form-group">
					<div class="col-sm-6">
							<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
								<input type="text" 
								class="form-control" 
								value="" 
								placeholder="From"
								ng-model="leaveform.dob"
								id="fromDate_Holiday"
								name="fromDateHoliday"
								required >
								
								<span class="input-group-addon line">
								<span class="glyphicon glyphicon-calendar"></span>
		</span>
	</div>
	</div>

	<div id="to_date_holiday">
		<div class="col-sm-6">
			<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
				<input type="text" class="form-control" value="" placeholder="To" ng-model="leaveform.dob" id="toDate_Holiday" name="toDateHoliday">

				<span class="input-group-addon">
								<span class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>

	</div>
	</div>



	<input type="hidden" class="form-control" value="" placeholder="" ng-model="leaveform.dob" id="fromDate_Holiday" name="fromDateHoliday"
	required="required">


	<div class="form-group">
		<label class="col-sm-2 control-label">Half Day </label>
		<div class="col-sm-1">
			<input type="checkbox" name="half_Day" class="chk-box col-sm-2" id="half_day_chkbox_holiday">
		</div>

		<div class="col-sm-8 control-label" id="day_divide_holiday">
			<div class="col-xs-12">
				<div class="col-xs-5" name="day_divide">
					<label>Morning</label>
				</div>
				<div class="col-xs-3 paid">
					<label class="swth">
							<input type="checkbox" id="sliderCheckboxHDayHalf">
							<div class="slider round"></div>
							</label>
				</div>
				<div class="col-xs-2" name="day_divide">
					<label>Afternoon</label>
				</div>
			</div>
		</div>


	</div>



	<div class="form-group">
		<label class="col-sm-2 control-label">Cover </label>
		<div class="col-sm-10">
			<input type="text" name="coverHoliday" placeholder="Enter Details" id="cover_holiday" class="form-control">
		</div>
	</div>


	<div class="form-group">
		<label class="col-sm-2 control-label">Details </label>
		<div class="col-sm-10">
			<input type="text" name="detailsHoliday" placeholder="Enter Details" id="details_holiday" class="form-control">
		</div>
	</div>

	<div class="form-group">
		<center>
			<button type="submit" class="btn btn-primary">Submit</button>
			<button type="button" class="btn btn-danger" onclick="getEventId()">Delete</button>
		</center>
	</div>

	<input type="hidden" id="multiSelect_holiday_hidden" name="multiSelect_holiday_hidden" value="" />


	</form>

	</span>
	<span id="travel_span">
				
				<form role="form" class="form-horizontal  form-group-sm" id="timesheet_travel_form">
				<div class="form-group">
						<label class="col-sm-3 control-label" >Others</label>
						<div class="col-sm-2 control-label">
								<div class="paid" style="margin-bottom:-32px">
							<label class="swth">
							<input type="checkbox" id="">
							<div class="slider round"></div>
							</label>
							</div>
					
						</div>
					<!-- </div>
				
					<div class="form-group"> -->
						<label class="col-sm-2 control-label">Project</label>
						<div class="col-sm-5">
							<select class="form-control line" id="projectList_travel" name="project_travel"
								required>
								<option>Select</option>
								<option>Meeting</option>
								<option>Workshop</option>
								<option>Event</option>
								<option>Conference</option>


							</select>
						</div>
					</div>
					
					<div class="form-group">
						<label class="col-sm-3 control-label">Details</label>
						<div class="col-sm-9">
							<input type="text" name="details_travel" placeholder="Enter Details"
								id="details_travel" class="form-control">
						</div>
					</div>


					<div class="form-group">
						<label class="col-sm-3 control-label">Outbound </label>
						<div class="col-sm-4">
							<input type="text" name="" placeholder="From" id="outbound_from_travel"
								class="form-control" required>
						</div>

						<div class="col-sm-5">
							<input type="text" name="" placeholder="To" id="outbound_to_travel"
								class="form-control" required>
						</div>
					</div>
					
					<div class="form-group">
					<label class="col-sm-2 control-label"></label>
						<div class="col-sm-5">
							<div class="input-group date form_date" data-date=""
								data-date-format="dd MM yyyy" data-link-field="dtp_input2"
								data-link-format="yyyy-mm-dd">
								<input type="text" class="form-control" value="" 
									placeholder="From" name="from_date_travel_outbound" id="from_date_outbound_travel" required>
								<span class="input-group-addon"> <span
									class="glyphicon glyphicon-calendar"></span>
	</span>

	</div>
	</div>
	<div class="col-sm-5">

		<select id="labelTime_from_outbound_travel" class="form-control" name="from_time_outbound_travel">
			<option value="">Select</option>
		</select>

	</div>
	</div>

	<div class="form-group">
		<label class="col-sm-2 control-label"></label>
		<div class="col-sm-5">
			<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
				<input type="text" class="form-control" value="" placeholder="To" name="to_date_travel_outbound" id="to_date_outbound_travel"
				required> <span class="input-group-addon"> <span
									class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>
		<div class="col-sm-5">
			<select id="labelTime_to_outbound_travel" class="form-control" name="to_time_outbound_travel">
								<option value="">Select</option>

							</select>
		</div>
	</div>




	<div class="form-group" style="margin-bottom:-20px">
		<label class="col-sm-3 control-label">Mode</label>
		<div class="col-sm-3" style="margin-top:-7px">
			<img src="images/carnew.ico" alt="" class="icon-big report" id="1">
		</div>

		<div class="col-sm-3" style="margin-top:-7px">
			<img src="images/train2new.ico" alt="" class="icon-big report" id="2">
		</div>

		<div class="col-sm-2" style="margin-top:-7px">
			<img src="images/Airplane_Bluenew1.ico" alt="" class="icon-big report" id="3">
		</div>
	</div>


	<div class="form-group">
		<label class="col-sm-3 control-label">Inbound </label>
		<div class="col-sm-4">
			<input type="text" name="" placeholder="From" id="inbound_from_travel" class="form-control">
		</div>

		<div class="col-sm-5">
			<input type="text" name="" placeholder="To" id="inbound_to_travel" class="form-control">
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-2 control-label"></label>
		<div class="col-sm-5">
			<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
				<input type="text" class="form-control" value="" placeholder="From" name="from_date_inbound_travel" id="from_date_inbound_travel">
				<span class="input-group-addon"> <span
									class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>
		<div class="col-sm-5">

			<select id="labelTime_from_inbound_travel" class="form-control" name="from_time_inbound_travel">
								<option value="">Select</option>
							</select>

		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-2 control-label"></label>
		<div class="col-sm-5">
			<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
				<input type="text" class="form-control" value="" placeholder="To" name="to_date_inbound_travel" id="to_date_inbound_travel">			<span class="input-group-addon"> <span
									class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>
		<div class="col-sm-5">
			<select id="labelTime_to_inbound_travel" class="form-control" name="to_time_inbound_travel">
								<option value="">Select</option>

							</select>
		</div>
	</div>


	<div class="form-group" style="margin-bottom:-20px">
		<label class="col-sm-3 control-label">Mode</label>
		<div class="col-sm-3" style="margin-top:-7px">
			<img src="images/carnew.ico" alt="" class="icon-big report" id="1">
		</div>

		<div class="col-sm-3" style="margin-top:-7px">
			<img src="images/train2new.ico" alt="" class="icon-big report" id="2">
		</div>

		<div class="col-sm-2" style="margin-top:-7px">
			<img src="images/Airplane_Bluenew1.ico" alt="" class="icon-big report" id="3">
		</div>
	</div>


	<div class="form-group">
		<label class="col-sm-3 control-label">Lodging</label>
		<div class="col-sm-2">
			<input type="checkbox" name="lodging" class="chk-box col-sm-5" id="lodging_checked">
		</div>
		<label class="col-sm-3 control-label">Location</label>
		<div class="col-sm-4 control-label">
			<input type="text" name="locationdetails" placeholder="Enter Location" id="Location_details" class="form-control">
		</div>
	</div>

	<div class="form-group">
		<div class="col-sm-6 control-label">
			<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
				<input type="text" class="form-control" value="" readonly placeholder="Check in" name="from_checkeddate_travel" id="checkedfrom_travel">
				<span class="input-group-addon"> <span
									class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>

		<div class="col-sm-6 control-label">
			<div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
				<input type="text" class="form-control" value="" readonly placeholder="Check out" name="to_checkeddate_travel" id="checkedto_travel">			<span class="input-group-addon"> <span
									class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>




	</div>



	<div class="form-group">
		<center>
			<button type="submit" class="btn btn-primary">Submit</button>
			<button type="button" class="btn btn-danger" onclick="getEventId()">Delete</button>
		</center>
	</div>
	<input type="hidden" id="multiSelect_hidden_travel" name="multiselect_check_travel" value="" />


	</form>
	</span>

	<span id="clientRelationship_span">  
				<form role="form" class="form-horizontal  form-group-sm" id="">

				<div class="form-group" id="">
					<label class="col-sm-4 control-label" style="margin-right:-13px">Activity</label>
						<div class="col-sm-2"  style="margin-top:-8px">
						<img src="images/call1new.ico" alt="" class="icon-big report" id="4" data-toggle="tooltip" data-placement="bottom" title="Call">

			</div>
			
			<div class="col-sm-2"  style="margin-top:-8px">
			<img src="images/emailnew.ico" alt="" class="icon-big report" id="6"  data-toggle="tooltip" data-placement="bottom" title="Email">
	
			</div>
			
			<div class="col-sm-2"  style="margin-top:-8px">
			<img src="images/conference_icon.ico" alt="" class="icon-big report" id="7"  data-toggle="tooltip" data-placement="bottom" title="Conference">

			</div>
			
			
				</div>
				<div class="form-group" id="">
					<label class="col-sm-4 control-label">Client</label>
					<div class="col-sm-8">
						<select class="form-control" id="" name="">
							<option>Select</option>
							<option>ABN Amro</option>


						</select>
					</div>
				</div>
				
				<div class="form-group" id="">
					<label class="col-sm-4 control-label">Contact</label>
					<div class="col-sm-8">
						<select class="form-control" id="" name="">
							<option>Select</option>
							<option>ABN Amro</option>


						</select>
					</div>
				</div>

				<div class="form-group" id="">
					<label class="col-sm-4 control-label">Opportunity</label>
					<div class="col-sm-8">
						<select class="form-control" id="" name="">
							<option>Select</option>
							<option>Project 1</option>
							<option>Project 2</option>


						</select>
					</div>
				</div>
				
				<div class="form-group">
				<center>
					<button type="submit" class="btn btn-primary">Submit</button>
					<button type="button" class="btn btn-danger"
						onclick="getEventId()">Delete</button>
				</center>
			</div>
				
				</form>
			</span> <input type="hidden" id="delete_Id" name="delete_Id" value="" />




</div>
</div>