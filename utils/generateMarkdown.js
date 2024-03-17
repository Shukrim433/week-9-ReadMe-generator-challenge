// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
//created an array of objects for each license and with 2 properties each: badge name and badge url
  const licenseBadges = [
    {badgeName : 'MIT', badgeUrl : '(https://img.shields.io/badge/License-MIT-yellow.svg)'},
    {badgeName :'APACHE 2.0', badgeUrl :'(https://img.shields.io/badge/License-Apache%202.0-blue.svg)'},
    {badgeName :'GPL 3.0', badgeUrl : '(https://img.shields.io/badge/license-GPL%203.0-blue.svg)'},
    {badgeName :'BSD 3', badgeUrl : '(https://img.shields.io/badge/license-BSD%203-blue.svg)'},
    {badgeName :'None', badgeUrl : ''}
]

//used .find() to iterate through the array and return the first badgeName that matches the seleceted license
const selectedLicense = licenseBadges.find((badge)=> license === badge.badgeName)
return selectedLicense ? selectedLicense.badgeUrl : ''
//checks if selectedLicense is valid, if so it's url is returned if selectedLicense isnt valid an empty string is returned
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
