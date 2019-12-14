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
      console.log(reducedValue)
      return reducedValue
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
