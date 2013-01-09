AUI().use('aui-scheduler', function(A) {
  var events = [
    {
      content: "AllDay",
      endDate: new Date(2012, 11, 11, 23, 59),
      startDate: new Date(2012, 11, 11, 0)
    },
    {
      content: "Colorful",
      endDate: new Date(2012, 11, 12, 6),
      startDate: new Date(2012, 11, 12, 2),
      color: '#8d8'
    },
    {
      content: "MultipleDays",
      endDate: new Date(2012, 11, 14),
      startDate: new Date(2012, 11, 10)
    },
    {
      content: "Disabled",
      endDate: new Date(2012, 11, 14, 5),
      startDate: new Date(2012, 11, 14, 1),
      disabled: true
    },
    {
      content: "Meeting",
      endDate: new Date(2012, 11, 13, 7),
      startDate: new Date(2012, 11, 13, 3),
      meeting: true
    },
    {
      content: "Overlap",
      endDate: new Date(2012, 11, 11, 4),
      startDate: new Date(2012, 11, 11, 1),
      color: '#88d'
    },
    {
      content: "Reminder",
      endDate: new Date(2012, 11, 10, 4),
      startDate: new Date(2012, 11, 10, 0),
      reminder: true
    }
  ];

  var eventRecorder = new A.SchedulerEventRecorder();
  var agendaView = new A.SchedulerAgendaView();
  var dayView = new A.SchedulerDayView();
  var weekView = new A.SchedulerWeekView();
  var monthView = new A.SchedulerMonthView();

  var scheduler = new A.Scheduler({
    boundingBox: '#myScheduler',
    date: new Date(2012, 11, 11),
    eventRecorder: eventRecorder,
    items: events,
    render: true,
    activeView: weekView,
    views: [dayView, weekView, monthView, agendaView]
  });
});