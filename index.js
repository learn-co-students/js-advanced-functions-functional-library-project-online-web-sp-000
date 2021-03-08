const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);

      }
      return collection;
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection); 
      } 
      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0);

			if (!acc) {
				acc = collection[0];
				collection = collection.slice(1);
			}


			for (let i = 0; i < collection.length; i++) {
				acc = callback(acc, collection[i], collection);
			}
			return acc;
		},

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { return collection[i] }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) { 
          newCollection.push(collection[i]) 
        };
      }
      return newCollection;
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      return collection.length;
    },

    first: function(array, n=null) {
      return (n) ? array.slice(0, n) : array[0];
    },

    last: function(array, n=null) {
      return (n) ? array.slice(-n, array.length) : array[array.length - 1];
    },

    compact: function(array) {
      const falsyValues = new Set([false, null, 0, "", undefined, NaN]);
      return array.filter(element => {
       return !falsyValues.has(element)
      });
    },

    sortBy: function(array, callback) {
      const newArray = [...array];
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    }


  }
})();

fi.libraryMethod();
