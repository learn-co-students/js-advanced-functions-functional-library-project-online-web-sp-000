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
      const newArray = [];
      for (const key in collection) {
        newArray.push(callback(collection[key], key, collection));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      //if no acc is supplied,
      //first run through the loop is just added to the acc with no pass through the function
      if (acc) {
       let memo = acc;
       for (let i = 0; i < collection.length; i++) {
         memo = callback(memo, collection[i], collection);
       }
       return memo;
      }
      else {
        let memo = collection[0];
        for (let i = 1; i < collection.length; i++) {
          memo = callback(memo, collection[i], collection);
        } 
        return memo;       
      }
    },

    find: function(collection, predicate) {
      for (const element of collection) {
        if (predicate(element)) {
          return element;
        }
      }
    },

    filter: function(collection, predicate) {
      const newArray = []
      for (const element of collection) {
        if (predicate(element)) {
          newArray.push(element);
        }
      }
      return newArray;
    },

    size: function(collection) {
      let i = 0;
      for (const key in collection) {
        i++
      }
      return i;
    },

    first: function(array, n=1) {
      const newArray = []
      for (let i = 0; i < n; i++) {
        newArray.push(array[i])
      } 
      if (n > 1) {
        return newArray; 
      }
      else {
        return newArray[0];
      }
    },

    last: function(array, n=1) {
      const lastIndex = array.length - 1;
      const count = lastIndex - n
      const newArray = []
      for (let i = lastIndex; i > count; i--) {
        newArray.unshift(array[i])
      } 
      if (n > 1) {
        return newArray; 
      }
      else {
        return array[lastIndex];
      }
    }, 

    compact: function(array) {
      const newArray = []
      for (const element of array) {
        if (element) {
          newArray.push(element);
        }
      }
      return newArray;
    },  


   sortBy: function(array, callback) {
     const arrayOfObjects = [];
     const arrayOfKeys = [];
     for (const element of array) {
       const returnValue = callback(element);
       const newObject = {};
       newObject[returnValue] = element;
       arrayOfObjects.push(newObject);
       arrayOfKeys.push(returnValue);
     }
      const sortedArray = arrayOfKeys.sort(function(a, b) {
      return a - b;
      });

     const finalArray = [];
     for (const element of sortedArray) {
        for (const nestedElement of arrayOfObjects) {
          if (Object.keys(nestedElement)[0] === element.toString()) {
            finalArray.push(Object.values(nestedElement)[0]);
            break
          }
        }
     }
     return finalArray;
    },



    uniq: function(array, isSorted, callback) {
      const uniqArray = []
      if (!callback) {
        for (const element of array) {
          if (!uniqArray.includes(element)) {
            uniqArray.push(element);
          }
        }
      } else {
      const seenArray = []
      for (const element of array) {
        const value = callback(element);
        if (!seenArray.includes(value)) {
          seenArray.push(value);
          uniqArray.push(element);
        }
      } 
    }
      return uniqArray;
     },

    // functions: function() {

    // },


  }
})()

fi.libraryMethod()