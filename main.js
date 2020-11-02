const cars = ["Ford", "Mazda", "Honda", "Chevy"];
console.log(cars.length)

const moreCars = ["Acura", "Volkwagen", "Infinity", "Honda"];
let totalCars = cars.concat(moreCars)
console.log(totalCars.length)

console.log(cars.indexOf("Honda"))
console.log(cars.lastIndexOf("Ford"))

let stringOfCars = totalCars.join(" ")
console.log(stringOfCars)

totalCars = stringOfCars.split(" ")
console.log("totalCars: " + totalCars)

let carsInReverse = totalCars.reverse()
console.log("carsInReverse: " + carsInReverse)

carsInReverse.sort()
console.log("Sorted Cars: " +  carsInReverse)

console.log(carsInReverse.indexOf('Acura'));
console.log(carsInReverse.indexOf('Ford'));
console.log(carsInReverse.indexOf('Honda'));

let removedCars = carsInReverse.slice(2, 5)
console.log("removed cars: " + removedCars)

carsInReverse.splice(1, 2, "Ford", "Honda")
console.log("spliced cars: " + carsInReverse)

carsInReverse.push(removedCars[0])
carsInReverse.push(removedCars[1])
carsInReverse.push(removedCars[2])
console.log("pushed cars: " + carsInReverse)
// console.log(carsInReverse)

carsInReverse.pop();
console.log("popped car: " + carsInReverse)
// console.log(carsInReverse)

console.log("Shifted card: " + carsInReverse.shift(0))

carsInReverse.unshift("Chevette")
console.log("Unshifted Cars: " + carsInReverse)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
console.log(numbers)

const addTwo = (num) => {
    return num + 2
}

numbers.forEach(function(item, index, arr) {
    arr[index] = item + 2
})


// console.log(addTwo(6))
console.log(numbers)


