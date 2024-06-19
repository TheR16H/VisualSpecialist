// dear rashawn write some jest tests in here (npx jest i think)

const { Square, Circle, Triangle} = require('./shapes');

test('square renders correctly', () => {
    const square = new Square();
    const renderedSquare = square.render();
});

test('Circle renders correctly', () => {
    const circle = new Circle();
    const renderedCircle = circle.render();
});

test('Triangle renders correctly', () => {
    const triangle = new Triangle();
    const renderedTriangle = triangle.render();
});