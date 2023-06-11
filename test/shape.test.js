// Jest tests for shapes
//import the 3 classes to current file so that it can test out if the function can be run without error 
const { Triangle, Circle, Square } = require('../lib/shapes');


describe('shapesColor', () => {
    describe('triangle Syntax', () => {
        it('should take the input triangle color, and return an svg file syntax of specified colored triangle', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        })
    })
    describe('circle Syntax', () => {
        it('should take the input triangle color, and return an svg file syntax of specified colored circle', () => {
            const shape = new Circle();
            shape.setColor('yellow');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow" />')
        })
    })
    describe('square Syntax', () => {
        it('should take the input triangle color, and return an svg file syntax of specified colored square', () => {
            const shape = new Square();
            shape.setColor('green');
            expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="green" />')
        })
    })

}
)