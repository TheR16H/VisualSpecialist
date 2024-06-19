// dear rashawn write some jest tests in here (npx jest i think)

const fs = require('fs');
const { Square, Circle, Triangle } = require('./shapes');

test('Square renders correctly', () => {
    const square = new Square();
    const renderedSquare = square.render();
    
    fs.writeFile('square.svg', renderedSquare, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Square SVG file created successfully!');
    });
});

test('Circle renders correctly', () => {
    const circle = new Circle();
    const renderedCircle = circle.render();
    
    fs.writeFile('circle.svg', renderedCircle, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Circle SVG file created successfully!');
    });
});

test('Triangle renders correctly', () => {
    const triangle = new Triangle();
    const renderedTriangle = triangle.render();
    
    fs.writeFile('triangle.svg', renderedTriangle, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Triangle SVG file created successfully!');
    });
});