const inquirer = require("inquirer");
const fs = require("fs");
const licenseGen = require("script.js/licensesGen.js");

const questions = [
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
		type: "list",
		message: "What licenses do you what to include for your project?",
		name: "licenses",
		choices: ["MIT", "Unlicense", "ISC"],
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
];

inquirer.prompt(questions).then((data) => {
	const badge = ``;
	const licensePicked = ``;
	if (data.licenses === "MIT") {
		licensePicked = mit;
		badge = `![MIT](https://img.shields.io/github/license/microsoft/vscode)`;
	} else if (data.licenses === "Unlicense") {
		licensePicked = unlicense;
		badge = `![Unlicensed](https://img.shields.io/badge/license-Unlicensed-lightgrey)`;
	} else {
		licensePicked = isc;
		badge = `![ISC License](https://img.shields.io/static/v1.svg?label=License&message=ISC&color=yellow)`;
	}

	const readme = `# ${data.title}

## Description
<!-- Provide a short description explaining the what, why, and how of your project.
What was your motivation? Why did you build this project? What problem does it solve? What did you learn? -->
- ${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
<!-- What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. -->
- To install type the following command in your terminal or Bash.
- ${data.install}

## Usage
<!-- Provide instructions and examples for use. Include screenshots as needed. -->
- ${data.usage}

## Credits
<!-- List your collaborators, if any, with links to their GitHub profiles. Links to websites or resources. -->
- ${data.credit}

## License
<!-- If you need help choosing a license, refer to https://choosealicense.com/ -->
- ${licensePicked}

## Contribute
<!-- If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. -->
- ${data.contribution}

## Tests
<!-- If your project has any tests provide examples on how to run them here. -->
- ${data.tests}

## Questions

- Contact me for any questions you might have.
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}`;

	fs.writeFile(`README.md`, readme, (err) =>
		err ? console.error(err) : console.log("Success!")
	);
});

var mit = `MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

var unlicense = `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`;

var isc = `ISC License

Copyright (c) [year], [fullname]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
