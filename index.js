const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let modifiedCollection;
      if (Array.isArray(collection)) {
        modifiedCollection = collection;
      } else {
        modifiedCollection = Object.values(collection)
      }

        for ( let i = 0 ; i < modifiedCollection.length; i++ ) {
          callback(modifiedCollection[i])
        }
      return collection
    },

    map: function(collection, callback) {
      let modifiedCollection;
      if (Array.isArray(collection)) {
        modifiedCollection = collection;
      } else {
        modifiedCollection = Object.values(collection)
      }
      let newArray = [];
        for ( let i = 0 ; i < modifiedCollection.length; i++ ) {
          newArray.push(callback(modifiedCollection[i]));
        }
      return newArray

    },

    reduce: function(array, callback, startingValue = 0) {
      let i;
      let acc;
      if (startingValue) {
          acc = startingValue;
          i = 0;
      } else {
          acc = array[0];
          i = 1;
      };
  
      for (; i < array.length; i ++ ) {
          //notice the ; at the start. its weird like that!!!!
          acc = callback(acc, array[i]);
      };
  
      return acc;
  
    },

    find: function(collection, predicate) {
      for ( let i = 0 ; i < collection.length; i++ ) {
       if (predicate(collection[i]) === true) {
         return collection[i]
       }
      }
    return 

    },

    filter: function(collection, predicate) {
      let result = [];
      for ( let i = 0 ; i < collection.length; i++ ) {
        if ( predicate(collection[i]) === true) {
          result.push(collection[i]);
        }
       }
     return result
 
 
    },

    size: function(collection) {
      let modifiedCollection = Object.values(collection)
      return modifiedCollection.length
    },

    first: function(array, number = 0) {
      if (number === 0) {
        return array[0]
      } else {
        return array.slice(0,number) //ex: slice(0,5) grabs index 0 1 2 3 4, not 5, and thats the first 5 elements
      }
    },

    last: function(array, number = 0) {
      if (number === 0) {
        return array[array.length-1]
      } else {
        return array.slice(-number) //ex: slice(-5) grabs last 5 elements
      }
  
    },

    compact: function(collection) {
      let result = [];
      for ( let i = 0 ; i < collection.length; i++ ) {
        if (!!collection[i] === true) {
          result.push(collection[i]);
        }
       }
     return result

    },

    sortBy: function(array,callback) {
      //assume no same score
      //ex: array = [10,30,20]
      let score = [];
      for ( let i = 0 ; i < array.length; i++ ) {
        score.push(callback(array[i]));
      } // ex: score = [ 4, 8, 5]
      let sortedScore = [...score].sort(function(a,b){return a - b}); // ex: sortedScore= [4, 5, 8 ]
      //this is weird cuz isn't using sort here kinda like using sortBY??? loll
      //its circular..
      //http://www.javascriptkit.com/javatutors/arraysort.shtml





      let result = [];
      for ( let j = 0 ; j < sortedScore.length; j++ ) {
        const index = score.indexOf(sortedScore[j]) // ex: j = 0, score.indexOf(4) = 0
        result.push(array[index]) //ex: push array[0] means push 10
      }
      return result

      },

      uniq: function(array, isSorted = false, callback = false) {
        let result = [];

        if ( !isSorted && !callback) {
          for ( let i = 0; i < array.length; i++ ) {
            if (!result.includes(array[i])) {
              result.push(array[i])
            }
          }
        } else if (  isSorted && !callback ) {
          for ( let i = 0; i < array.length; i++ ) {
            if ( fi.last(result) !== (array[i])) {
              result.push(array[i])
            }
          }
        } else {
          //if there is callback, we dont care if array is sorted or not
          //we filter the Array based on whether an element's TRANSformation is unique, not the elment intself

          let transformations = [];
          for ( let i = 0; i < array.length; i++ ) {
            if ( !transformations.includes( callback(array[i]) ) ) {
              transformations.push(callback(array[i])) //add if unique trans
              result.push(array[i])
            }
        }
      }

      return result
    },


    keys: function(object) {
      let result = [];
      for (const key in object ) {
        result.push(key)
      }
      return result;

    },

    values: function(object) {
      let result = [];
      for (const key in object ) {
        result.push(object[key])
      }
      return result;
    },

    functions: function(object) {
      let keys = fi.keys(object)

      let result = fi.filter(keys, function(key) { 

        return typeof object[key] === "function"
       })
      return result;
    },


    recursiveFlattenOneLevel: function(dest, arrayX) {
      for (const x of arrayX) {
        if  (!Array.isArray(x)) { 
          dest.push(x)
        } else {
          dest = this.recursiveFlattenOneLevel(dest, x)
        }
      }
      return dest
    },


    flatten: function(array, shallow = false) {

      let result = [];


      //IF SHALLOW
      if (shallow) {
        for ( const elem of array ) {
          if (!Array.isArray(elem)) { 
            result.push(elem)
          } else {
            for ( const x of elem ) {
              result.push(x)
            }
          }
        }
      } else {
        //IF NOT SHALLOW
        result = fi.recursiveFlattenOneLevel([], array);
      }

      return result;


    
    }



    

  }
})()

fi.libraryMethod()
