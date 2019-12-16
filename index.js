const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection;
      if (Array.isArray(collection)) {
        newCollection = collection.slice();
      } else {
        newCollection = Object.values(collection);
      };

      newCollection.forEach(element => {
        callback(element);
      });

      return collection;
    },

    map: function(collection, callback) {
      let mappedCollection = [];
      if (Array.isArray(collection)) {
        collection.forEach(element => {
          mappedCollection.push(callback(element));
        })
      } else {
        let values = Object.values(collection);
        let keys = Object.keys(collection);

        for (let i=0; i<values.length; i++) {
          mappedCollection.push(callback(values[i], keys[i]));
        }
      }
      return mappedCollection
    },

    reduce: function(collection, callback, acc) {
      let reducedValue, i;
      reducedValue = acc;
      if (acc === undefined) {
        reducedValue = collection[0];
        i = 1;
      } else {
        reducedValue = acc;
        i = 0;
      };

      for (i; i<collection.length;i++) {
        reducedValue = callback(reducedValue, collection[i], collection)
      };
      return reducedValue
    },

    // currently working on this.
    find: function(collection, callback) {
      let returnValue = false;
      let j=0;

      while (returnValue === false && j < collection.length) {
        returnValue = !!(callback(collection[j]));
        j++;
      }

      if (returnValue === false) {
        return undefined;
      } else {
        return collection[j - 1]
      }
    },

    filter: function(collection, callback) {
      let returnArray = [];
      collection.forEach(element => {
        if (!!(callback(element))) {
          returnArray.push(element);
        };
      });
      return returnArray;
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        let keys = Object.keys(collection).length;
        return keys;
      }
    },
    first: function(collection, number) {
      let newArray = [];
      let parsedNumber;
      let i = 0;

      if (number === undefined) {
        return collection[0]
      } else {
        parsedNumber = parseInt(number, 10);
      };
      while (i < parsedNumber) {
        newArray.push(collection[i]);
        i++
      };
      return newArray
    },

    last: function(collection, number) {
      let newArray = [];
      let parsedNumber;
      let i = 1;

      if (number === undefined) {
        return collection[collection.length - 1];
      } else {
        parsedNumber = parseInt(number, 10);
      };

      while (i <= parsedNumber) {
        newArray.unshift(collection[collection.length - i])
        i++
      };
      return newArray;
    },

    compact: function(collection) {
      let newArray = [];
      collection.forEach(element => {
        if (!!(element)) {
          newArray.push(element)
        };
      });
      return newArray;
    },

    sortBy: function(collection, callback) {

    },

    flatten: function() {},
    uniq: function() {},

    keys: function(object) {
      let newArray = Object.keys(object);
      return newArray;
    },

    values: function(object) {
      let newArray = Object.values(object);
      return newArray;
    },
    
    functions: function() {}
  }
})()

fi.libraryMethod()
