
//38.11
function isLandscape(width, height){
    return (width > height)
}

console.log(isLandscape(500, 300))

//39.12
const output = fizzBuzz(false)
console.log(output)

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN

    if (input % 3 === 0 && input % 5 === 0) {
        return "FizzBuzz";
    } else if (input % 3 === 0) {
        return "Fizz";
    } else if (input % 5 === 0) {
        return "Buzz";
    } else {
        return input;
    }
}

//40.13
checkSpeed(77)
function checkSpeed(speed){
    const speedLimit = 70
    const kmPerPoint = 5

    if (speed < speedLimit + kmPerPoint){
        console.log('OK')
        return
    }
    const points = Math.floor(speed - speedLimit) 
    if (points >= 12)
        console.log('License suspended')
    else
        console.log('Points')

}

//41.14
showNumbers(10)

function showNumbers(limit){
    for (let a = 0; a <= limit; a++){
        if (a % 2 === 0) console.log(a, 'Even')
            else console.log (a, 'Odd')
    }
}
//42.15
const array = [0, null, undefined, '', 2, 3, 'hello', false]

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0
    
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            count = count + 1
        }
    }
    
    return count
}

//43.16

const movie = {
    title: 'Avengers',
    releaseYear: 2012,
    rating: 5,
    director: 'Russo Brothers'
}
showProperties(movie)

function showProperties(obj) {
    for (let key in obj)
        if(typeof obj[key] === 'string')
            console.log(key, obj[key])
}

//44.17

console.log(sum(10))

function  sum(limit){
    for (let a = 0; a <= limit; a++)
        if (a % 3 === 0 || a % 5 === 0)
            sum += a

    return sum
}

//45.18

const marks = [80, 80, 50]

console.log(calculateGrades(marks))

function calculateGrades(marks){
    let sum = 0
    for (let mark of marks)
        sum += mark
    let average = sum / marks.length

if (average < 60) return 'F'
if (average < 70) return 'D'
if (average < 80) return 'C'
if (average < 90) return 'B'

}

//46.19

showStars(2)

function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let pattern = ''
        for (let a = 0; a < row; a++)
            pattern += '*'
        console.log(pattern)
    }
}

//47.20

function showPrime(limit) {
    for (let number = 2; number <= limit; number++){

        let isPrime = true
        for (let factor = 2; factor < number; factor++){
           if (number % factor === 0) 
            isPrime = false
           break
        }
        if (isPrime) console.log(number)
    }

}
showPrime(10)

// 62.15

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}

function showAddres(address) {
    for (let key in address)
        console.log(key, address[(key)])
}
showAddres(address)

//63.16

let address1 = createAddress('a', 'b', 'c')

function createAddress(street, city, zipCode){
    return{
        street, city, zipCode}
}
console.log(address1)

function Address(street, city, zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

//64.17

// function Address(street1, city1, zipCode1) {
//     this.street1 = street1
//     this.city1 = city1
//     this.zipCode1 = zipCode1
// }

// let address2 = new Address('a', 'b', 'c')
// let address3 = new Address('a', 'b', 'c')
// let address4 = address2

// function areEqual(address1, address2) {
//     if (address1.street1 !== address2.street1) {
//         return false
//     }

//     if (address1.city1 !== address2.city1) {
//         return false
//     }

//     if (address1.zipCode1 !== address2.zipCode1) {
//         return false
//     }

//     return true
// }

// function areSame(address1, address2) {
//     if (address1 === address2) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(areEqual(address2, address3)) 
// console.log(areSame(address2, address3))  
// console.log(areSame(address2, address4))  
//65.18

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author:'a', body:'b'},
        {author:'c', body: 'd'}
    ],
    isLive: true
}

console.log(post)

//66.19

let post1 = new Post('a', 'b', 'c')

console.log(post1)

function Post(title, body, author){
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comment = []
    this.isLive = false
}

//67.20

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
]

let restaurants = [
    {averagePerson: 5}
]

console.log(priceRanges)

//84.17

const numbers = arrayFromRange(-10, -4)

function arrayFromRange(min, max) {
    const output = []
    for(let a = min; a <= max; a++)
        output.push(a)
    return output
    }
console.log(numbers)

//85.18

const numbers1 = [1, 2, 3, 4]

function includes(array, searchElement){
    for(let element of array)
        if ( element === searchElement)
            return true
    return false
}

console.log(includes(numbers1, 3))

//86.19

function except(array, excluded) {
    const output1 = []
    for (let element of array) {
        if (!excluded.includes(element)) {
            output1.push(element)
        }
    }
    return output1
}

const numbers2 = [1, 2, 3, 4, 1, 1]
const output1 = except(numbers2, [1, 2, 3, 4])

console.log(output1)

//87.20

const numbers3 = [1, 2, 3, 4]

function move(array, index, offset){
    const position = index = offset
    if (position >= array.length || position < 0){
        console.error('Invalid offset')
        return
    }
    const output2 = [...array]
    const element = output2.splice(index, 1) [0]
    output2.splice(position, 0, element)
    return output2
}

const output2 = move(numbers, 1, -1)
console.log(output2)

//88.21

const numbers4 = [1, 2, 3, 4, 1]

const count = countOccurrences(numbers4, 1)

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrences = (current === searchElement)
        console.log(accumulator, current, searchElement)
        return accumulator + occurrences
    }, 0)
}
console.log(count)

//89.22

const numbers5 = [1, 2, 3, 4]

const max = getMax([1, 2, 2, 1, 3])

function getMax(array){
    if (array.length === 0) return undefined
    return array.reduce((a, b) => (a > b) ? a : b)
}
console.log(max)

//90.23

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
]
const titles = movies
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(titles)

//102.12

function sum1(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]]
    return items.reduce((a, b) => a + b)

}
console.log(sum1(1, 2, 3, 4))

//103.13

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius
    }
}
console.log(circle.area)

//104.14

function count3Occurrences(array, searchElement) {
    if (!Array.isArray(array)) 
        throw new Error('Invalid array')

    let count3 = 0
    for (let element of array)
        if (element === searchElement)
            count3++
    return count3
}

try {
    const numbers6 = [1, 2, 3, 4, 1, 1]
    const count3 = countOccurrences(numbers6, 1)
    console.log(count3) 
} catch (e) {
    console.log(e.message)
}