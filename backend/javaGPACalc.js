var total_points, GPA, classes, class_type, grade;
for (var i = 0; i < classes; i++) {
    if (class_type == "AP") {
        const APG = new Map([
            ["A", 5.0],
            ["B", 4.0],
            ["C", 3.0],
            ["D", 2.0],
            ["F", 1.0]
        ])
        total_points += APG.get(grade);
    }
    if (class_type == "Honors") {
        const HG = new Map([
            ["A", 4.5],
            ["B", 3.5],
            ["C", 2.5],
            ["D", 1.5],
            ["F", 0.5]
        ])
        total_points += HG.get(grade);
    }
    if (class_type == "Normal") {
        const NG = new Map([
            ["A", 4.0],
            ["B", 3.0],
            ["C", 2.0],
            ["D", 1.0],
            ["F", 0.0]
        ])
        total_points += NG.get(grade);
    }
}
GPA = total_points/classes;
print(GPA);