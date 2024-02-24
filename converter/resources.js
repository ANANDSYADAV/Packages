const len = [
    {
        unit: 'millimeter',
        abbreviation: 'mm',
        valueInSI: 0.001
    },
    {
        unit: 'centimeter',
        abbreviation: 'cm',
        valueInSI: 0.01
    },
    {
        unit: 'decimeter',
        abbreviation: 'dm',
        valueInSI: 0.1
    },
    {
        unit: 'meter',
        abbreviation: 'm',
        valueInSI: 1
    },
    {
        unit: 'decameter',
        abbreviation: 'dam',
        valueInSI: 10
    },
    {
        unit: 'hectometer',
        abbreviation: 'hm',
        valueInSI: 100
    },
    {
        unit: 'kilometer',
        abbreviation: 'km',
        valueInSI: 1000
    },
    {
        unit: 'inch',
        abbreviation: 'in',
        valueInSI: 0.0254
    },
    {
        unit: 'foot',
        abbreviation: 'ft',
        valueInSI: 0.3048
    },
    {
        unit: 'mile',
        abbreviation: 'mi',
        valueInSI: 1609.344
    },
    {
        unit: 'yard',
        abbreviation: 'yd',
        valueInSI: 0.9144
    },
    {
        unit: 'light year',
        abbreviation: 'ly',
        valueInSI: 9.46073047e15
    }
];

const mass = [
    {
        unit: 'milligram',
        abbreviation: 'mg',
        valueInSI: 0.001
    },
    {
        unit: 'centigram',
        abbreviation: 'cg',
        valueInSI: 0.01
    },
    {
        unit: 'decigram',
        abbreviation: 'dg',
        valueInSI: 0.1
    },
    {
        unit: 'gram',
        abbreviation: 'g',
        valueInSI: 1
    },
    {
        unit: 'decagram',
        abbreviation: 'dag',
        valueInSI: 10
    },
    {
        unit: 'hectogram',
        abbreviation: 'hg',
        valueInSI: 100
    },
    {
        unit: 'kilogram',
        abbreviation: 'kg',
        valueInSI: 1000
    },
    {
        unit: 'metric ton',
        abbreviation: 'mt',
        valueInSI: 1000000
    },
    {
        unit: 'quintal',
        abbreviation: 'q',
        valueInSI: 100000
    },
    {
        unit: 'pound',
        abbreviation: 'lb',
        valueInSI: 453.59237
    },
    {
        unit: 'ounce',
        abbreviation: 'oz',
        valueInSI: 28.3495231
    }
];

const time = [
    {
        unit: 'second',
        abbreviation: 'sec',
        valueInSI: 1
    },
    {
        unit: 'minute',
        abbreviation: 'min',
        valueInSI: 60
    },
    {
        unit: 'hour',
        abbreviation: 'h',
        valueInSI: 3600
    },
    {
        unit: 'day',
        abbreviation: 'day',
        valueInSI: 86400
    },
    {
        unit: 'week',
        abbreviation: 'week',
        valueInSI: 604800
    },
    {
        unit: 'year',
        abbreviation: 'year',
        valueInSI: 31536000
    },
    {
        unit: 'milliseconds',
        abbreviation: 'ms',
        valueInSI: 0.001
    }
];

const area = [
    {
        unit: 'square kilometer',
        abbreviation: 'km2',
        valueInSI: 1000000
    },
    {
        unit: 'hectare',
        abbreviation: 'ha',
        valueInSI: 10000
    },
    {
        unit: 'square meter',
        abbreviation: 'm2',
        valueInSI: 1
    },
    {
        unit: 'square decimeter',
        abbreviation: 'dm2',
        valueInSI: 0.01
    },
    {
        unit: 'square centimeter',
        abbreviation: 'cm2',
        valueInSI: 0.0001
    },
    {
        unit: 'square millimeter',
        abbreviation: 'mm2',
        valueInSI: 0.000001
    },
    {
        unit: 'acre',
        abbreviation: 'ac',
        valueInSI: 4046.856
    },
    {
        unit: 'square mile',
        abbreviation: 'mile2',
        valueInSI: 2589988.11
    },
    {
        unit: 'square yard',
        abbreviation: 'ac',
        valueInSI: 0.83612736
    },
    {
        unit: 'square foot',
        abbreviation: 'ft2',
        valueInSI: 0.09290304
    },
    {
        unit: 'square inch',
        abbreviation: 'in2',
        valueInSI: 0.00064516
    }
]; 

module.exports = { len, mass, time, area };