// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const generateREADME = ({title, description}) =>
`# ${title}

## Description
${description}`;

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type:'input',
        name: 'title',
        message: 'Enter the title of your project',
    },
    {
        type:'input',
        name: 'description',
        message: 'What is the purpose of this project',
    },
    // additional information to be added later
])
.then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('test.md',readmeContent, (err) =>
    err ? console.log(err) : console.log('Created README')
    );
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();