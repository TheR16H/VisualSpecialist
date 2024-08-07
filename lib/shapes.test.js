const fs = require('fs');
const { Square, Circle, Triangle } = require('./shapes');

describe('Shape Rendering Tests', () => {
  describe('Square', () => {
    it('should render a square with the specified color', () => {
      const square = new Square();
      square.setColor('red');
      const renderedSquare = square.render();
      
      expect(renderedSquare).toMatch('<rect x="70" y="20" width="160" height="160" fill="red" />');
    });
  });

  describe('Circle', () => {
    it('should render a circle with the specified color', () => {
      const circle = new Circle();
      circle.setColor('blue');
      const renderedCircle = circle.render();
      
      expect(renderedCircle).toMatch('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });

  describe('Triangle', () => {
    it('should render a triangle with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('green');
      const renderedTriangle = triangle.render();
      
      expect(renderedTriangle).toMatch('<polygon points="150, 10 244, 170 56, 170" fill="green" />');
    });
  });
});