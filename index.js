const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');

// Function to generate the SVG format with text centered on top of the shape
function generateSVG(data) {
    let shape;
    switch (data.shape) {
        case "Triangle":
            shape = new Triangle();
            break;
        case "Circle":
            shape = new Circle();
            break;
        case "Square":
            shape = new Square();
            break;
        default:
            console.log("No shape selected");
    }

    shape.setColor(data.fill);

    const textX = 100; // Center X coordinate of the SVG
    const textY = 100; // Center Y coordinate of the SVG
    const textSize = 16; // Font size of the text

    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="${textSize}">${data.text}</text>
</svg>`;
}

// Function to write the SVG content to a file
function writeToFile(svgFormat) {
    fs.writeFile('logo.svg', svgFormat, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('SVG file saved as logo.svg');
        }
    });
}

// Function to initialize the application
function init() {
    const shapeQuestions = [
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?',
            choices: ['Triangle', 'Circle', 'Square']
        }
    ];

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
            type: 'input',
            message: 'Select color(s) for the shape:',
            name: 'fill'
        }
    ];

    inquirer.prompt(shapeQuestions)
        .then((shapeAnswers) => {
            inquirer.prompt(textInputQuestions)
                .then((textAnswers) => {
                    const data = {
                        shape: shapeAnswers.shape,
                        text: textAnswers.text,
                        fill: textAnswers.fill
                    };
                    const svgFormat = generateSVG(data);
                    writeToFile(svgFormat);
                });
        });
}

init();