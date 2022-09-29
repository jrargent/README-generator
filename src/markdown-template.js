/*  
This is the section that will create the actual markdown 'code" that will
be saved into the readme.md file. 


GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with:
     the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
    THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README


module.exports will export this to index.js
*/


module.exports = templateData => {
    const { github, email, project, description, license, install, test, usage, contribution } = templateData
  
    
    function renderLicenseSection(license) {
        if (license) {
                return `
This project is using the [${license}](https://choosealicense.com/licenses/${license}/) license.
            `
        }        
    };


    function renderLicenseBadge(license) {
        if (license) {
            return `![license](https://img.shields.io/badge/License-${license}-blueviolet)`
            } else {
                return ''
            }
    };

return `

# ${project}

## Description
${renderLicenseBadge(license)}


${description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    
${install}

## Usage

${usage}

## License

${renderLicenseSection(license)}


## Contributing

${contribution}

## Tests

${test}

# Questions

Link to my GitHub: https://github.com/${github}

Please feel free to email me at ${email} with any questions you might have. 
 `;
};


