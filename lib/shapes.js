const hexPattern = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
const validColors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque",
    "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk",
    "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen",
    "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid",
    "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray",
    "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
    "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green",
    "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory",
    "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
    "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue",
    "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime",
    "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue",
    "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive",
    "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen",
    "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink",
    "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue",
    "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver",
    "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue",
    "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"];

// //GeneralShape will be extended to `Triangle`, `Circle`, and `Square` classes
class GeneralShape {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    // testColor function to check if input color value is valid.
    testColor(inputColor) {
        return validColors.includes(inputColor) || hexPattern.test(inputColor);

    }
    //test if max 3 characters are entered 
    testLetter(characters) {
        return characters.length <= 3;
    }
    setColor(color) {
        this.shapeColor = color;
    }
    
}

//Triangle Class
class Triangle extends GeneralShape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor)
    }
    // render function to generate the shape
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
    // svgTemp function test whether the input color value is valid, and return the template literals of the entire svg file. 
    svgTemp() {
        if (this.testColor(this.shapeColor) && this.testColor(this.textColor) && this.testLetter(this.characters)) {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`
        }
    }
}


//Circle Class
class Circle extends GeneralShape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor)
    }

    // render function to generate the shape
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
    // svgTemp function test whether the input color value is valid, and return the template literals of the entire svg file. 
    svgTemp() {
        if (this.testColor(this.shapeColor) && this.testColor(this.textColor) && this.testLetter(this.characters)) {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`
        }
    }
}

// //Square Class 
class Square extends GeneralShape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor)
    }
    // render function to generate the shape
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`
    }
    // svgTemp function test whether the input color value is valid, and return the template literals of the entire svg file. 
    svgTemp() {
        if (this.testColor(this.shapeColor) && this.testColor(this.textColor) && this.testLetter(this.characters)) {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`
        }
    }
}

// exporting the 3 classes
module.exports = {
    Triangle,
    Circle,
    Square
}