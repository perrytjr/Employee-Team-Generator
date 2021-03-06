const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");




const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");








const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamRoster = [];

function buildteamPage() {
    fs.writeFileSync(outputPath, render(teamRoster), "utf-8")
}
teamManager();

function teamManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is manager's name?",
            name: "name",

        },

        {
            type: "input",
            message: "What is manager's ID?",
            name: "id",

        },
        {
            type: "input",
            message: "What is manager's email?",
            name: "email",
        },

        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber",
        }

    ]).then(answers => {
        var manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamRoster.push(manager);
        yourTeam();
    })
}

function yourTeam(){
    inquirer.prompt([
        {
        type: "list",
        name: "engineerIntern",
        message: "Which team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "No more team members to add!"
        ]
        }
    ]).then(function(yourChoice) {
        switch(yourChoice.engineerIntern) {
            case "Engineer":
                yourEngineer();
                break;
                case "Intern":
                    yourIntern();
                    break;
                    default:
                        buildteamPage();
        }

    });
}

function yourEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is your engineer's ID?",

        },

        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?",
        },

        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username?",
        }
    ]).then(answers=>{
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamRoster.push(engineer);
        yourTeam();
    });

}

function yourIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is your intern's ID?",

        },

        {
            type: "input",
            name: "email",
            message: "What is your intern's email?",
        },

        {
            type: "input",
            name: "school",
            message: "What is your intern's school?",
        }
    ]).then(answers=> {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamRoster.push(intern);
        yourTeam();
    });

}

buildteamPage();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
