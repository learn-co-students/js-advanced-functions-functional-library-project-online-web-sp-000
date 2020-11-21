const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let i in collection) {
        callback(collection[i]);
      };
      return collection;
    },

    map: function(collection, callback) {
      const array = [];
      for (let i in collection) {
        array.push(callback(collection[i]));
      };
      return array;
    },

    reduce: function(collection, callback, acc = -2) {
      for (let i in collection) {
        acc = callback(acc, collection[i]);
      };
      return acc;
    },

    find: function(collection, predicate) {
      for (let i in collection) {
        if (predicate(collection[i])) {
          return collection[i];
          break;
        };
      };
    },

    filter: function(collection, predicate) {
      const array = [];
      for (let i in collection) {
        if (predicate(collection[i])) {array.push(collection[i])};
      };
      return array;
    },

    size: function(collection) {
      let count = 0;
      for (let i in collection) {
        count += 1;
      };
      return count;
    },

    first: function(collection, index = 1) {
      let array = [];
      let count = 0;
      while (count < index) {
        array.push(collection[count]);
        count += 1;
      };
      if (array.length === 1) {return array[0]} else {return array};
    },

    last: function(collection, index = 1) {
      index = index * -1;
      let array = [];
      let count = 0;
      while (count > index) {
        count = count - 1;
        array.unshift(collection[collection.length + count]);
      };
      if (array.length === 1) {return array[0]} else {return array};
    },

    compact: function(collection) {
      let array = [];
      for (let i in collection) {
        if (collection[i]) {array.push(collection[i])}
      };
      return array;
    },

    sortBy: function(collection, callback) {
      let array = [];
      for (let i in collection) {
        array.push(collection[i]);
      };
      array.sort(function(a, b) {return callback(a) - callback(b)});
      return array;
    },

    flatten: function(collection, shallow = false) {
      let array = [];
      for (let i in collection) {
        array.push(collection[i])
      };
      if (shallow) {
        return array.flat()
      } else {
        return array.flat(Infinity)
      };
    },

    uniq: function(collection, sorted = false, callback = 0) {

      function findItemInArray(item, array, method) {
        let result = true;
        if (typeof method === "function") {
          for (let item2 of array) {
            if (method(item2) === method(item)) {result = false};
          };
        } else {
          for (let item2 of array) {
            if (item2 === item) {result = false};
          };
        };
        return result;
      };

      let array = [];
      for (let item1 of collection) {
        if (findItemInArray(item1, array, callback)) {array.push(item1)};
      };
      return array;
    },

    keys: function(object) {
      let array = [];
      for (let key in object) {
        array.push(key);
      };
      return array;
    },

    values: function(object) {
      let array = [];
      for (let key in object) {
        array.push(object[key]);
      };
      return array;
    },

    functions: function(object) {
      let array = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          array.push(object[key].name);
        };
      };
      return array;
    }

  }
})()

fi.libraryMethod()
