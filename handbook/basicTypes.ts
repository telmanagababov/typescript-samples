let isDone: Boolean = false,
    bingoType: Number = 20,
    ticketLabel: String = 'BINGO',
    ticketInfo: String = 'id ${bingoType}',
    ordinals: Number[] = [1, 2, 4, 6],
    ids: Array<Number> = [2, 27, 23, 222];

enum Color {Red, Black, Green, Yellow};
let bg: Color = Color.Black;

let something: any = {a: 'a', b: 'b', c: 'c'};

function doSomething(): void {
    alert('show something');
}

let test1: undefined = undefined;
let test2: null = null;

function doSomethingElse(): never {
    throw new Error('some error');
}

let infoLength1 = (<String> ticketInfo).length;
let infoLength2 = (ticketInfo as String).length;