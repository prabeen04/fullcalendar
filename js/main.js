$(document).ready(function () {
  var events = [];
  var selectedEvent = null;
  FetchEventAndRenderCalendar();
  function FetchEventAndRenderCalendar() {
    events = [];
    $.ajax({
      type: 'GET',
      url: 'http://localhost/full/server/select.php',
      success: function (data) {
        console.log(data);
        $.each(JSON.parse(data), function (i, v) {
          events.push({
            eventId: v.eventId,
            title: v.title,
            description: v.description,
            start: moment(v.Start),
            end: v.end != null ? moment(v.end) : null,
            color: v.color,
          });
        });
        GenerateCalender(events);
      }
    });
    // $.getJSON("./js/events.json",
    //   function (data) {
    //     console.log(data);
    //     $.each(data, function (i, v) {
    //       events.push({
    //         eventId: v.eventId,
    //         title: v.eubject,
    //         description: v.description,
    //         start: moment(v.start),
    //         end: v.end != null ? moment(v.end) : null,
    //         color: v.color,
    //         // allDay: v.IsFullDay
    //       });
    //     })
    //     console.log(events);
    //     GenerateCalender(events);
    //   });
  }

  function GenerateCalender(events) {
    $('#calender').fullCalendar('destroy');
    $('#calendar').fullCalendar({
      // height: 550,
      timeFormat: 'h(:mm)a',
      header: {
        left: 'today, prev, next',
        center: 'title',
        right: 'month, agendaWeek, agendaDay, agenda'
      },
      defaultView: 'month',
      eventLimit: true,
      eventColor: '#378006',
      events: events,
      // eventClick: function (calEvent, jsEvent, view) {
      //  // selectedEvent = calEvent;
      //  console.log(calEvent, jsEvent, view)

      // },
      selectable: true,
      unselectAuto: false,
      unselectCancel: ".form-horizontal",
      select: function (start, end) {
        $('#project-start-time').val(start);
        $('#project-end-time').val(end);
        $('#details').val(start);
        $('#from_date_project').val(start.format('DD/MM/YYYY'));
        $('#to_date_project').val(end.format('DD/MM/YYYY'));
        $('#outbound_from_travel').val(start.format('DD/MM/YYYY'));
        $('#outbound_to_travel').val(end.format('HH:mm A'));

        // openAddEditForm();
        //$('#calendar').fullCalendar('unselect');
      }
      // editable: true,
      // eventDrop: function (event) {
      //   alert('event dragged');
      //   // var data = {
      //   //   EventID: event.eventID,
      //   //   Subject: event.title,
      //   //   Start: event.start.format('DD/MM/YYYY HH:mm A'),
      //   //   End: event.end != null ? event.end.format('DD/MM/YYYY HH:mm A') : null,
      //   //   Description: event.description,
      //   //   ThemeColor: event.color,
      //   //   IsFullDay: event.allDay
      //   // };
      //   // SaveEvent(data);
      // }
    });
  }
});
