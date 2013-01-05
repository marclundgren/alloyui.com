// Create an AUI instance and load the 'aui-datatable' module
AUI().use('aui-datatable', function(A) {

  // create some columns and rows
  var data = {
    columns: ["name", "address", "city", "state"],
    rows: [
      {name:"John A. Redcorn", address:"1236 Mayflower Ave", city:"Plymouth", state:"MA"},
      {name:"Meg B. Griffen", address:"31 Spooner St", city:"Quohag", state:"RI"},
      {name:"Bob C. DiNiro", address:"9996 Taxi Dr", city:"Hollywood", state:"CA"},
      {name:"William D. Smith", address:"1623 Carlton Rd", city:"Philadelphia", state:"IL"},
      {name:"Jimmy E. World", address:"9899 Middle Pl", city:"Los Angeles", state:"CA"}
    ]
  };

  var dataTableContainer = A.one('#datatabledemo');

  var removeLoadingClass = function () {
    dataTableContainer.setContent('');
    dataTableContainer.removeClass('loading');
  };

  // render a new DataTable Component as a child element of datatabledemo
  var table = new A.DataTable.Base({
    columnset: data.columns,
    recordset: data.rows,
    on: {
      render: removeLoadingClass
    }
  }).render(dataTableContainer);

});