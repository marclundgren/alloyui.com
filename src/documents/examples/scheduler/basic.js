AUI().use('aui-scheduler', function(A) {
  var events = [
    {
      content: "Event1",
      endDate: new Date(2012, 11, 11, 5),
      startDate: new Date(2012, 11, 11, 1)
    }
  ];

  var weekView = new A.SchedulerWeekView();

  var scheduler = new A.Scheduler({
    boundingBox: '#myScheduler',
    date: new Date(2012, 11, 11),
    items: events,
    render: true,
    views: [weekView]
  });
});