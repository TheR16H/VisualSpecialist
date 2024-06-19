// import the shape classes from shapes.js in the lib folder. Use those classes to run the application logic or any other functionality
const inquirer = require('inquirer');
const fs = require('fs');

const { Square, Circle, Triangle } = require('./lib/shapes');

const shapeQuestions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Triangle', 'Circle', 'Square']
    }
];

inquirer.prompt(shapeQuestions)
    .then(answers => {
        let shape;

        switch (answers.shape) {
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Circle':
                shape = new Circle();
                break;
            case 'Square':
                shape = new Square();
                break;
            default:
                console.log('Invalid shape selected.');
        }

        const textInputQuestions = [
            {
                type: 'input',
                name: 'text',
                message: 'Enter text to write on the shape:'
            }
        ];

        inquirer.prompt(textInputQuestions)
            .then(textAnswers => {
                const userInputText = textAnswers.text;

                // Generate SVG content with the shape and text
                const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${shape.render()}
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="16">${userInputText}</text>
                </svg>`;

                fs.writeFile('logo.svg', svgContent, (err) => {
                    if (err) {
                        console.error('Error writing SVG file:', err);
                    } else {
                        console.log('SVG file saved as logo.svg');
                    }
                });
            });
    });