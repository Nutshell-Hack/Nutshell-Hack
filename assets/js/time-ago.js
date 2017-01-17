---
---

var pageDates = document.getElementsByClassName("showTime");
var pageDate = '';
for (var i = 0; i < pageDates.length; i++) {
    pageDate = pageDates[i].innerHTML;

    var dates = { postDate: pageDate, todayDate: "{{site.time}}", };

    var date1 = new Date(dates.postDate).getTime();
    var date2 = new Date(dates.todayDate).getTime();
    //console.log(dates);
    //console.log(date1); console.log(date2); 
    showDiff(date1, date2, pageDates[i]);
}


function showDiff(date1, date2, element) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var days = Math.round(Math.abs((date1 - date2) / (oneDay)));
    //console.log(days);
    element.innerHTML = days + "  days ago.";
    // setTimeout(showDiff, 1000);
}