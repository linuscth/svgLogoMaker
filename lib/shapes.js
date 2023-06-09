



// // Exports `Triangle`, `Circle`, and `Square` classes
class GeneralShape {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }   
}
//Triangle Class
class Triangle extends GeneralShape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
    
    </svg>`
    }



}

// //Circle Class
class Circle extends GeneralShape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor)
    }

render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

</svg>`
}

}

// //Square Class 

class Square extends GeneralShape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
    
    </svg>`
    }
    


}        


module.exports= {
    GeneralShape,
    Triangle,
    Circle,
    Square
}