const {len, mass} = require('./resources');

module.exports = function convertlen(fromUnit, toUnit, value) {
    let fromValue = null, toValue = null;
    let index = 0;
    while ((fromValue == null || toValue == null) && index < len.length) {
        if (len[index].abbreviation === fromUnit) {
            fromValue = len[index].valueInSI;
        }
        if (len[index].abbreviation === toUnit) {
            toValue = len[index].valueInSI;
        }
        index++;
    }

    if (fromValue == null || toValue == null) {
        console.log('Please provide valid units');
    }

    let result = (fromValue / toValue) * value;

    console.log(result);
}

module.exports = function convertmass(fromUnit, toUnit, value) {
    let fromValue = null, toValue = null;
    let index = 0;
    while ((fromValue == null || toValue == null) && index < mass.length) {
        if (mass[index].abbreviation === fromUnit) {
            fromValue = mass[index].valueInSI;
        }
        if (mass[index].abbreviation === toUnit) {
            toValue = mass[index].valueInSI;
        }
        index++;
    }

    if (fromValue == null || toValue == null) {
        console.log('Please provide valid units');
    }

    let result = (fromValue / toValue) * value;

    console.log(result);
}