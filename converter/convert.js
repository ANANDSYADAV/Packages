/* This JavaScript code snippet is a module that exports a function called `convert`. The function
takes four parameters: `aspect`, `fromUnit`, `toUnit`, and `value`. */
const { len, mass, time, area, data, speed, volume, temp } = require('./resources');

module.exports = function convert(aspect, fromUnit, toUnit, value) {
    let aspectResource = [];

    if(aspect === 'length') aspectResource = len;
    else if(aspect === 'mass') aspectResource = mass;
    else if(aspect === 'time') aspectResource = time;
    else if(aspect === 'area') aspectResource = area;
    else if(aspect === 'data') aspectResource = data;
    else if(aspect === 'speed') aspectResource = speed;
    else if(aspect === 'volume') aspectResource = volume;
    else if(aspect === 'temp') aspectResource = temp;

    let fromValue = null, toValue = null;
    let index = 0;
    while ((fromValue == null || toValue == null) && index < aspectResource.length) {
        if (aspectResource[index].abbreviation === fromUnit) {
            fromValue = aspectResource[index].valueInSI;
        }
        if (aspectResource[index].abbreviation === toUnit) {
            toValue = aspectResource[index].valueInSI;
        }
        index++;
    }

    if (fromValue == null || toValue == null) {
        console.log('Please provide valid units');
    }

    let result = (fromValue / toValue) * value;

    return result;
}