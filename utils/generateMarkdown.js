// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//license = data.license (ie the license the user selected)
function renderLicenseBadge(license) {
//created an array of objects for each license and with 2 properties each: badge name and badge url
  const licenseBadges = [
    {name : 'MIT', badgeUrl : '![MIT badge](https://img.shields.io/badge/License-MIT-yellow.svg)'},
    {name :'APACHE 2.0', badgeUrl :'![APACHE 2.0 badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'},
    {name :'GPL 3.0', badgeUrl : '![GPL 3.0 badge](https://img.shields.io/badge/license-GPL%203.0-blue.svg)'},
    {name :'BSD 3', badgeUrl : '![BSD 3 badge](https://img.shields.io/badge/license-BSD%203-blue.svg)'},
    {name :'None', badgeUrl : ''}
]

//used .find() to iterate through the array and return the first badgeName that matches the seleceted license
const selectedLicense = licenseBadges.find((badge)=> license === badge.name)
return selectedLicense ? selectedLicense.badgeUrl : ''
//checks if selectedLicense is valid, if so it's url is returned if selectedLicense isnt valid an empty string is returned
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //created an array of objects for each license and with 2 properties each: license name and license link
  const licenseLinks = [
    {name : 'MIT', licenseLink : 'https://opensource.org/license/mit'},
    {name :'APACHE 2.0', licenseLink :'https://www.apache.org/licenses/LICENSE-2.0'},
    {name :'GPL 3.0', licenseLink : 'https://www.gnu.org/licenses/gpl-3.0.en.html'}, 
    {name :'BSD 3', licenseLink : 'https://opensource.org/license/bsd-3-clause'},
    {name :'None', licenseLink : ''}
]
const selectedLicense = licenseLinks.find((badge)=> license === badge.name)
return (selectedLicense) ? selectedLicense.licenseLink : ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license) ? `## License
  - ${renderLicenseLink(license)}` : ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}
  
  ## Description
  - ${data.description}
  
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [License](#License)
  
  ## Installation
  - ${data.installation}
  
  ## Usage
  - ${data.usage}
  
  ## Contribution
  - ${data.contributing}
  
  ## Test
  - ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  - ${data.username}
  - ${data.email}`;
}

module.exports = generateMarkdown;
