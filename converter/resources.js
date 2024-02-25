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
        abbreviation: 'yd2',
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

const data = [
    {
        unit: 'byte',
        abbreviation: 'B',
        valueInSI: 9.53674316e-7
    },
    {
        unit: 'kilobyte',
        abbreviation: 'KB',
        valueInSI: 0.0009765625
    },
    {
        unit: 'megabyte',
        abbreviation: 'MB',
        valueInSI: 1
    },
    {
        unit: 'gigabyte',
        abbreviation: 'GB',
        valueInSI: 1024
    },
    {
        unit: 'terabyte',
        abbreviation: 'TB',
        valueInSI: 1048576
    },
    {
        unit: 'petabyte',
        abbreviation: 'PB',
        valueInSI: 1.07374182e9
    }
]; 

const speed = [
    {
        unit: 'lightspeed',
        abbreviation: 'c',
        valueInSI: 299792458
    },
    {
        unit: 'mach',
        abbreviation: 'ma',
        valueInSI: 340.3
    },
    {
        unit: 'meter/sec',
        abbreviation: 'm/s',
        valueInSI: 1
    },
    {
        unit: 'kilometer/hour',
        abbreviation: 'km/h',
        valueInSI: 0.277777778
    },
    {
        unit: 'kilometer/sec',
        abbreviation: 'km/s',
        valueInSI: 1000
    },
    {
        unit: 'knot',
        abbreviation: 'kn',
        valueInSI: 0.514444444
    },
    {
        unit: 'mile/hour',
        abbreviation: 'mph',
        valueInSI: 0.44704
    },
    {
        unit: 'foot/sec',
        abbreviation: 'fps',
        valueInSI: 0.3048
    },
    {
        unit: 'inch/sec',
        abbreviation: 'ips',
        valueInSI: 0.0254
    }
]; 

const volume = [
    {
        unit: 'cubic meter',
        abbreviation: 'm3',
        valueInSI: 1
    },
    {
        unit: 'cubic decimeter',
        abbreviation: 'dm3',
        valueInSI: 0.001
    },
    {
        unit: 'cubic centimeter',
        abbreviation: 'cm3',
        valueInSI: 11e-6
    },
    {
        unit: 'cubic millimeter',
        abbreviation: 'mm3',
        valueInSI: 1e-9
    },
    {
        unit: 'hectoliter',
        abbreviation: 'hl',
        valueInSI: 0.1
    },
    {
        unit: 'liter',
        abbreviation: 'l',
        valueInSI: 0.001
    },
    {
        unit: 'deciliter',
        abbreviation: 'dl',
        valueInSI: 0.0001
    },
    {
        unit: 'centiliter',
        abbreviation: 'cl',
        valueInSI: 1e-5
    },
    {
        unit: 'milliliter',
        abbreviation: 'ml',
        valueInSI: 1e-6
    },
    {
        unit: 'cubic foot',
        abbreviation: 'ft3',
        valueInSI: 0.0283168466
    },
    {
        unit: 'cubic inch',
        abbreviation: 'in3',
        valueInSI: 1.6387064e-5
    },
    {
        unit: 'cubic yard',
        abbreviation: 'yd3',
        valueInSI: 0.764554858
    },
    {
        unit: 'acre-foot',
        abbreviation: 'af3',
        valueInSI: 1234
    }
];

const temp = [
    {
        unit: 'celsius',
        abbreviation: 'C',
        valueInSI: 274.15
    },
    {
        unit: 'fahrenheit',
        abbreviation: 'F',
        valueInSI: 255.927778
    },
    {
        unit: 'kelvin',
        abbreviation: 'K',
        valueInSI: 1
    },
    {
        unit: 'rankin',
        abbreviation: 'R',
        valueInSI: 0.555555556
    }
];

module.exports = { len, mass, time, area, data, speed, volume, temp };