const convert = require('../converter/convert');

module.exports = function calculateBMI(height, heigthUnit, weight, weightUnit) {
    let result = [];
    let h = convert('length', heigthUnit, 'm', height);
    let w = convert('mass', weightUnit, 'kg', weight);

    let bmi = w / (h * h);
    result.push(bmi);

    if(bmi < 18.5) result.push('Underweight');
    else if(bmi >= 18.5 && bmi <= 25) result.push('Normal');
    else result.push('Overweight');

    return result;
}