const data = require('./data.json');

const task11Result = (animals) => {
    const result = {};
    // your code here
    let dogs = 0;
    let cats = 0;
    let average = 0;
    let totalAge = 0;

    animals.map(animal => {
        if (animal.type === "dog") {
            dogs++;
        } else if (animal.type === "cat") {
            cats++;
        }
        totalAge+= animal.age;
    })

    average = Math.round(totalAge / animals.length);

    result["dogs"] = dogs;
    result["cats"] = cats;
    result["average"] = average;

    return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
    let result = 0;
    // your code here
    animals.map(animal => {
        if ((animal.type === "dog") && (animal.breed === true) && (animal.features.includes("black"))) {
            result++;
        }
    })
    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    let result = [];
    // your code here
    result = (animals.filter(animal => (((animal.type === "cat") && (animal.features.includes("black"))) ||
        ((animal.type === "dog") && (animal.features.includes("white"))))));
    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    let result = [];
    // your code here
    let cats = [];
    let dogs = [];

    cats = animals.filter(animal => animal.type === "cat");
    dogs = animals.filter(animal => animal.type === "dog");

    function compareByField(fieldName){
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }

    cats.sort(compareByField("age"));
    dogs.sort(compareByField("age"));

    result = result.concat(cats, dogs);

    return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number;
    // your code here

    for (let i= 1; i < n; i++) {
        result *= number;
    }

    return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
    const result = [];
    // your code here
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
