const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key, collection);
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      for (const key in collection) {
        newCollection.push(callback(collection[key], key, collection))
      }
      return newCollection

    },

    reduce: function(collection, callback, acc) {
      // question: so ^ acc is declared bc of being in the function defintion, whether it is or is not included in function call?
      let i = acc ? 0 : 1
      // let memo = acc ? acc : collection[0] --which is better? -this or below
      acc = acc ? acc : collection[0]
      for(; i < collection.length; i++) {
        //question: you can use a for loop with 'i' to iterate theough objects??
        acc = callback(acc, collection[i], collection)
      }
      // for (const key in collection) {
      //  callback(acc, collection[key], collection)
      // }
      return acc
    },

    functions: function() {

    },

    find: function(collection, predicate) {
      let bool;
      for (const key in collection) {
        if (predicate(collection[key])) {
          return bool = collection[key]
        }
      }
      return bool
    },

    filter: function(collection, predicate) {
      let answer = [];
      for (const key in collection) {
        let thisRound = predicate(collection[key]);
        if (thisRound) {
          answer.push(collection[key]);
        }
      }
      return answer
    },

    size: function(collection) {
      let count = 0;
      for (const key in collection) {
        count ++;
      }
      return count
    },

    first: function(collection, num) {
      if (!num) {
        return collection[0]
      } else {
        let items = [];
        for (let i = 0; i < num; i++ ) {
          items.push(collection[i])
        }
        return items
      }
    },

    last: function(collection, num) {
      if (!num) {
        return collection[collection.length - 1]
      } else {
        let items = [];
        let lastIndex = collection.length - 1
        for ( let i = lastIndex; i > (lastIndex - num); i-- ) {
          items.push(collection[i]);
        }
        return items.reverse();
      }
    },

    compact: function(array) {
      let items = [];
      for (const element in array) {
        let bool = array[element]
        if (bool) {
          items.push(bool);
        }
      }
      return items;
    },

    sortBy: function(array, callback) {
      let arrayCopy = array.slice();
      return arrayCopy.sort( function(a, b) {
        return callback(a) - callback(b);
      })
    },

    flatten: function(array, boolean) {
      if (boolean === true) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
          if (typeof(array[i]) === "number") {
            newArray.push(array[i]);
          } else {
            let thisArray = array[i].slice();
            for (let o = 0; o < thisArray.length; o++) {
              newArray.push(thisArray[o]);
            }
          }
        }
        return newArray
      } else {
        let noNestArray = [];
        let unnesting = (array) => {
          for (let i = 0; i < array.length; i++) {
            if (typeof(array[i]) === "number") {
              noNestArray.push(array[i]);
            } else {
              let thisArray = array[i].slice()
              unnesting(thisArray);
            }
          }
        }
        unnesting(array);
        return noNestArray
      }
    },

    uniq: function(array, isSorted, callback) {
      if (callback) {
        let newArr = [];
        let callbackValues = [];
        for (let i = 0; i < array.length; i++) {
          let value = array[i];
          let thisRound = callback(value);
          if (!callbackValues.includes(thisRound)) {
            newArr.push(value);
          }
          callbackValues.push(thisRound);
        }
        return newArr

      } else {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
          if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
          }
        }
        return newArray
      }
    },

  }
})()

fi.libraryMethod()
