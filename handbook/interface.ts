function printLabel(labelledObj: {label: string}) {
    console.log(labelledObj.label);
}
let myObj = {label: "helloworld", size: 10};
printLabel(myObj);


interface LabeledValue {
    label: string,
    size: number
}
function printLabeledValue(labelledObj: LabeledValue) {
    console.log(labelledObj.label, labelledObj.size);
}
printLabeledValue(myObj);


interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: String, area: Number} {
    let newSquare = {color: 'white', area: 100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}


interface Point {
    readonly x: number;
    readonly y: number;
}


interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Anna"];
let myStr: string = myArray[0];


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}


interface Shape {
    width: number;
}
interface Rect extends Shape {
    height: number;
}