// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
     cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const copyOfCats = [...cats, "Broom"]
    return copyOfCats;
}
function prependCat() {
    const copyOfCatsTwo = ["Arnold", ...cats]
    return copyOfCatsTwo;
}
function removeLastCat() {
    const copyOfCatsThree = cats.slice(0,2)
    return copyOfCatsThree;
}
function removeFirstCat() {
    const copyOfCatsFour = cats.slice(1)
    return copyOfCatsFour;
}