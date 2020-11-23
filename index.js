/*const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkDown = require("./util/generateMarkDown")
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkDown(answers);
        console.log(answers);

        writeToFile("README.md", response)

    })
}*/



const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkDown = require("./util/generateMarkDown");


// Questions for README users

const questions = [{
        type: "input",
        question: "What is the Title of your repository?",
        name: "Title",
    },

    {
        type: "input",
        question: "Describe your project in detail",
        name: "Description",
    },

    {
        type: "input",
        question: "Installation process",
        name: "Install",
    },

    {
        type: "input",
        question: "Instruction on how to use app?",
        name: "Usage",
    },

    {
        type: "list",
        question: "which license are you using?",
        name: "License",
        choices: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "No License",
        ]
    },

    {
        type: "input",
        question: "Who contributed?",
        name: "Contributors",
    },

    {
        type: "input",
        question: "How to test the app?",
        name: "Testing",
    },

    {
        type: "input",
        question: "Any questions",
        name: "Questions",
    },

    {
        type: "input",
        question: "What is your github username",
        name: "Github",
    },

    {
        type: "input",
        question: "What is your email address",
        name: "Email",
    },

];

// Functions

/*function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadME Was Created!");

    });*/

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("README.md created!")
        }
    })
}


function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })


}