// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (license === "GPL") {
    return '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license === 'APACHE 2.0') {
    return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  else if (license === 'BSD 3'){
    return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  }
  else {
    return ""
  }
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
