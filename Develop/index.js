// required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const generateREADME = ({ title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, githubUsername, githubEmail }) =>
  `# ${title}

## Description
${description}

## Installation
${installationInstructions}

## Usage
${usageInformation}

## Contributing
${contributionGuidelines}

## Test Instructions
${testInstructions}

## Questions
If you have any questions you can reach me via email or GitHub:
[${githubUsername}](https://github.com/${githubUsername})
Email: ${githubEmail}

`;


// array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the purpose of this project?',
    },
    {
      type: 'input',
      name: 'directoryPath',
      message: 'Enter the absolute path where you want to save the README file:',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'Installation instructions?',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Usage information:',
    },
    {
      type: 'input',
      name: 'contributionGuidelines',
      message: 'Contribution guidelines:',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Test instructions:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub Username for the Questions section of the README:',
    },
    {
      type: 'input',
      name: 'githubEmail',
      message: 'Enter your GitHub email for the Questions section of the README:',
    },


    // additional information to be added later
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);
    const fileName = `README.md`; // Generate a unique file name

    const filePath = path.join(answers.directoryPath, fileName);

    fs.writeFile(filePath, readmeContent, (err) => {
      if (err) throw err;
      console.log(`Created README at ${filePath}`);
    });
  });
