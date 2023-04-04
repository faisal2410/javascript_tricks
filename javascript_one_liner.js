// Reverse a string:

// const reversed = str => [...str].reverse().join('');


// Check if a number is even:

// const isEven = num => num % 2 === 0;

// Generate a random integer between min and max(inclusive):

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Find the largest number in an array:

// const max = arr => Math.max(...arr);

// Find the smallest number in an array:

// const min = arr => Math.min(...arr);

// Sum all elements in an array:

// const sum = arr => arr.reduce((a, b) => a + b, 0);

// Check if all elements in an array are unique:

// const isUnique = arr => new Set(arr).size === arr.length;

// Check if an array contains a specific value:

// const contains = (arr, value) => arr.includes(value);

// Remove duplicates from an array:

// const unique = arr => [...new Set(arr)];

// Count occurrences of a value in an array:

// const count = (arr, value) => arr.filter(v => v === value).length;

// Flatten a nested array(one level):

// const flatten = arr => [].concat(...arr);

// Capitalize the first letter of a string:

// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// Convert a string to title case:

// const titleCase = str => str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());

// Check if a string is a palindrome:

// const isPalindrome = str => str === str.split('').reverse().join('');

// Replace all occurrences of a string:

// const replaceAll = (str, find, replace) => str.split(find).join(replace);

// Round a number to a specified number of decimal places:

// const round = (num, decimals) => Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);

// Convert a string to a number:

// const toNumber = str => +str;
// Convert an object to a query string:


// const toQueryString = obj => Object.entries(obj).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');

// Convert a query string to an object:

// const fromQueryString = str => Object.fromEntries(new URLSearchParams(str));

// Debounce a function:

// const debounce = (fn, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn.apply(this, args), delay); }; };



// Throttle a function:

// const throttle = (fn, delay) => { let lastCall = 0; return (...args) => { const now = new Date().getTime(); if (now - lastCall >= delay) { lastCall = now; return fn.apply(this, args); } }; };

// Check if a string starts with a specific substring:

// const startsWith = (str, prefix) => str.startsWith(prefix);

// Check if a string ends with a specific substring:

// const endsWith = (str, suffix) => str.endsWith(suffix);

// Shuffle an array(Fisher - Yates algorithm):

// const shuffle = arr => { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };

// Get the current URL without query parameters:

// const currentUrlWithoutParams = () => window.location.origin + window.location.pathname;

// Scroll to the top of the page:

// const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Get the difference between two arrays:

// const difference = (a, b) => a.filter(x => !b.includes(x));

// Get the intersection of two arrays:

// const intersection = (a, b) => a.filter(x => b.includes(x));

// Get the union of two arrays:

// const union = (a, b) => [...new Set([...a, ...b])];

// Create an array with a range of numbers:

// const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);


// Get the average of an array of numbers:

// const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

// Get the factorial of a number:

// const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

// Check if a number is prime:

// const isPrime = num => { if (num <= 1) return false; for (let i = 2; i * i <= num; i++) if (num % i === 0) return false; return true; };

// Truncate a string to a specific length and add an ellipsis if necessary:

// const truncate = (str, len) => str.length > len ? str.slice(0, len - 1) + '…' : str;

// Convert a string to camel case:

// const toCamelCase = str => str.replace(/([-_]\w)/g, g => g[1].toUpperCase());

// Get the keys of an object as an array:

// const keys = obj => Object.keys(obj);
// Get the values of an object as an array:


// const values = obj => Object.values(obj);

// Get the entries of an object as an array of key - value pairs:

// const entries = obj => Object.entries(obj);

// Deep clone an object:

// const deepClone = obj => JSON.parse(JSON.stringify(obj));

// Check if a value is an object:

// const isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);



// Generate a random hexadecimal color code:

// const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

// Check if a number is an integer:

// const isInteger = num => Number.isInteger(num);

// Check if a value is a float:

// const isFloat = num => Number(num) === num && num % 1 !== 0;

// Get the first n elements of an array:

// const firstN = (arr, n) => arr.slice(0, n);

// Get the last n elements of an array:

// const lastN = (arr, n) => arr.slice(-n);

// Remove the first n elements from an array:

// const removeFirstN = (arr, n) => arr.slice(n);

// Remove the last n elements from an array:

// const removeLastN = (arr, n) => arr.slice(0, -n);

// Sleep for a specific duration(in milliseconds) using async / await:

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Get the distance between two points in 2D space:

// const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Get the angle(in radians) between two points in 2D space:

// const angle = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1);



// Get the current timestamp in milliseconds:

// const timestamp = () => Date.now();
// Get the current date as a formatted string(YYYY - MM - DD):

// const currentDate = () => new Date().toISOString().slice(0, 10);

// Check if a given year is a leap year:

// const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Convert a number to a string with leading zeros:

// const padNumber = (num, size) => String(num).padStart(size, '0');

// Convert a string to snake_case:

// const toSnakeCase = str => str.replace(/[A-Z]/g, s => '_' + s.toLowerCase());

// Check if a value is an array:

// const isArray = val => Array.isArray(val);

// Check if a value is a function:

// const isFunction = val => typeof val === 'function';

// Get a random item from an array:

// const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Sort an array of objects by a specific property:

// const sortBy = (arr, prop) => arr.sort((a, b) => a[prop] > b[prop] ? 1 : -1);

// Limit a number to a specific range(min and max):

// const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// Convert a string to kebab -case:

