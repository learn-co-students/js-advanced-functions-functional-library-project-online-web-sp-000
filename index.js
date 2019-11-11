const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0';
    },

    each: function(collection, callback) {
      let entries = Object.values(collection);

      for (let i = 0; i < entries.length; i++) {
        callback(entries[i], entries, i);
      }

      return collection;
    },

    map: function(collection, callback) {
      let entries = Object.values(collection);
      let newEntries = [];

      for (let i = 0; i < entries.length; i++) {
        newEntries = [...newEntries, callback( entries[i], entries, i )];
      }

      return newEntries;
    },

    reduce: function(collection, callback, memo) {
      let entries = Object.values(collection);
      let newMemo = memo;

      for (let entry of entries) {
        if (newMemo == undefined) {
          newMemo = entry;
        } else {
          newMemo = callback(newMemo, entry, entries);
        }
      }

      return newMemo;
    },

    find: function(collection, query) {
      let entries = Object.values(collection);

      for (let entry of entries) {
        if (query(entry)) {
          return entry;
        }
      }
    },

    filter: function(collection, query) {
      let entries = Object.values(collection);
      let newEntries = [];

      for (let entry of entries) {
        if (query(entry)) {
          newEntries = [...newEntries, entry];
        }
      }

      return newEntries;
    },

    size: function(collection) {
      return fi.reduce(collection, (memo, entry, entries) => memo + 1, 0);
    },

    first: function(collection, number = 1) {
      const entries = Object.values(collection);
      let newEntries = [entries[0]];

      for (let i = 1; i < number; i++) {
        newEntries = [...newEntries, entries[i]];
      }

      if (newEntries.length === 1) {
        [newEntries] = newEntries;
      }

      return newEntries;
    },

    last: function(collection, number = 1) {
      const entries = Object.values(collection);
      const size = entries.length;
      let newEntries = [];

      for (let i = size - number; i < size; i++) {
        newEntries = [...newEntries, entries[i]];
      }

      if (newEntries.length === 1) {
        [newEntries] = newEntries;
      }

      return newEntries;
    },

    compact: function(collection) {
      return fi.filter(collection, (entry) => entry);
    },

    sortBy: function(collection, callback) {
      let entries = Object.values(collection);
      return entries.sort((a,b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow = false) {
      let hasArray = (array) =>
        fi.find(array, (x) => Array.isArray(x));

      let flattenOne = (memo, entry, entries) => {
        if (Array.isArray(entry)) {
          memo = [...memo, ...entry];

          if (!shallow && hasArray(memo)) {
            memo = fi.flatten(memo);
          }
        } else {
          memo = [...memo, entry];
        }

        return memo;
      }

      return fi.reduce(array, flattenOne, []);

    },

    uniq: function(array, isSorted, callback = x => x) {
      let theRest =
        (collection, query) =>
          fi.filter(collection, (entry) => callback(query) !== callback(entry));

      let traverse =
        (collection) => {
          let memo;
          let remainder = theRest(collection, collection[0]);

          if (collection.length > 1 && remainder.length > 0) {
              memo = [collection[0], ...traverse(remainder)];
          } else {
              memo = [collection[0]];
          }

          return memo;
        }

      return traverse(array);
    },

    keys: function(collection) {
      return Object.keys(collection);
    },

    values: function(collection) {
      return Object.values(collection);
    },

    functions: function(object) {
      let theseKeys = fi.keys(object);
      let methodKeys =
        fi.filter(theseKeys, (key) => typeof object[key] == 'function');
      let sortedMethodKeys = methodKeys.sort((a,b) => a - b);
      return sortedMethodKeys;
    },


  }
})()
