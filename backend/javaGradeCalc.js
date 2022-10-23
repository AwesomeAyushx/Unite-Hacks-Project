function gradeCalc(list1, list2){
    var complete_total = 0, average_total = 0, total = 0;
    const categoryworth = list1;
    for (var i = 0; i < categoryworth.length; i++) {
        var average = 0;
        const assignments = list2   ;
        for (var j = 0; j < assignments.length; j++) {
            total += assignments[j];
        }
        average = (total/assignments.length) * categoryworth[i];
        complete_total += average;
    }
    average_total = (complete_total)*50;
    if (average_total >= 90) {
        return ("A")
    }
    else if (average_total >= 80 && average_total < 90) {
        return ("B")
    }
    else if (average_total >= 70 && average_total < 80) {
        return ("C")
    }
    else if (average_total >= 60 && average_total < 70) {
        return ("D")
    }
    else {
        return ("F")
    }
}
