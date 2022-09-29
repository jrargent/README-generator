const fs = require('fs');
const inquirer = require('inquirer');
const generateFile = require('./src/markdown-template.js');


/* section for asking user following questions:

1. What is your GitHub username?
2. What is your email address?
3. What is your project's name?
4. Please write a short description of your project.

5. What kind of license should your project have? (ex. MIT)

6. What command should be run to install dependencies? (npm i?)
7. What command should be run to run tests? (npm test?)
8. What does the user need to know about using the repo?
9. What does the user need to know about contributing to the repo?

*/

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                }
                else {
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter something about your project. Ex. What is it about? Why did you make it?');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have? (Please choose one of the following)',
            choices: ['MIT', 'apache-2.0', 'gpl-3.0', 'mpl-2.0', 'agpl-3.0', 'bsl-1.0', 'unlicense']
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies? (Ex. npm i)'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests? (Ex. npm test)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?'
        },
    ])
};

promptUser()
.then(readmeData => {
    return generateFile(readmeData);
})
.then(fileContent => {
    fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) throw new Error(err);
        console.log("The README file has been saved to the dist folder of the repo.");
    });
})
.catch(err => {
    console.log(err);
  });