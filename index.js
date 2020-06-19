const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (!(collection instanceof Object && collection instanceof Array)) {
        const objectKeys = Object.keys(collection)  
        const objectValues = Object.values(collection)
        for (let i = 0; i < collection.length; i++) {
          alert(objectValues[i]);
          callback(objectValues[i], objectKeys[i], collection)
        }
        return collection;
      } else {
        for (let i = 0; i < collection.length; i++) {
          alert(collection[i]);
          callback(collection[i], i, collection);
        }
        return collection;
      }
    },

    map: function(collection, callback) {
      if (!(collection instanceof Object && collection instanceof Array)) {
        const arrayForReturn = []
        for (const objectKey in collection) {
          const newValue = callback(collection[objectKey], objectKey, collection)
          arrayForReturn.push(newValue)
        }
        return arrayForReturn;
      } else {
        const arrayForReturn = []
        for (const ele of collection) {
          const newValue = callback(ele, collection.indexOf(ele), collection)
          arrayForReturn.push(newValue);
        }
        return arrayForReturn;
      }
    },

    reduce: function(collection, callback, acc) {
      if (acc === undefined) {
        acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
        return acc;
      }
      for (const ele of collection) {
        acc = callback(acc, ele, collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const ele of collection) {
        if (predicate(ele)) {
          return ele;
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const newArray = []
      this.each(collection, (ele, index ) => {
        if (predicate(ele)) {
          newArray.push(ele)
        }
      })
      return newArray;
    },

    size: function(collection) {
      if (!(collection instanceof Object && collection instanceof Array)) {
        const objKeys = Object.keys(collection)
        return this.reduce(objKeys, (acc) => acc + 1, 0)
      } else {
        return this.reduce(collection,(acc) => acc + 1, 0)
      }
    },

    first: function(collection, n) {
      if (n === undefined) {
        return collection[0];
      } else {
        return collection.slice(0, n);
      }
    },

    last: function(collection, n) {
      if (n === undefined) {
        const lastIndex = this.size(collection) - 1
        return collection[lastIndex];
      } else {
        const startingIndex = this.size(collection) - n
        return collection.slice(startingIndex)
      }
    },

    compact: function(collection) {
      const compactArray = [];
      this.each(collection, (ele) => {
        if (ele) {
          compactArray.push(ele);
        }
      }) 
      return compactArray;
    },

    sortBy: function(array, callback) {
      const newArray = this.compact(array)
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function (array, shallow) {
      const newArray = []
      if (shallow) {
        for (const ele of array) {
          if (typeof ele === 'object') {
            for (const innerEle of ele) {
              newArray.push(innerEle);
            }
          } else {
            newArray.push(ele);
          }
        }
        return newArray;
      } else {
        return array.flat(Infinity);
      }
    },

    uniq: function(array, isSorted, callback) {
      const newArray = [];
      if (isSorted) {

      } else if (callback) {
        for (const ele of array) {
          if (newArray.find(e => callback(e) === callback(ele))) {
            continue;
          } else {
            newArray.push(ele);
          }
        }
      } else {
        for (const ele of array) {
          if (newArray.find(e => e === ele)) {
            continue;
          } else {
            newArray.push(ele);
          }
        }
      }
      return newArray;
    },

    keys: function(object) {
      return this.map(object, (val, key) => key)
    },

    values: function(object) {
      return this.map(object, val => val)
    },


    functions: function(object) {
      const newArray = [];
      for (const k in object) {
        if (typeof object[k] === 'function') {
          newArray.push(k);
        }
      }
      console.log(newArray)
      return newArray;
    },


  }
})()

fi.libraryMethod()
fi.each([1,2,3,4], num => console.log(num) )
