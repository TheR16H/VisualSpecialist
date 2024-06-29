//  import the shape classes from shapes.js in the lib folder. Use those classes to run the application logic or any other functionality
// npx jest
const inquirer = require('inquirer');
const fs = require('fs');

const { Square, Circle, Triangle } = require('./lib/shapes');



const colors = {
    red: '#c42036',
    blue: '#004af9',
    green: '#00ff00',
    yellow: '#ffff00',
    purple: '#660066'
}; 

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
                        message: 'Enter text to write on the shape:',
                        validate: function(input) {
                            if (input.length > 3) {
                                return 'Text must be 3 characters or less.';
                            }
                            return true;
                        }
                    },
                    {
                        type: 'checkbox',
                        name: 'colors',
                        message: 'Select color(s) for the shape:',
                        choices: ['red', 'blue', 'green', 'yellow', 'purple'] // Add more colors as needed
                    }
                ];
        
                inquirer.prompt(textInputQuestions)
                    .then(textAnswers => {
                        const userInputText = textAnswers.text;
                        const selectedColors = textAnswers.colors;
        
                        // Set the selected color(s) for the shape
                        selectedColors.forEach(colors => {
                            shape.setColor(colors);
                        });
        
                        // Generate SVG content with the shape and text
                        const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        ${shape.render()}
                        <text x="35" y="55" dominant-baseline="middle" text-anchor="middle" fill="${colors}" font-size="16">${userInputText}</text>
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