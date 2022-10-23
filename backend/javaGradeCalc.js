var complete_total = 0, average_total = 0, total = 0;
const categoryworth = [0.3, 0.4, 0.3];
for (var i = 0; i < categoryworth.length; i++) {
    var average = 0;
    const assignments = [0.8, 0.9, 0.7, 0.8];
    for (var j = 0; j < assignments.length; j++) {
        total += assignments[j];
    }
    average = (total/assignments.length) * categoryworth[i];
    complete_total += average;
}
average_total = (complete_total)*50;
if (average_total >= 90) {
    console.log("A")
}
else if (average_total >= 80 && average_total < 90) {
    console.log("B")
}
else if (average_total >= 70 && average_total < 80) {
    console.log("C")
}
else if (average_total >= 60 && average_total < 70) {
    console.log("D")
}
else {
    console.log("F")
}