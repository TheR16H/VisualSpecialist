class Shape {
  constructor() {
    this.fill = ''; 
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
        // Define new coordinates for a triangle shape
        const x1 = 100; // X coordinate of the first point
        const y1 = 30; // Y coordinate of the first point
        const x2 = 200; // X coordinate of the second point
        const y2 = 200; // Y coordinate of the second point
        const x3 = 0; // X coordinate of the third point
        const y3 = 200; // Y coordinate of the third point

        return `<polygon points="${x1}, ${y1} ${x2}, ${y2} ${x3}, ${y3}" fill="${this.fill}" />`;
    }
}

class Circle extends Shape {
  constructor() {
    super();
    this.cx = 100;
    this.cy = 100;
    this.r = 70;
  }

  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="70" y="20" width="100" height="100" fill="${this.fill}" />`;
  }
}

module.exports = { Triangle, Circle, Square };