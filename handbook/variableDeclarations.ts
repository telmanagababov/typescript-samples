var abc = 'abc';

let def = 'def';

const ghi = 'ghi';

let [first, second] = [1, 2];
[first, second] = [second, first];

let [a, ...rest] = [1, 2, 3, 4, 5];

let [, b, , d] = [1, 2, 3, 4];

let {A, B} = {A: 'AVALUE', B: 'BVALUE'};

let firstArr = [1, 2, 3],
    secondArr = [4, 5, 6],
    bothArr = [0, ...firstArr, ...secondArr, 7];
