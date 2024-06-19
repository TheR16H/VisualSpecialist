// dear rashawn make the classes exportable
const inquirer = require('inquirer');
const fs = require('fs');

class triangle{
    constructor() {
      this
    }
    render() {
      return
    }
}


class square {
  constructor() {
    this
  }
  render() {
    
  }
}

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
      return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fill}" />
      </svg>`;
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
