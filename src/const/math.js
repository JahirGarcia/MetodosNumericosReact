export const constants = [
  { func: 'e', label: '\u0065' }, 
  { func: 'pi', label: '\u03C0' } 
];

const elementary = [
  { func: '+', label: '+' }, 
  { func: '-', label: '-' }, 
  { func: '*', label: '\u00D7' }, 
  { func: '/', label: '\u00F7' } 
];

const logarithms = [
  { func: 'sqrt(_)', label: '\u221A' }, 
  { func: 'log10(_)', label: () => (<span>log<sub>10</sub></span>) }, 
  { func: 'log(_,_)', label: () => (<span>log<sub>a</sub>b</span>) }, 
  { func: 'log(_)', label: 'ln' } 
];

const exponential = [
  { func: 'pow(_,_)', label: () => (<span>x<sup>y</sup></span>) }, 
  { func: 'pow(10,_)', label: () => (<span>10<sup>x</sup></span>) }, 
  { func: 'exp(_)', label: () => (<span>{ '\u0065' }<sup>x</sup></span>) }, 
];

const trigonometric = [
  { func: 'sin(_)', label: 'sin' }, 
  { func: 'cos(_)', label: 'cos' }, 
  { func: 'tan(_)', label: 'tan' }, 
];

const inverseTrigonometric = [
  { func: 'asin(_)', label: () => (<span>sin<sup>-1</sup></span>) }, 
  { func: 'acos(_)', label: () => (<span>cos<sup>-1</sup></span>) }, 
  { func: 'atan(_)', label: () => (<span>tan<sup>-1</sup></span>) }, 
];

const hyperbolicTrigonometric = [
  { func: 'sinh(_)', label: 'sinh' }, 
  { func: 'cosh(_)', label: 'cosh' }, 
  { func: 'tanh(_)', label: 'tanh' }, 
];

const inverseHyperbolicTrigonometric = [
  { func: 'asinh(_)', label: () => (<span>sinh<sup>-1</sup></span>) }, 
  { func: 'acosh(_)', label: () => (<span>cosh<sup>-1</sup></span>) }, 
  { func: 'atanh(_)', label: () => (<span>tanh<sup>-1</sup></span>) }, 
];

export const functions = [
  elementary, 
  logarithms, 
  exponential, 
  trigonometric, 
  inverseTrigonometric, 
  hyperbolicTrigonometric, 
  inverseHyperbolicTrigonometric 
];
