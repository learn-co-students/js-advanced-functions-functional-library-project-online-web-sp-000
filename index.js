const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(object, fn) {
      for(const value of Object.values(object)) {
        fn(value);
      };
      return object;
    },

    map: function(object, fn) {
      const newArray = [];
      for(const value of Object.values(object)) {
        newArray.push(fn(value));
      };
      return newArray
    },

    reduce: function(object, fn, accumulator) {
      let i = 0;
      const array = Object.values(object);
      if(!accumulator) {
        accumulator = array[0];
        i = 1;
      };
      for(; i < array.length; i++) {
        accumulator = fn(accumulator, array[i]);
      };
      return accumulator;
    },

    find: (object, fn) => { for(const value of Object.values(object)) { if(fn(value)) { return value } } },

    filter: (object, fn) => {
      const newArray = [];
      for(const value of Object.values(object)) {
        if(fn(value)) { newArray.push(value) };
      };
      return newArray;
    },

    size: object => { return Object.values(object).length },

    first: (array, amount = 1) => { return amount > 1 ? array.slice(0, amount) : array[0] },

    last: (array, amount = 1) => { return amount > 1 ? array.slice(array.length - amount) : array[array.length - 1] },

    compact: array => { return array.filter(value => !!value) },

    sortBy: (array, fn = value => value) => {
      const newArray = [...array];
      newArray.sort((firstEl, secondEl) => { return fn(firstEl) - fn(secondEl) });
      return newArray;
    },

    flatten: (val, surfaceLevel = false, newArray = []) => {
      if(!Array.isArray(val)) { return newArray.push(val) };
      if(surfaceLevel) { return val.flat() } else { for(const element of val) { fi.flatten(element, false, newArray) } }
      return newArray;
    },

    uniq: (array, whatever, fn = value => value ) => {
      const newArray = [];
      for(const value of array) { if(!newArray.find(conflict => fn(value) === fn(conflict) )) { newArray.push(value) } };
      return newArray;
    },

    keys: object => {
      const newArray = [];
      for(const key in object) { newArray.push(key) };
      return newArray;
    },

    values: object => {
      const newArray = [];
      for(const key in object) { newArray.push(object[key]) };
      return newArray;
    },

    functions: object => {
      const keys = object => {
        const validKeys = [];
        for(const key in object) {
          if(typeof object[key] === 'function') { validKeys.push(key) };
        };
        return validKeys;
      };
      return fi.sortBy(keys(object))
    }

  }
})()

fi.libraryMethod()