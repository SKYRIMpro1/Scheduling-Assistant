moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var timeCurrent = moment();
timeCurrent = timeCurrent.startOf("hour");
var timeBefore = moment().startOf('day').add(9, "hours");

// 9 AM 
var hour1 = timeBefore.add(0, "h");
hour1 = hour1.format('hh:mm A');
$(".block1").text(hour1);

// 10 AM
var hour2 = timeBefore.add(1, "h");
hour2 = hour2.format('hh:mm A');
$(".block2").text(hour2);

// 11 AM
var hour3 = timeBefore.add(1, "h");
hour3 = hour3.format('hh:mm A');
$(".block3").text(hour3);

// 12 PM
var hour4 = timeBefore.add(1, "h");
hour4 = hour4.format('hh:mm A');
$(".block4").text(hour4);

// 1 PM
var hour5 = timeBefore.add(1, "h");
hour5 = hour5.format('hh:mm A');
$(".block5").text(hour5);

// 2 PM
var hour6 = timeBefore.add(1, "h");
hour6 = hour6.format('hh:mm A');
$(".block6").text(hour6);

// 3 PM
var hour7 = timeBefore.add(1, "h");
hour7 = hour7.format('hh:mm A');
$(".block7").text(hour7);

// 4 PM
var hour8 = timeBefore.add(1, "h");
hour8 = hour8.format('hh:mm A');
$(".block8").text(hour8);

// 5 PM
var hour9 = timeBefore.add(1, "h");
hour9 = hour9.format('hh:mm A');
$(".block9").text(hour9);

function testTime() {
    //  9AM
    hour1 = moment().startOf('day').add(9, "hours");
    timeCurrent = timeCurrent.startOf("hour");
    if (timeCurrent.isAfter(hour1)) {
        $(".form9").addClass("past");
    }
    else if (timeCurrent.isBefore(hour1)) {
        $(".form9").addClass("future");
    }
    else if (timeCurrent.isSame(hour1)) {
        $(".form9").addClass("present");
    };

    // 10AM
    hour2 = moment().startOf('day').add(10, "hours");
    if (timeCurrent.isAfter(hour2)) {
        $(".form10").addClass("past");
    }
    else if (timeCurrent.isBefore(hour2)) {
        $(".form10").addClass("future");
    }
    else if (timeCurrent.isSame(hour2)) {
        $(".form10").addClass("present");
    };

    // 11AM
    hour3 = moment().startOf('day').add(11, "hours");
    if (timeCurrent.isAfter(hour3)) {
        $(".form11").addClass("past");
    }
    else if (timeCurrent.isBefore(hour3)) {
        $(".form11").addClass("future");
    }
    else if (timeCurrent.isSame(hour3)) {
        $(".form11").addClass("present");
    };

    // 12PM
    hour4 = moment().startOf('day').add(12, "hours");
    if (timeCurrent.isAfter(hour4)) {
        $(".form12").addClass("past");
    }
    else if (timeCurrent.isBefore(hour4)) {
        $(".form12").addClass("future");
    }
    else if (timeCurrent.isSame(hour4)) {
        $(".form12").addClass("present");
    };

    // 1PM
    hour5 = moment().startOf('day').add(13, "hours");
    if (timeCurrent.isAfter(hour5)) {
        $(".form1").addClass("past");
    }
    else if (timeCurrent.isBefore(hour5)) {
        $(".form1").addClass("future");
    }
    else if (timeCurrent.isSame(hour5)) {
        $(".form1").addClass("present");
    };

    // 2PM
    hour6 = moment().startOf('day').add(14, "hours");
    if (timeCurrent.isAfter(hour6)) {
        $(".form2").addClass("past");
    }
    else if (timeCurrent.isBefore(hour6)) {
        $(".form2").addClass("future");
    }
    else if (timeCurrent.isSame(hour6)) {
        $(".form2").addClass("present");
    };

    // 3M
    hour7 = moment().startOf('day').add(15, "hours");
    if (timeCurrent.isAfter(hour7)) {
        $(".form3").addClass("past");
    }
    else if (timeCurrent.isBefore(hour7)) {
        $(".form3").addClass("future");
    }
    else if (timeCurrent.isSame(hour7)) {
        $(".form3").addClass("present");
    };

    // 4pm
    hour8 = moment().startOf('day').add(16, "hours");
    if (timeCurrent.isAfter(hour8)) {
        $(".form4").addClass("past");
    }
    else if (timeCurrent.isBefore(hour8)) {
        $(".form4").addClass("future");
    }
    else if (timeCurrent.isSame(hour8)) {
        $(".form4").addClass("present");
    };

    // 5pm
    hour9 = moment().startOf('day').add(17, "hours");
    if (timeCurrent.isAfter(hour9)) {
        $(".form5").addClass("past");
    }
    else if (timeCurrent.isBefore(hour9)) {
        $(".form5").addClass("future");
    }
    else if (timeCurrent.isSame(hour9)) {
        $(".form5").addClass("present");
    };
}

// Loop to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}
// Saving to local storage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});