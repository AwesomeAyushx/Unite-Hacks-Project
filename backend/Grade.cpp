#include <bits/stdc++.h>
using namespace std;

int main() {
    int category_amount, worth_in;
    double worth_edited;
    vector <double> worths;
    for (int i = 0; i < category_amount; i++) {
        cin >> worth_in;
        worth_edited = worth_in/100;
        worths.push_back(worth_edited);
    }
}