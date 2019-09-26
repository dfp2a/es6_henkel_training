// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

var numeral = require('numeral');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');



const randomnumbers = []

for(let i =0; i<10;i++){
    randomnumbers.push(Math.random()* 100000)
}


const plants = [
    {
        plant_name: "Bogota",
        plant_size: 30,
        plant_country: "Brazil",
        plant_region: "LA"
    },
    {
        plant_name: "Wassertrudingen",
        plant_size: 20,
        plant_country: "Germany",
        plant_region: "WE"
    },
    {
        plant_name: "Paris",
        plant_size: 40,
        plant_country: "France",
        plant_region: "WE"
    }
]



//const sortedplants = _.sortBy(plants,  v=> v.plant_size)
const sortedplants = _.sortBy(plants,  v=> v.plant_size).reverse()
//console.log(sortedplants)
console.log("Plants")

const WEplants = _.filter(plants, {'plant_region': 'WE'})
var WEplants_size = 0
_.forEach(WEplants, v => {WEplants_size += v.plant_size})

console.log(WEplants_size)
//plant name ausgeben

const names = _.map(plants, v => v.plant_name)
const sortedplantnames = _.sortBy(names, v => (v))


const sortedvalues = _.sortBy(randomnumbers, v => (v))

const formatedsortedvalues =_.map(sortedvalues, v => numeral(v).format('0,000.00')+ "€")


console.log("List of numbers");
_.forEach(formatedsortedvalues, v => {
    {console.log(v)}
})
