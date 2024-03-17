// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>{
        err? console.error(err) : console.log('README.md successfully generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
    // TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type : 'input',
        message: 'What is the title of your project?',
        name : 'title',
    },
    {
        type : 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name : 'description',
    },
    {
        type : 'input',
        message: 'What are the installation instructions for your project?',
        name : 'installation',
    },
    {
        type : 'input',
        message: 'What is the usage information for your project?',
        name : 'usage',
    },
    {
        type : 'input',
        message: 'What are the contribution guidelines for your project?',
        name : 'contributing',
    },
    {
        type : 'input',
        message: 'What are the test instructions for your project?',
        name : 'tests',
    },
    {
        type : 'list',
        message: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name : 'license',
    },
    {
        type : 'list',
        message: 'What is your GitHub username?',
        name : 'username',
    },
    {
        type : 'list',
        message: 'What is your email address?',
        name : 'email',
    },
])
.then((data) => {
    const readmeMarkdown = generateMarkdown(data)
    writeToFile(readmeMarkdown)
})
}

// Function call to initialize app
init();
