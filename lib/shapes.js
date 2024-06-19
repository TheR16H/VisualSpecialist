// dear rashawn make the classes exportable
const fs = require('fs');

class Triangle {
    constructor() {
    }
  
    render() {
      return (
        `<svg width="200" height="200">
  <polygon points="100,10 10,190 190,190" fill="blue" />
</svg>`
      );
    }
}

const triangleInstance = new Triangle();
console.log(triangleInstance.render());


class Square {
    constructor() {
    }
  
    render() {
      return (
        `<svg width="100" height="100">
          <rect width="100" height="100" style="fill: red" />
        </svg>`
      );
    }
}

const squareInstance = new Square();
console.log(squareInstance.render());

class Circle {
    constructor() {
      this.cx = 50;
      this.cy = 50;
      this.r = 40;
      this.stroke = "red";
      this.strokeWidth = 5;
      this.fill = "white";
    }
  
    render() {
      return (
        `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fill}" />
        </svg>`
      );
    }
}

const circle = new Circle();
const svgContent = circle.render();

// Write the SVG content to an SVG file
fs.writeFile('output.svg', svgContent, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('SVG file created successfully!');
});

module.exports = { Triangle, Square, Circle };