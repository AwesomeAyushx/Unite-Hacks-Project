#include <bits/stdc++.h>
using namespace std;

int main() {
    double total_points, GPA;
    int class_amount;
    string classtype, grade;
    cin >> class_amount;
    //GPA Calculation
    for (int i = 0; i < class_amount; i++) {
        cin >> classtype;
        cin >> grade;
        if (classtype == "AP") {
            map <string, double> APG;
            APG["A"] = 5.0;
            APG["B"] = 4.0; 
            APG["C"] = 3.0;
            APG["D"] = 2.0;
            APG["F"] = 1.0;
            total_points += APG[grade];
        }
        if (classtype == "Honors") {
           map <string, double> HG;
            HG["A"] = 4.5;
            HG["B"] = 3.5; 
            HG["C"] = 2.5;
            HG["D"] = 1.5;
            HG["F"] = 0.5;
            total_points += HG[grade];
        }
        if (classtype == "Normal") {
            map <string, double> NG;
            NG["A"] = 5.0;
            NG["B"] = 4.0; 
            NG["C"] = 3.0;
            NG["D"] = 2.0;
            NG["F"] = 1.0;
            total_points += NG[grade];
        }  
    }
    GPA = total_points/class_amount;
    cout << GPA;
    return 0;
}