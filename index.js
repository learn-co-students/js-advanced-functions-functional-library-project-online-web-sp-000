const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let element of Object.values(collection)) {
        callback(element)
      }
      return collection;
    },

    map: function(collection, callback) {
      let a = []
      for (let element of Object.values(collection)) {
        a.push(callback(element));
      }
      return a
    },

    reduce: function(collection, callback, acc) {
      let total;
      let count;

      if (!!acc) {
        total = acc;
        count = 0;
      } else {
        total = collection[0];
        count = 1;
      }

      for (let i = count; i < collection.length; i++) {
        total = callback(total, collection[i])
      }
      return total;
    },

    find: function(collection, predicate) {
      for (const element of Object.values(collection)){
        if (predicate(element)) {
          return element;
        }
      }
    },

    filter: function(collection, predicate) {
      let results = [];

      for(const element of Object.values(collection)) {
        if (predicate(element)) {
          results.push(element)
        }
      }
      return results;
    },

    size: function(collection) {
      return Object.values(collection).length
    },

    first: function(array, n) {
      if (!!n) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (!!n) {
        return array.slice(-n)
      } else {
        let num = array.length -1
        return array[num]
      }
    },

    compact: function(array) {
      let newArray = []
      for (let element of Object.values(array)) {
        if (!!element) {
          newArray.push(element)
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      const newArray = [...array];
      return newArray.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow) {
      let newArray = [];

      if (shallow) {
        newArray = newArray.concat(...array)
      } else {
        for (let element of array) {
          if (typeof element === "object") {
            newArray.push(...this.flatten(element, false))
          } else {
            newArray.push(element)
          }
        }
      }
      return newArray
    },

    uniq: function(array, isSorted, callback) {
      if (!callback) {
        return [...new Set(array)]
      } else {
        let a = []
        let answer = [];
        
        for (const element of array) {
          let solution = callback(element)
          if (!a.some(x => x === solution)) {
            a.push(solution)
            answer.push(element)
          }
        }
        return answer;
      }
    },

    keys: function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },

    functions: function(object) {
      let a = [];

      for (let element in object) {
        if (typeof object[element] === 'function') {
          a.push(element)
        }
      }
      return a.sort()
    }


  }
})()

fi.libraryMethod()
