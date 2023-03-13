const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');
const validateText = (input) => {
    if (input.length <= 3) {
      return true;
    }
    return 'Please enter exactly 3 characters.';
  };

  inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter up to three letters for your Logo',
        name: 'logoText',
        validate: validateText,
    },
    {
        type: 'input',
        message: 'what would you like your text color to be?',
        name: 'textColor',
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?'
    }
  ]).then((response) => {
    switch (response.logoShape) {
        case 'circle': 
            let circle = new Circle(response.logoText, response.textColor, response.shapeColor)
            let circleSVG = circle.render()
            fs.appendFile('./examples/logo.svg', circleSVG, (err) =>
                err ? console.error(err) : console.log('Commit logged!')
                );
            break;
        case 'square':
            let square = new Square(response.logoText, response.textColor, response.shapeColor)
            let squareSVG = square.render()
            fs.appendFile('./examples/logo.svg', squareSVG, (err) =>
                err ? console.error(err) : console.log('Commit logged!')
                );
            break;
        case 'triangle':
            let triangle = new Triangle(response.logoText, response.textColor, response.shapeColor)
            let triangleSVG = triangle.render()
            fs.appendFile('./examples/logo.svg', triangleSVG, (err) =>
                err ? console.error(err) : console.log('Commit logged!')
                );
            break;
    }
  })