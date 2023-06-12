const inquirer = require('inquirer');
const Fs = require('fs/promises');
const { Triangle, Circle, Square } = require('./shapes');
const { error } = require('console');
const path = require('path');

class PROMPTS {
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
            let chosenTemp;
            // switch different case based off the shape that was chosen in the prompts 
            switch (shape) {
                case 'Triangle':
                    const newTriangle = new Triangle(characters, textColor, shapeColor);
                    chosenTemp = newTriangle.svgTemp();
                    break;
                case 'Circle':
                    const newCircle = new Circle(characters, textColor, shapeColor);
                    chosenTemp = newCircle.svgTemp();
                    break;
                case 'Square':
                    const newSquare = new Square(characters, textColor, shapeColor);
                    chosenTemp = newSquare.svgTemp();
                    break;
            }
            // using Fs to write file, and the file will be created under output folder. if error occurs, the Fs/promise will catch the error and log a red message logo.svg was not generated due to Invalid color/Characters inputs! Please try again!
            Fs.writeFile(path.join(__dirname, '..', 'output', 'logo.svg'), chosenTemp)
                .then(() => console.log('Generated \x1b[32m logo.svg\x1b[0m'))
                .catch((error) => {
                    console.log(`\x1b[31m logo.svg was not generated due to Invalid color/Characters inputs! Please try again! \x1b[0m`);
                    console.log(error);
                })

        })
    }
}
// exports the prompts class in order to access it outside of curent file.
module.exports = PROMPTS;
