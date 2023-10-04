const data = require('./data.json');

const task11Result = animals => {
    const result = animals.reduce((res, animal) => {
        const key = animal.type + 's';
        res[key] ? res[key]++ : res[key] = 1;
        res.average ? res.average += animal.age : res.average = animal.age;
        return res;
    }, {});
    result.average = Math.round(result.average / animals.length);
    return result;
};

console.log(task11Result(data));

const task12Result = animals => animals.reduce((amount, {type, breed, features}) => {
    if (type === "dog" && breed === true && features.includes("black")) {
        amount += 1;
    }
    return amount;
    }, 0);

console.log(task12Result(data));

const task13Result = animals => animals.filter(({type, features}) =>
        (type === "cat" && features.includes("black")) ||
        (type === "dog" && features.includes("white")));

console.log(task13Result(data));

const task14Result = animals => {
    return animals.slice().sort((a, b) => {
        if (a.type !== b.type) {
            if (a.type === "cat") {
                return -1;
            } else {
                return 1;
            }
        } else if (a.type === "cat") {
            return b.age - a.age;
        } else {
            return a.age - b.age;
        }
    });
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    if (!Number.isInteger(n)) {
        return `Degree ${n} is not integer. Enter integer degree please!`;
    } else {
        let result = 1;
        for (let i= 0; i < Math.abs(n); i++) {
            result *= number;
        }
        if (n < 0) {
            result = 1 / result;
        }
        return result;
    }
};

console.log(myPowFunc(3, 4));

const myFlatFunc = inputArray => {
    const result = [];
    const stack = [...inputArray];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }
    return result.reverse();
};

console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
