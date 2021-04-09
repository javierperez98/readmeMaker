const questions = require("inquirer");
const fs = require("fs");

questions
	.prompt([
		{
			type: "input",
			message: "What is the title of your project?",
			name: "title",
		},
		{
			type: "input",
			message: "Provide a short description of your project.",
			name: "description",
		},
		{
			type: "input",
			message: "What are the steps required to install your project?",
			name: "install",
		},
		{
			type: "input",
			message: "Provide instructions and examples of your project's usage.",
			name: "usage",
		},
		{
			type: "input",
			message: "Provide a list of your sources or collaborators.",
			name: "credit",
		},
		{
			type: "checkbox",
			message: "What licenses do you what to include for your project?",
			name: "licenses",
			choices: ["MIT", ""],
		},
		{
			type: "input",
			message: "What are your project contribution guidelines?",
			name: "contribution",
		},
		{
			type: "input",
			message: "Provide test instructions for your project.",
			name: "tests",
		},
		{
			type: "input",
			message: "What is your GitHub username?",
			name: "github",
		},
		{
			type: "input",
			message: "What is your email address?",
			name: "email",
		},
	])

	.then((data) => {
		const readme = `# ${data.title}
		\n## Description
		\n- ${data.description}
		\n## Table of Contents
		\n- [Installation](#installation)
		\n- [Usage](#usage)
		\n- [Credits](#credits)
		\n- [License](#license)
		\n- [Contribute](#contribute)
		\n- [Tests](#tests)
		\n- [Questions](#questions)
		\n## Installation
		\n- ${data.install}
		\n## Usage
		\n- ${data.usage}
		\n## Credits
		\n- ${data.credit}
		\n## License
		\n- ${data.licenses}
		\n## Contribute
		\n- ${data.contribution}
		\n## Tests
		\n- ${data.tests}
		\n## Questions
		\n- Contact me for any questions you might have.
		\n- GitHub: [${data.github}](https://github.com/${data.github})
		\n- Email: ${data.email}`;

		fs.writeFile(`README.md`, readme, (err) =>
			err ? console.error(err) : console.log("Success!")
		);
	});

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// https://img.shields.io/aur/license/android-studio
// https://img.shields.io/apm/l/vim-mode
// ![GitHub](https://img.shields.io/github/license/median-man/public-api-search)
// ![GitHub](https://img.shields.io/github/license/microsoft/vscode)
// ![ISC License](https://img.shields.io/static/v1.svg?label=License&message=ISC&color=yellow)
