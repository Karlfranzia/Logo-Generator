const { Shape, Circle, Square, Triangle } = require('../lib/shapes');

describe('Circle', () => {
    it('Circle should render properly', () => {
        const shape = new Circle('svg', 'white', 'blue');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
    });
  });

  describe('Square', () => {
    it('Square should render properly', () => {
        const shape = new Square('svg', 'white', 'blue');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
    });
  });

  describe('Triangle', () => {
    it('Triangle should render properly', () => {
        const shape = new Triangle('svg', 'white', 'blue');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
    });
  });