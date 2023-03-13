

class Shape {
    constructor(logoText, textColor, shapeColor){
        this.logoText = logoText
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Circle extends Shape{
    constructor(...args) {
        super(...args)
        this.render = function () {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText.toUpperCase()}</text></svg>`
        }
    }
}

class Square extends Shape{
    constructor(...args){
        super(...args)
        this.render = function () {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText.toUpperCase()}</text></svg>`
        }
    }
}

class Triangle extends Shape{
    constructor(...args){
        super(...args)
        this.render = function () {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText.toUpperCase()}</text></svg>`
        }
    }
}

module.exports = { Shape, Circle, Square, Triangle };