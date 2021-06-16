// Storing data:
myObj = [
    {id: 'd1', year: 2013, label: 'Allstate',link: "./resume_finance_1.html", title: 'Financial Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Hired as Financial Analyst on Planning & Forcasting Team'},
    {id: 'd1', year: 2014, label: 'Allstate',link: "./resume_finance_1.html", title: 'Staff Financial Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Promoted to Staff Financial Analyst on Planning & Forcasting Team'},
    {id: 'd1', year: 2015, label: 'CNA Insurance',link: "./resume_finance_1.html", title: 'Senior Financial Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Took new role with promotion (Senior Financial Analyst) to Long-Term Care'},
    {id: 'd1', year: 2016, label: 'CNA Insurance',link: "./resume_ds_1.html", title: 'Data Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Lateral move to Data Analyst in Data Science career track in Long-Term Care'},
    {id: 'd1', year: 2018, label: 'CNA Insurance',link: "./resume_ds_1.html", title: 'Senior Data Analyst', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Promoted to Senior Data Analyst in Long-Term Care'},
    {id: 'd1', year: 2019, label: 'CNA Insurance',link: "./resume_ds_1.html", title: 'Director, Data & Analytics', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Promoted to Director, Data & Analytics in Long-Term Care'},
    {id: 'd1', year: 2020, label: 'CNA Insurance',link: "./resume_ds_1.html", title: 'Director, Data & Analytics', track:'Career', axisrank: 4, viz: 'Resume', size: 1, desc: 'Lateral move (Director, Data & Analytics) to new business unit in Strategic Investments'},
    {id: 'd1', year: 2017, label: 'Certification',link: "./resume_cert_1.html", title: 'Alteryx Core Designer', track: 'Certs, Conferences, Awards', axisrank: 2, viz: 'Resume', size: 1, desc: 'Alteryx Core Designer Certfication'},
    {id: 'd1', year: 2020, label: 'Certification',link: "./resume_cert_1.html", title: 'AWS Cloud Practitioner', track: 'Certs, Conferences, Awards', axisrank: 2, viz: 'Resume', size: 1, desc: 'AWS Cloud Practioner Certification'},
    {id: 'd1', year: 2018, label: 'Conference Speaker',link: "./resume_conf_1.html", title: 'Advancing Analytics', track: 'Certs, Conferences, Awards', axisrank: 2, viz: 'Resume', size: 1, desc: 'Speaker at ILTCI; session was called "Advancing Analytics"'},
    {id: 'd1', year: 2013, label: 'Loyola University Chicago',link: "./resume_edu_1.html", title: 'B.B.A Economics, Minor Finance', track: 'Education', axisrank: 3, viz: 'Resume', size: 1, desc: 'B.B.A. Economics, Minor Finance'},
    {id: 'd1', year: 2019, label: 'Northwestern University',link: "./resume_edu_1.html", title: 'M.S. Data Science, Specialization Artificial Intelligence', track: 'Education', axisrank: 3, viz: 'Resume', size: 1, desc: 'M.S. Data Science, Specialization in Artificial Intelligence'},
    {id: 'd1', year: 2021, label: 'Georgia Tech',link: "./resume_edu_1.html", title: 'M.S. Computer Science, Machine Learning', track: 'Education', axisrank: 3, viz: 'Resume', size: 1, desc: 'Started M.S. Computer Science, Machine Learning'},
    {id: 'd1', year: 2014, label: 'Adopted a Pet',link: "./resume_zaphod_1.html", title: 'Zaphod', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Kitten named Zaphod'},
    {id: 'd1', year: 2016, label: 'Adopted a Pet',link: "./resume_phoenix_1.html", title: 'Phoenix', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Siberian Husky named Phoenix'},
    {id: 'd1', year: 2017, label: 'Personal',link: "./resume_wedding_1.html", title: 'Got Married', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Just Married!'},
    {id: 'd1', year: 2020, label: 'Adopted a Pet',link: "./resume_scarlett_1.html", title: 'Scarlett', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Siberian Husky named Scarlett'},
    {id: 'd1', year: 2019, label: 'Athletics',link: "./resume_sports_1.html", title: 'Ran my first Marathon', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Ran my First Marathon!'},
    {id: 'd1', year: 2021, label: 'Athletics',link: "./resume_sports_1.html", title: 'Hopeful for Triathlon', track:'Personal', axisrank: 1, viz: 'Resume', size: 1, desc: 'Hopeful for first Triathlon'}
    
];

myJSON = JSON.stringify(myObj);

var fs = require("fs");
var fileContent = myJSON;
fs.writeFile("./d3jsbubbles/json_data/career.json", fileContent, (err) => {
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