
/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/

var YearView = FC.YearView = BasicView.extend({

	// Produces information about what range to display
	computeRange: function(date) {
		var range = BasicView.prototype.computeRange.call(this, date); // get value from super-method

		return range;
	},
	// Generates the DayGrid object this view needs. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		// generate a subclass on the fly with BasicView-specific behavior
		// TODO: cache this subclass
		var subclass = this.dayGridClass.extend(basicDayGridMethods);

		return new subclass(this);
	}
});

basicDayGridMethods.renderNumberIntroHtml = function(row) {
  this.renderNumberIntroHtml();
  var view = this.view;

  var monthName = '<span>' + this.getCellDate(row, 0).format('M') + '</span>';

  if (view.weekNumbersVisible) {
    return '' +
      '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
        '<span>' + // needed for matchCellWidths
          this.getCellDate(row, 0).format('w') +
        '</span>' + monthName +
      '</td>';
  }

  return '';
};
