// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "link",
        message: "Provide a URL where a user can access your deployed application."
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide the relative path for your screenshot image.",
    },
    {
        type: "input",
        name: "credits",
        message: "List any collaborators with links to their Github profiles, third-party assets with links, and tutorilas with links.",
        default: "",
    },
    {
        type: "input",
        name: "features",
        message: "If your project has a lot of features, list them here.",
    },
    {
        type: "input",
        name: "contribute",
        message: "If you created an application or package and would like other developers to contribute to it, include guidelines for how to do so.",
    },
    {
        type: "input",
        name: "tests",
        message: "If you have written tests for your application, provide examples on how to run them here.",
    },
    {
        type: "input",
        name: "github",
        message: "Provide a valid github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide valid email.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const file = fs.writeFileSync(path.join(process.cwd(), fileName), data);
    return file;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const filePath = "../README.md";
        writeToFile(filePath, generateMarkdown({ ...answers }));
    });
}

// Function call to initialize app
init();


