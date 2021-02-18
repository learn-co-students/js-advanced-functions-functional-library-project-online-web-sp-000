const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection;
        if (collection instanceof Array) {
           newCollection = [...collection];
        } else {
           newCollection = Object.values(collection);
        };

        for (let i = 0; i < newCollection.length; i++) {
           callback(newCollection[i]);
        }

         
        return collection;
    },

    map: function(collection, callback) {
      let newCollection;
      let result = [];
      if (collection instanceof Array) {
          newCollection = [...collection];
      } else {
         newCollection = Object.values(collection);
      };

      for (let i = 0; i < newCollection.length; i++) {
          result.push(callback(newCollection[i]));
      }

       
      return result;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = [...collection];
      if (!acc) {
         acc = newCollection[0]
         newCollection = newCollection.slice(1)
      }
      for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
       return acc;
    },

    find: function(collection, predicate) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            return collection[i];
          } 
        };
 
        return undefined;       
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        } 
      };

      return undefined;       
    },

    filter: function(collection, predicate) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        };

      };

      return result;       
    },

    size: function(collection) {
      let newCollection = Object.values(collection);
      let count = 0;
        for (let i = 0; i < newCollection.length; i++) {
             count++;
        };
        return count;
    },

    first: function(array, n) {
      let result = [];
      if (!n) {
         result = array[0];
      } else {
         for (let i = 0; i < n; i++) {
           result.push(array[i]);
         }     
      }
      return result;    
    },

    last: function(array, n) {
      let result = [];
      if (!n) {
         result = array[array.length - 1];
      } else {
         for (let i = 1; i < n + 1; i++) {
           result.unshift(array[array.length - i]);
         }     
      }
      return result;    
    },

    compact: function(array) {
      let result = [];
         for (let i = 0; i < array.length; i++) {
           if (!!array[i]) {
             result.push(array[i]);
           }
         }     
    
      return result;    
    },


    sortBy: function(array, callback) {
      let result = [...array];
      return result.sort((a,b) => callback(a) - callback(b));
    },
    
    flatten: function(collection, shallow, result = []) {
      if (!Array.isArray(collection)) {
        return result.push(collection)
      }

      if (shallow) {
         for (let el of collection) {
            if (Array.isArray(el)) {
              for (let i = 0; i < el.length; i++) {
                result.push(el[i])
              }
            } else {
              result.push(el);
            }
         }
      } else {
          for (let el of collection) {
            this.flatten(el, false, result);
          }
      }
      return result;
    },

    uniq: function(array, isSorted, callback) {
      let result = [array[0]];
    
      if (isSorted) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] != array[i + 1]) return result.push(array[i])
        } 
      } else if (!callback) {
          for (let el of array) {
             if (!result.includes(el)) {
                result.push(el);
             }
          }
          return result;
      } else {
          let modifiedResult = [];
          let newResult = [];
          for (let i = 0; i < array.length; i++) {
             const val = callback(array[i]);
             if (!modifiedResult.includes(val)) {
                  modifiedResult.push(val);
                  newResult.push(array[i]);
             }
          }
          return newResult;
      }
      
    },

    keys: function(obj) {
      let result = [];

      for (let property in obj) {
        result.push(property)
      }
      return result;
    },

    values: function(obj) {
      let result = [];

      for (let property in obj) {
        result.push(obj[property])
      }
      return result;
    },
    
    functions: function(obj) {
      let result = [];

      for (let property in obj) {
        if (typeof obj[property] === 'function') {result.push(property);} 
      }
      return result;
    }
  }
})()

fi.libraryMethod()
