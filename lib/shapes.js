class Shape {
  constructor() {
    this.fill = ''; // Default fill color
  }

  setColor(color) {
    this.fill = color;
  }

  render() {
    throw new Error('Method not implemented');
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 10 244, 170 56, 170" fill="${this.fill}" />`;
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.cx = 150;
    this.cy = 100;
    this.r = 80;
  }

  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.fill}" />`;
  }
}

module.exports = { Triangle, Circle, Square };