<h1 style='text-align:center;color:blue;'>convert-calc</h1>
<p>
  A Standard Converter to convert values from one unit of measurement to another.
  This package gives accurate results tailored to your specific needs.
  It can reduce your effort of manually remembering and writing formula or conversion factor to convert values among different units.
</p>

<h1>Table of Contents</h1>
<ul>
  <li>Install</li>
  <li>Usage</li>
  <li>Maintainer</li>
  <li>Contributing</li>
  <li>License</li>
</ul>

<h1>Install</h1>
This generator requires node and npm.

You can install it globally by running:
<pre>npm install -g convert-calc</pre>

You can install it locally by running:
<pre>npm install convert-calc</pre>

<h1>Usage</h1>
First of all import or require the package after installation.

Imported <b>'convert'</b> function from the package.

<h2>Length Converter</h2>
<pre>convert('length', fromUnit, toUnit, value)</pre>

<h2>Mass Converter</h2>
<pre>convert('mass', fromUnit, toUnit, value)</pre>

<h2>Time Converter</h2>
<pre>convert('time', fromUnit, toUnit, value)</pre>

<h2>Area Converter</h2>
<pre>convert('area', fromUnit, toUnit, value)</pre>

<h2>Data Converter</h2>
<pre>convert('data', fromUnit, toUnit, value)</pre>

<h2>Speed Converter</h2>
<pre>convert('speed', fromUnit, toUnit, value)</pre>

<h2>Volume Converter</h2>
<pre>convert('volume', fromUnit, toUnit, value)</pre>

<h2>Temperatur Converter</h2>
<pre>convert('temp', fromUnit, toUnit, value)</pre>

<h2>Using BMI Calculator</h2>
  Import <b>'calculateBMI'</b> function from the package.
<pre>calculateBMI(height, heigthUnit, weight, weightUnit)</pre>

<h2>Values to be placed at units</h2>

You have to place abbreviation of units in place of <b>fromUnit</b>, <b>toUnit</b>, <b>heigthUnit</b>, <b>weightUnit</b>.
<pre>
Length = [
    { unit: 'millimeter', abbreviation: 'mm' },
    { unit: 'centimeter', abbreviation: 'cm' },
    { unit: 'decimeter', abbreviation: 'dm' },
    { unit: 'meter', abbreviation: 'm' },
    { unit: 'decameter', abbreviation: 'dam' },
    { unit: 'hectometer', abbreviation: 'hm' },
    { unit: 'kilometer', abbreviation: 'km' },
    { unit: 'inch', abbreviation: 'in' },
    { unit: 'foot', abbreviation: 'ft' },
    { unit: 'mile', abbreviation: 'mi' },
    { unit: 'yard', abbreviation: 'yd' },
    { unit: 'light year', abbreviation: 'ly' }
];
Mass = [
    { unit: 'milligram', abbreviation: 'mg' },
    { unit: 'centigram', abbreviation: 'cg' },
    { unit: 'decigram', abbreviation: 'dg' },
    { unit: 'gram', abbreviation: 'g' },
    { unit: 'decagram', abbreviation: 'dag' },
    { unit: 'hectogram', abbreviation: 'hg' },
    { unit: 'kilogram', abbreviation: 'kg' },
    { unit: 'metric ton', abbreviation: 'mt' },
    { unit: 'quintal', abbreviation: 'q' },
    { unit: 'pound', abbreviation: 'lb' },
    { unit: 'ounce', abbreviation: 'oz' }
];
Time = [
    { unit: 'second', abbreviation: 'sec' },
    { unit: 'minute', abbreviation: 'min' },
    { unit: 'hour', abbreviation: 'h' },
    { unit: 'day', abbreviation: 'day' },
    { unit: 'week', abbreviation: 'week' },
    { unit: 'year', abbreviation: 'year' },
    { unit: 'milliseconds', abbreviation: 'ms' }
];
Area = [
    { unit: 'square kilometer', abbreviation: 'km2' },
    { unit: 'hectare', abbreviation: 'ha' },
    { unit: 'square meter', abbreviation: 'm2' },
    { unit: 'square decimeter', abbreviation: 'dm2' },
    { unit: 'square centimeter', abbreviation: 'cm2' },
    { unit: 'square millimeter', abbreviation: 'mm2' },
    { unit: 'acre', abbreviation: 'ac' },
    { unit: 'square mile', abbreviation: 'mile2' },
    { unit: 'square yard', abbreviation: 'ac' },
    { unit: 'square foot', abbreviation: 'ft2' },
    { unit: 'square inch', abbreviation: 'in2' }
];
Data = [
    { unit: 'byte', abbreviation: 'B' },
    { unit: 'kilobyte', abbreviation: 'KB' },
    { unit: 'megabyte', abbreviation: 'MB' },
    { unit: 'gigabyte', abbreviation: 'GB' },
    { unit: 'terabyte', abbreviation: 'TB' },
    { unit: 'petabyte', abbreviation: 'PB' }
];
Speed = [
    { unit: 'lightspeed', abbreviation: 'c' },
    { unit: 'mach', abbreviation: 'ma' },
    { unit: 'meter/sec', abbreviation: 'm/s' },
    { unit: 'kilometer/hour', abbreviation: 'km/h' },
    { unit: 'kilometer/sec', abbreviation: 'km/s' },
    { unit: 'knot', abbreviation: 'kn' },
    { unit: 'mile/hour', abbreviation: 'mph' },
    { unit: 'foot/sec', abbreviation: 'fps' },
    { unit: 'inch/sec', abbreviation: 'ips' },
];
volume = [
    { unit: 'cubic meter', abbreviation: 'm3' },
    { unit: 'cubic decimeter', abbreviation: 'dm3' },
    { unit: 'cubic centimeter', abbreviation: 'cm3' },
    { unit: 'cubic millimeter', abbreviation: 'mm3' },
    { unit: 'hectoliter', abbreviation: 'hl' },
    { unit: 'liter', abbreviation: 'l' },
    { unit: 'deciliter', abbreviation: 'dl' },
    { unit: 'centiliter', abbreviation: 'cl' },
    { unit: 'milliliter', abbreviation: 'ml' },
    { unit: 'cubic foot', abbreviation: 'ft3' },
    { unit: 'cubic inch', abbreviation: 'in3' },
    { unit: 'cubic yard', abbreviation: 'yd3' },
    { unit: 'acre-foot', abbreviation: 'af3' }
];
Temp = [
    { unit: 'celsius', abbreviation: 'C' },
    { unit: 'fahrenheit', abbreviation: 'F' },
    { unit: 'kelvin', abbreviation: 'K' },
    { unit: 'rankin', abbreviation: 'R' }
];
</pre>
  
<h1>Maintainer</h1>
<pre>
npm: <a href='https://www.npmjs.com/~anandsyadav' traget='_blank'
  style='color:red;'>@anandsyadav</a>
Linkedin: <a href='https://www.linkedin.com/in/anand-yadav-08b7b2230/' traget='_blank'
  style='color:red;'>ANAND YADAV</a>
GitHub: <a href='https://github.com/ANANDSYADAV' traget='_blank'
  style='color:red;'>ANANDSYADAV</a>

</pre>

<h1>Contributing</h1>
Feel free to contribute and fix bugs 🙂

<h1>License</h1>
⚖️ Apache-2.0 license






