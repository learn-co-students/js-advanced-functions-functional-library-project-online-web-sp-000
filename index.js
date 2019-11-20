const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(iters, func) {
      for (let key in iters) {
        func(iters[key]);
      }
      return iters;
    },

    map: function(iters, func) {
      iters = (Array.isArray(iters) ? [...iters] : [...Object.values(iters)]);
      for (let key in iters ) {
        iters[key] = func(iters[key]);
      }
      return iters;
    },

    reduce: function(iters, func, init= -2) {
      this.each(iters, x => {
        init = func(init, x, iters)
      })
      return init;
    },

    find: function(iters, func) {
      for(let i = 0; i < iters.length; i++) {
        if(func(iters[i])) {
          return iters[i];
        }
      }
      return undefined;
    },
    filter: function(iters, func) {
      const results = [];
      this.each(iters, x => {
        func(x) && results.push(x)
      })
      return results;
    },
    size: function(iters) {
      return (iters.length || Object.keys(iters).length);
    },
    first: function(iters, n) {
      iters = [...iters];
      if(!n) {
        return iters[0];
      }
      const results = [];
      for(let i = 0; i < n; i++) {
        iters.length && results.push(iters.shift());
      }
      return results;
    },
    last: function(iters, n) {
      iters = [...iters];
      if(!n) {
        return iters.pop()
      }
      let results = [];
      for(let i = 0; i < n; i ++) {
        iters.length && results.unshift(iters.pop());
      }
      return results;
    },
    compact: function(iters) {
      return this.filter(iters, x => x);
    },
    sortBy: function(iters, func) {
      return [...iters].sort((a,b) => func(a) - func(b));
    },
    flatten: function(iters, shal) {
      return iters.reduce((results, x, i) => (Array.isArray(x) ? results.push(...(shal ? x : this.flatten(x))) : results.push(x)) && results, []);
    },
    uniq: function(iters, isSorted, func = x => x) {
      return iters.reduce((results, x) => (results.map(func).includes(func(x)) || results.push(x)) && results, []);
    },
    keys: function(object) {
      return Object.keys(object);
    },
    values: function(object) {
      return Object.values(object);
    },
    functions: function(object) {
      return Object.getOwnPropertyNames(object).filter(x => typeof object[x] == "function").sort();
    }

  }
})()

fi.libraryMethod()