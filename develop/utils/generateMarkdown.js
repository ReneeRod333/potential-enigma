// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    Licensed under the ${license} license.`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Deployed Application URL](#Link)
  * [Credits](#Credits)
  * [Features](#Features)
  * [How to Contribute](#HowToContribute)
  * [Tests](#Tests)
  * [Questions](#Questions)
 
  ## <a id="Installation"></a>Installation
  ${data.installation}

  ## <a id="Usage"></a>Usage
  ${data.usage}

  ## <a id="Link"></a>Deployed Application URL
  [Walkthrough Video](${data.link})

  ## <a id="Screenshot"></a>Screenshot
  <img src="${data.screenshot}" width="400" height="900">

  ## <a id="Credits"></a>Credits
  ${data.credits}

  ## <a id="Features"></a>Features
  ${data.features}

  ## <a id="HowToContribute"></a>How to Contribute
  ${data.contribute}

  ## <a id="Tests"></a>Tests
  ${data.tests}

  ## <a id="Questions"></a>Questions
  For questions, please send an email to <${data.email}>, or visit Github profile [${data.github}](https://github.com/${data.github})

 
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;




