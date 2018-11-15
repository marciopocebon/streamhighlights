var startOfDay = require("date-fns/start_of_day");
var startOfWeek = require("date-fns/start_of_week");
var startOfMonth = require("date-fns/start_of_month");
var startOfYear = require("date-fns/start_of_year");

var endOfDay = require("date-fns/end_of_day");
var endOfWeek = require("date-fns/end_of_week");
var endOfMonth = require("date-fns/end_of_month");
var endOfYear = require("date-fns/end_of_year");

/**
 * Class providing lower and upper bounds when filtering items over time.
 * Provides day, week, month and year.
 */

var dateFiltering = {
  getLowerBound: function(filter) {
    var currentDate = new Date();
    switch (filter) {
      case "day":
        return startOfDay(currentDate);
      case "week":
        return startOfWeek(currentDate, { weekStartsOn: 1 });
      case "month":
        return startOfMonth(currentDate);
      case "year":
        return startOfYear(currentDate);
      default:
        currentDate;
    }
  },
  getUpperBound: function(filter) {
    var currentDate = new Date();
    switch (filter) {
      case "day":
        return endOfDay(currentDate);
      case "week":
        return endOfWeek(currentDate, { weekStartsOn: 1 });
      case "month":
        return endOfMonth(currentDate);
      case "year":
        return endOfYear(currentDate);
      default:
        currentDate;
    }
  }
};

module.exports = dateFiltering;
