// Storing data:
myObj = [
    {id: 'd1', year: 2013, label: 'Allstate', title: 'Financial Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Hired as Financial Analyst on Planning & Forcasting Team'},
    {id: 'd1', year: 2014, label: 'Allstate', title: 'Staff Financial Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Promoted to Staff Financial Analyst on Planning & Forcasting Team'},
    {id: 'd1', year: 2015, label: 'CNA Insurance', title: 'Senior Financial Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Took new role with promotion (Senior Financial Analyst) to Long-Term Care'},
    {id: 'd1', year: 2016, label: 'CNA Insurance', title: 'Data Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Lateral move to Data Analyst in Data Science career track in Long-Term Care'},
    {id: 'd1', year: 2018, label: 'CNA Insurance', title: 'Senior Data Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Promoted to Senior Data Analyst in Long-Term Care'},
    {id: 'd1', year: 2019, label: 'CNA Insurance', title: 'Director, Data & Analytics', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Promoted to Director, Data & Analytics in Long-Term Care'},
    {id: 'd1', year: 2020, label: 'CNA Insurance', title: 'Director, Data & Analytics', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Lateral move (Director, Data & Analytics) to new business unit in Strategic Investments'},
    {id: 'd1', year: 2017, label: 'Certification', title: 'Alteryx Core Designer', track: 'Certs, Conferences, Awards', axisrank: 2, viz: 'Resume', size: 1, desc: 'Alteryx Core Designer Certfication'},
    {id: 'd1', year: 2020, label: 'Certification', title: 'AWS Cloud Practitioner', track: 'Certs, Conferences, Awards', axisrank: 2, viz: 'Resume', size: 1, desc: 'AWS Cloud Practioner Certification'},
    {id: 'd1', year: 2021, label: 'Certification', title: 'GCP Associate Engineer', track: 'Certs, Conferences, Awards', axisrank: 2, viz: 'Resume', size: 1, desc: 'SCHEDULED March 2021 | GCP Associate Engineer'},
    {id: 'd1', year: 2018, label: 'Conference Speaker', title: 'Advancing Analytics', track: 'Certs, Conferences, Awards', axisrank: 2, viz: 'Resume', size: 1, desc: 'Speaker at ILTCI; session was called "Advancing Analytics"'},
    {id: 'd1', year: 2013, label: 'Loyola University Chicago', title: 'B.B.A Economics, Minor Finance', track: 'Education', axisrank: 3, viz: 'Resume', size: 1, desc: 'B.B.A. Economics, Minor Finance'},
    {id: 'd1', year: 2019, label: 'Northwestern University', title: 'M.S. Data Science, Specialization Artificial Intelligence', track: 'Education', axisrank: 3, viz: 'Resume', size: 1, desc: 'M.S. Data Science, Specialization in Artificial Intelligence'},
    {id: 'd1', year: 2014, label: 'Adopted a Pet', title: 'Zaphod', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Kitten named Zaphod'},
    {id: 'd1', year: 2016, label: 'Adopted a Pet', title: 'Phoenix', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Siberian Husky named Phoenix'},
    {id: 'd1', year: 2017, label: 'Personal', title: 'Got Married', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Just Married!'},
    {id: 'd1', year: 2020, label: 'Adopted a Pet', title: 'Scarlett', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Siberian Husky named Scarlett'},
    {id: 'd1', year: 2019, label: 'Athletics', title: 'Ran my first Marathon', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Ran my First Marathon!'},
    {id: 'd1', year: 2021, label: 'Athletics', title: 'Hopeful for Triathlon', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Hopeful for first Triathlon'}
    
];

myJSON = JSON.stringify(myObj);

var fs = require("fs");
var fileContent = myJSON;
fs.writeFile("./career.json", fileContent, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});


// Retrieving data:
///text = localStorage.getItem("testJSON");
///obj = JSON.parse(text);
///document.getElementById("demo").innerHTML = obj.name;