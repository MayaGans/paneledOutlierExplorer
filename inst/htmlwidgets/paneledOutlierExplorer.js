HTMLWidgets.widget({

  name: 'paneledOutlierExplorer',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {

        x.data = HTMLWidgets.dataframeToD3(x.data);
        paneledOutlierExplorer(el, x.settings).init(x.data);

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
