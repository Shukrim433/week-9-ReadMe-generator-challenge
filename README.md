# week-9-ReadMe-Generator-Challenge

## Description
- I wanted to create a README generator using node.js so that I could quickly create a professional README for any of my new projects.

## Process
- The first thing I did was use “require()” to add into my index.js file the modules needed in the application ‘inquirer’. ‘fs’  and ‘./utils/generateMarkdown’ (generateMarkdown)
- Then I created a writeToFile() function which has the parameter of data the function essentially just holds this code fs.writeFile('README.md', data, (err) => {…}). And data is a place holder for the actual data (template literal) we will be writing to the readme.md file. And that data will be the generateMarkdown module.
- Then I created an array of all the questions my application would prompt to the user under “inquirer.prompt([])” and added it to the the function that would initialise the whole readme generator application “init()”.
- Next I added a “.then()” function on the promise/data (user’s answers) returned by  “inquirer.prompt([])”  the callback function of the .then() function taking a  parameter of “data” which represents the answers from the user. Then in the code block of the .then function we call the generateMarkdown() module with the argument of “data” So the readme markdown will be generated using the users answers embedded in there. Then the writeTofile() function is called with the argument (readmeMarkdown) so the actual data that we’re writing to the file (second parameter of “Fs.writeFile”) is specified as the readmeMarkdown module.
- Then I made sure to call the init() function at the end. And my index.js code was done.
- Next I went to my generateMarkdown.js file and began working on the functions that would allow users to display the license, link and badge in their readMe based on the license choice they selected from the prompts. 
- The first function essentially checks if a license has been selected and if yes, the corresponding badge is returned at the end of the function. If no it returns an empty string. 
- To do this I created an array of objects. Each object had a name property and a badgeUrl property. And the last property name was simply called none with an empty string badgeUrl [as none was one of the license choices]. So what I did was iterate through the array of license badge objects using the .find() method. And what this method does is go through each badge object (element) in the array and check which badge name (badge.name ) matches the license selected by the user (“license” I.e. data.license) and then save that  under the variable “selectedLicense”. Then we do a switch statement to check if selectedLicense is valid then return its corresponding badgeUrl if not return a empty string.
- Then I created a function that checks if a license was selected, if yes then it’s corresponding license url is returned if no an empty string is returned. In this function I created an array of objects, each object has two properties, name and licenseUrl and the last object was none ‘’ then - I did the exact  same thing as before with the previous function.
- The last function checks if a license was selected, if yes it returns a license section in the readme, if no it returns an empty string ‘’
- Then In the generateMarkdown function I created one big template literal to pass to the Fs.writeFile()’s data parameter.

## Webpage

- These are links to a demo of the application:

https://app.screencastify.com/v3/watch/RVsitv5voweei1kTqu9T
https://app.screencastify.com/v3/watch/lQtjM5xP50x2G3Ygz2es
