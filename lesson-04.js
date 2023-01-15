"use stric"
//Task1
function alert(array) {
	console.log(array);
	console.log('----------------------------------------');
}
function compareToUp (a,b){
    return a-b;
}

function compareToDown (a,b){
    return b-a;
}

function filterPositive (a){
    return a>0;
}

function filterNegative (a){
    return a<0;
}
let arr = [1,5,8,2,55,-3,7,-10,34,24,7,32,-89,3,98]
alert(arr);

arr.sort(compareToUp);
alert(arr);

arr.sort(compareToDown);
alert(arr);

//Task2
var filteredArrayPositive =  arr.filter(filterPositive);
var filteredArrayNegative =  arr.filter(filterNegative);
alert(filteredArrayPositive);
alert(filteredArrayNegative);

//Task3
function customFunctionForLoop(item, i, array) {
	facultyName.push(item.facultyName);
}

function sumYearOfStuding(sumOfYear, currentObj) {
	return sumOfYear + currentObj.yearOfStuding;
}

var Student = [];
var facultyName =[];
var yearOfStudingSum;

var student1 = {yearOfStuding: 2012, facultyName: "FIT"};
var student2 = {yearOfStuding: 2002, facultyName: "BF"};
var student3 = {yearOfStuding: 2014, facultyName: "FIT"};
var student4 = {yearOfStuding: 2007, facultyName: "BF"};
var student5 = {yearOfStuding: 2009, facultyName: "ETF"};
var student6 = {yearOfStuding: 2012, facultyName: "EF"};
var student7 = {yearOfStuding: 2013, facultyName: "FT"};
var student8 = {yearOfStuding: 2018, facultyName: "GF"};
var student9 = {yearOfStuding: 2005, facultyName: "AT"};
var student10 = {yearOfStuding: 2002, facultyName: "FIT"};

Student.push(student1,student2,student3,student4,student5,student6,student7,student8,student9,student10);
alert(Student);

Student.forEach(customFunctionForLoop);
alert(facultyName);

yearOfStudingSum = Student.reduce(sumYearOfStuding, 0);
alert(yearOfStudingSum);

