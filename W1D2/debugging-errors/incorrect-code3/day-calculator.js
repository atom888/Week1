var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);
  var febDays = daysInFeb(year);
  var daysInMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    // to remove redundancies in if statement, can write as:
    // return (month >= 1 && month <= 12);
    // statement provides a true or false value that should be returned.
    if (month >= 1 && month <= 12) {
      return true;
    } else {
      console.log("Please provide a valid month");
      return false;
    }
  }

  function validDay(month, day) {
    // to remove redundancies in if statement, can write as:
    // return (day >=1 && day <= daysInMonth[month-1])
    if (day >= 1 && day <= daysInMonth[month -1]) {
      return true;
    } else {
      console.log("Please provide a valid day");
      return  false;
    }
  }

  function calculateDayNumber(month, day) {
    var dayOfYear = day;

    for (var i = 1; i < month; i++) {
      dayOfYear += daysInMonth[i - 1];
    }
    return dayOfYear;
  }

  function daysInFeb(year) {
    if (isLeapYear(year) == true) {
      return 29;
    } else {
      return 28;
    }
  }

  function isLeapYear(year) {
      if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
        return true;
      } else {
        return false;
      }

  }
}

