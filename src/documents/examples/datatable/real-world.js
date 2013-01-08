AUI().use('aui-datatable', 'aui-datatype', 'aui-loading-mask', 'aui-io-request', 'datatable-sort', function(A) {

  var dataTableContainer = A.one('#datatabledemo');

  var RealWorldExample = {

    init: function() {

      var createDataTable = this.createDataTable;
      var createNestedColumns = this.createNestedColumns;

      var loadingMask = this.createLoadingMask(dataTableContainer);

      A.io.request(
        'data/content.json',
        {
          on: {
            success: function() {
              var data = this.get('responseData');
              var remoteContent = A.JSON.parse(data);

              createDataTable(remoteContent, createNestedColumns);

              loadingMask.hide();
            },
            failure: function() {
              dataTableContainer.setContent('');

              dataTableContainer.removeClass('loading');

              dataTableContainer.addClass('load-failure');
            }
          }
        }
      );
    },

    createLoadingMask: function(node) {
      var nodeParent = node.ancestor();

      nodeParent.plug(A.LoadingMask);

      return nodeParent.loadingmask.show();
    },

    createNestedColumns: function(data) {
      var validatorConfig = {
        rules: {
          name: {
            required: true
          }
        }
      };

      var nameEditorConfig = {
        validator: validatorConfig
      };

      var fruitEditorConfig = {
        editable: true,
        multiple: true,
        validator: validatorConfig,
        options: {
          apple: 'Apple',
          cherry: 'Cherry',
          banana: 'Banana',
          kiwi: 'Kiwi'
        }
      };

      var nestedColumns = [
        {
          key: 'name',
          editor: new A.TextAreaCellEditor(nameEditorConfig),
          sortable: true
        },
        {
          key: 'address',
          editor: new A.TextAreaCellEditor(),
          sortable: true
        },
        {
          key: 'city',
          editor: new A.TextAreaCellEditor()
        },
        {
          key: 'state',
          editor: new A.DropDownCellEditor({
            editable: true,
            options: data.states
          })
        },
        {
          key: 'amount',
          editor: new A.TextCellEditor({
            inputFormatter: A.DataType.String.evaluate,
            validator: {
              rules: {
                value: {
                  required: true,
                  number: true
                }
              }
            }
          })
        },
        {
          key: 'active',
          editor: new A.RadioCellEditor({
            editable: true,
            options: {
              yes: 'Yes',
              no: 'No',
              maybe: 'Maybe'
            }
          })
        },
        {
          key: 'colors',
          editor: new A.CheckboxCellEditor({
            editable: true,
            multiple: true,
            options: {
              red: 'Red',
              green: 'Green',
              blue: 'Blue'
            }
          })
        },
        {
          key: 'last_login',
          editor: new A.DateCellEditor({
            calendar: {
              width:'250px',
              showPrevMonth: false,
              showNextMonth: false,
              selectionMode: 'multiple',
              dateFormat: '%m/%d/%Y'
            },
            validator: validatorConfig
          })
        },
        {
          key: 'fruit',
          editor: new A.TextAreaCellEditor(fruitEditorConfig)
        }
      ];

      return nestedColumns;
    },

    createDataTable: function(data, createNestedColumns) {

      new A.DataTable({
        columns: createNestedColumns(data),
        data: data.rows,
        editEvent: 'dblclick',
        plugins: [
          {
            fn: A.Plugin.DataTableHighlight,
            cfg: {
              highlightRange: false
            }
          }
        ],
        on: {
          render: function(event) {
            dataTableContainer.setContent('');

            dataTableContainer.removeClass('loading');

            this.get('boundingBox').unselectable();
          }
        }
      }).render(dataTableContainer);
    }
  };

  RealWorldExample.init();

});
