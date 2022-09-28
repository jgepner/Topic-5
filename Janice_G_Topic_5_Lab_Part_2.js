/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.
let position = iss_location.iss_position
let lattitude = position.latitude
console.log('The lattitude is ' + lattitude)
let longitude = iss_location.iss_position.longitude
console.log('The longitude is ' + longitude)

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787
console.log(rates)

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
euros = 100
let AUDrate = rates.AUD
let AUDvalue = euros * AUDrate
message = `The value of ${euros} Euros is ${AUDvalue.toFixed(2)} Australion Dollars`
console.log(message)

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

const keys = Object.keys(rates)  // create an array of keys to loop through
console.log(keys)
let highestKey = keys[0]   // assume first value is the highest value
let highestValue = rates[highestKey]  //get the value for this key
keys.forEach(function(key) {  // loop through the keys
    let value = rates[key]
    if (value >= highestValue) {
        highestValue = value   // save this value if it's higher or equal
        highestKey = key   // key for highest value
    }}
)
console.log('The highest rate is ' + highestKey + ' and the rate is ' + highestValue)

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
// console.log(cats_and_owners["Gary Oldman"])
let garyPair = cats_and_owners[1]    // Save the second pair
let garyCat = garyPair.cat   // retrieve Gary's cat
console.log("Gary Oldman's Cat is " + garyCat)

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})
console.log(cats_and_owners)

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
cats_and_owners.forEach( function (pair, index) {
    let owner = cats_and_owners[index].name   // get each name one at a time
    let cat = cats_and_owners[index].cat     // get cat's name
    console.log(`${owner}'s cat is called ${cat}`)  // print each result
})

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",   //first item to name
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

// TODO print the full name of the Literature Nobel laureate.
let listOfprizes = nobel_prize_winners_2017.prizes  // save prizes as an array
let literaturePrize = listOfprizes[3]  // save the literature prize object (4th prize)
let laureates = literaturePrize.laureates  // get the laureates array
let firstName = laureates[0].firstname  // get the first name from the object in the array
let lastName = laureates[0].surname  // get the surname from the object in the array
console.log('The winner of the Literature Nobel is ' + firstName + ' ' + lastName)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let physicsLaureates = listOfprizes[0].laureates // create an array of Physics Laureates
// console.log(physicsLaureates)
// each object = laureate
console.log('The Physics ids are:')
physicsLaureates.forEach(function(laureate) {  //loop thru physics laureates
    let laureateId = laureate.id   // get the id value
    console.log(laureateId)
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
let numberOfCategories = 0  // define a variable to count the number of prizes
console.log('The prize categories are:')
listOfprizes.forEach(function(prize) { // loop through the array of prizes
    let category = prize.category  // retrieve the category
    console.log(category)
    numberOfCategories++  // count the number of categores
})
console.log('The number of categories are: ' + numberOfCategories)

// TODO write code to count the total number of laureates from 2017.
let numberOfLaureates = 0   // define a variable to count the number of laureates
listOfprizes.forEach(function(laureate) {   // loop through the array of prizes
    let arrayOfLaureates = laureate.laureates  //get an array of the categories
    arrayOfLaureates.forEach(function(laureate) { //loop through each category
        numberOfLaureates++ // total number of laureates
    })
})
console.log('The number of laureates are: ' + numberOfLaureates)
