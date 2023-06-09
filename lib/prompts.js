const inquirer = require('inquirer');
const Fs = require('fs');
const {Triangle, Circle, Square, GeneralShape} = require('./shapes');

class Questions {
    constructor() {
        this.responseObj = [];
    }
    askQuestions() {
        return inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'characters',
                    message: 'Please enter the characters( max 3 characters) that you would like to include in the SVG image.'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please provide the desired text color. You can either use a color keyword (e.g., "red," "blue," "green") or a hexadecimal number (e.g., "#FF0000" for red, "#0000FF" for blue). '
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Which of the following shapes are you interested in? Please select from the options below:',
                    choices: ['Triangle', 'Circle', 'Square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please provide the desired shape color. You can either use a color keyword (e.g., "red," "blue," "green") or a hexadecimal number (e.g., "#FF0000" for red, "#0000FF" for blue). '
                },
            ]
        ).then(({ characters, textColor, shape, shapeColor }) => {
            switch (shape) {
                case 'Triangle':
                    const newTriangle = new Triangle(characters,textColor, shapeColor )
                    Fs.writeFile('triangle.svg', newTriangle.render(), (err) => err ? console.error(err) : console.log('sucess!') )  
                    break;


                case 'Circle':
                    const newCircle = new Circle(characters,textColor, shapeColor );
                    Fs.writeFile('circle.svg', newCircle.render(), (err) => err ? console.error(err) : console.log('sucess!') );
                    break;


                case 'Square':

                    const newSquare = new Square(characters,textColor, shapeColor );
                    Fs.writeFile('square.svg', newSquare.render(), (err) => err ? console.error(err) : console.log('sucess!') );
                    break;

            
                default:
                    console.log('Please retry again')
                    break;
            }
        })
    }
    // can enter up to 3 characters
    // prompt for the text color. either color keyword or hexadecimal number
    //ask for the shapes show a list that includes circle, trinagle, Square
    // ask for the shape's color can enter either color keyword/ hexadecimal number
    // then create an SVG file named as logo.svg
    // output a text 'Generated logo.svg' is printed in the command line
    // logo.dvg file should show a 300X200 pixel image that matched the criteria 












}

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

module.exports = Questions;
// const myResponse = new Questions();

// myResponse.askQuestions();