// const toKebabCase = str => str.replace(/[A-Z]/g, s => '-' + s.toLowerCase());

// Check if an object is empty:

// const isEmptyObject = obj => Object.keys(obj).length === 0;

// Merge two objects(shallow):

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Get a random boolean value(true or false):

// const randomBool = () => Math.random() >= 0.5;

// Remove falsy values from an array:

// const removeFalsy = arr => arr.filter(Boolean);

// Get the nth Fibonacci number:

// const fibonacci = n => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

// Encode a string as base64:

// const toBase64 = str => btoa(str);

// Decode a base64 - encoded string:


// const fromBase64 = str => atob(str);

// Escape a string for use in a regular expression:

// const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Remove a specified number of characters from the left of a string:

// const removeLeft = (str, n) => str.slice(n);


// Get the current scroll position:

// const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

// Test if a given string matches a regular expression pattern:

// const testRegExp = (str, pattern) => pattern.test(str);

// Return a function that always returns a specific value:

// const constant = val => () => val;

// Check if an element is visible in the viewport:

// const isInViewport = el => { const rect = el.getBoundingClientRect(); return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth); };

// Get the browser's default language:

// const browserLanguage = () => navigator.language || navigator.userLanguage;

// Check if a value is a plain object(not an array, function, or any other complex type):

// const isPlainObject = val => Object.prototype.toString.call(val) === '[object Object]';

// Convert a NodeList to an array:

// const nodeListToArray = nodeList => Array.from(nodeList);

// Execute a function after a given delay(in milliseconds):

// const delay = (fn, ms, ...args) => setTimeout(() => fn(...args), ms);

// Create an element with attributes and children:

// const createElement = (tag, attrs, ...children) => { const el = document.createElement(tag); Object.entries(attrs || {}).forEach(([k, v]) => el.setAttribute(k, v)); children.forEach(child => el.appendChild(child)); return el; };

// Get the scroll height of an element:

// const scrollHeight = el => el.scrollHeight;

// Toggle a CSS class on an element:

// const toggleClass = (el, className) => el.classList.toggle(className);

// Check if an element has a specific CSS class:

// const hasClass = (el, className) => el.classList.contains(className);

// Add an event listener with a specific handler function to an element:

// const addListener = (el, event, handler) => el.addEventListener(event, handler);

// Remove an event listener with a specific handler function from an element:

// const removeListener = (el, event, handler) => el.removeEventListener(event, handler);

// Create a debounce function to limit the rate at which a function can be called:

// const debounce = (fn, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn.apply(this, args), delay); }; };

// Get the time in seconds since the Unix epoch:

// const unixTime = () => Math.floor(Date.now() / 1000);

// Convert an array of objects to an object with keys based on a specific property:

// const arrayToObject = (arr, key) => arr.reduce((obj, item) => (obj[item[key]] = item, obj), {});

// Get the maximum value from an array of numbers:

// const max = arr => Math.max(...arr);

// Get the minimum value from an array of numbers:

// const min = arr => Math.min(...arr);

// Get a random number between two values(inclusive):

// const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


// Calculate the sum of an array of numbers:

// const sum = arr => arr.reduce((a, b) => a + b, 0);

// Get the unique elements from an array:

// const unique = arr => [...new Set(arr)];

// Get the query parameters from a URL as an object:

// const queryParams = url => Object.fromEntries(new URL(url).searchParams.entries());

// Create a new URL by adding or updating query parameters:

// const updateUrl = (url, params) => { const u = new URL(url); Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v)); return u.toString(); };

// Convert a flat array to a 2D array with specified column count:

// const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

// Get a random float between two values(inclusive for min, exclusive for max):

// const randomFloatBetween = (min, max) => Math.random() * (max - min) + min;

// Format a number as a string with a specific number of decimal places:

// const formatDecimal = (num, places) => num.toFixed(places);

// Capitalize the first letter of each word in a string:

// const capitalizeWords = str => str.replace(/\b\w/g, c => c.toUpperCase());

// Check if a string contains a specific substring:

// const contains = (str, substring) => str.includes(substring);

// Replace all occurrences of a string within another string:

// const replaceAll = (str, find, replace) => str.split(find).join(replace);

// These one - liners cover a variety of tasks and can be used as building blocks in your JavaScript projects.They demonstrate techniques for manipulating strings, arrays, numbers, and URLs.

// Convert a string to title case:

// const toTitleCase = str => str.replace(/\b\w+/g, s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase());

// Get the current URL without query parameters:

// const baseUrl = () => window.location.href.split('?')[0];

// Check if a given number is even:

// const isEven = num => num % 2 === 0;

// Check if a given number is odd:

// const isOdd = num => num % 2 !== 0;

// Count the number of occurrences of a specific value in an array:


// const countOccurrences = (arr, val) => arr.reduce((count, el) => el === val ? count + 1 : count, 0);

// Check if a value is a string:

// const isString = val => typeof val === 'string';

// Get the intersection of two arrays:

// const intersect = (arr1, arr2) => arr1.filter(value => arr2.includes(value));

// Get the difference between two arrays:

// const difference = (arr1, arr2) => arr1.filter(value => !arr2.includes(value));

// Flatten a nested array(one level deep):

// const flatten = arr => [].concat(...arr);

// Generate a random alphanumeric string of a specific length:

// const randomString = len => [...Array(len)].map(() => (Math.random() * 36 | 0).toString(36)).join('');





















