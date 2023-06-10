// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer =require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "Title",
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: "Description",
        message: "Write a brief description of your project?",
    },
    {
        type: 'input',
        name: "Installation",
        message: "Describe the process needed to install your project?",
    },
    {
        type: 'input',
        name: "Usage",
        message: "What is the usage information needed for this project?",
    },
    {
        type: 'list',
        name: "License",
        message: "What kind of license was used for this project?",
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0', 'None'],
    },
    {
        type: 'input',
        name: "test",
        message: "What command is needed to run tests?",
    },
    {
        type: 'input',
        name: "Contribute",
        message: "Who were the contributors for this project?",
    },
    {
        type: 'input',
        name: "username",
        message: "Please enter your username for Github?",
    }, 
    {
        type: 'input',
        name: "email",
        message: "Please enter your email? ",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('README file generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=> {
        writeToFile("README.md", generateMarkdown({...data}));
        console.log("Generating README...");
        console.log(data);
    })
}

// Function call to initialize app
init();
