const fs = require('fs');
const { Square, Circle, Triangle } = require('./shapes');

describe('Shape Rendering Tests', () => {
  describe('Square', () => {
    it('should render a square with the specified color', () => {
      const square = new Square();
      square.setColor('red');
      const renderedSquare = square.render();
      expect(renderedSquare).toContain('rect');
      expect(renderedSquare).toContain('fill="red"');
    });
  });

  describe('Circle', () => {
    it('should render a circle with the specified color', () => {
      const circle = new Circle();
      circle.setColor('blue');
      const renderedCircle = circle.render();
      
      expect(renderedCircle).toContain('circle');
      expect(renderedCircle).toContain('fill="blue"');
       });
  });

  describe('Triangle', () => {
    it('should render a triangle with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('green');
      const renderedTriangle = triangle.render();
      
      expect(renderedTriangle).toContain('polygon');
      expect(renderedTriangle).toContain('fill="green"');
       });
  });
});