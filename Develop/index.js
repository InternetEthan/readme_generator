// required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const generateREADME = ({ title, description }) =>
  `# ${title}

## Description
${description}`;


// array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the purpose of this project',
    },
    {
      type: 'input',
      name: 'directoryPath',
      message: 'Enter the absolute path where you want to save the README file:',
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
