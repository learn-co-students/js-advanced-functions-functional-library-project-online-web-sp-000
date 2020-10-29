const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      const myCollection = this.newCollection(collection);
      for (let i=0; i < myCollection.length; i++){
        alert(myCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const myCollection = this.newCollection(collection);
      let myNewCollection = [];
      for (let i=0; i < myCollection.length; i++){
        myNewCollection.push(callback(myCollection[i]))
      }
      return myNewCollection;
    },

    reduce: function(collection, callback, acc) {
      const myCollection = this.newCollection(collection);
      let myAcc = 0;
      let myPointer = 0;
      if (acc === undefined){
        myAcc = myCollection[0];
        myPointer = 1;
      } else {
        myAcc = acc;
      }
      for (let i=myPointer; i < myCollection.length; i++){
        myAcc = callback(myAcc, myCollection[i])
      }
      return myAcc;
    },

    find: function(collection, predicate) {
      const myCollection = this.newCollection(collection);
      let myBreak = undefined;
      if (predicate !== undefined){
        for (let i=0; i < myCollection.length; i++){
          if (predicate(myCollection[i])){
            myBreak = myCollection[i];
            break;
          }
        }
        if (myBreak !== undefined){
          return myBreak;
        }
      }
    },

    filter: function(collection, predicate) {
      const myCollection = this.newCollection(collection);
      let myNewCollection = [];
      if (predicate !== undefined){
        for (let i=0; i < myCollection.length; i++){
          if (predicate(myCollection[i])){
           myNewCollection.push(myCollection[i])
          }
        }
      }
      return myNewCollection;
    },

    size: function(collection) {
      const myCollection = this.newCollection(collection);
      
      return myCollection.length;
    },

    first: function(collection, n) {
      const myCollection = this.newCollection(collection);
      if (n !== undefined){
        return myCollection.slice(0, n);
      } else {
        return myCollection[0];
      }
    },

    last: function(collection, n) {
      const myCollection = this.newCollection(collection);
      if (n !== undefined){
        return myCollection.slice(myCollection.length - n, myCollection.length);
      } else {
        return myCollection[myCollection.length - 1]
      }
    },

    compact: function(collection) {
      const myCollection = this.newCollection(collection);
      let myNewCollection = [];
      for (let i=0; i < myCollection.length; i++){
        if (myCollection[i]){
          myNewCollection.push(myCollection[i])
        }
      }
      return myNewCollection;
    },

    functions: function() {

    },

    sortBy: function(collection, callback) {
      const myCollection = this.newCollection(collection);
      return myCollection.sort(function(a, b){
        return callback(a) - callback(b);
      });
    },

    functions: function() {

    },

    flatten: function(collection, shallow) {
      let myArrays = this.newCollection(collection);
      const fn = function(a, result = [], shallow, levelCounter){
        let values = [];
        let arrays = [];
        for (let i = 0; i < a.length; i++){
          let element = a[i];
          if (Array.isArray(element)  && (shallow === undefined || (shallow === true && levelCounter <= 1))){            
            levelCounter += 1;
            const sub = fn(element.slice(), result, shallow, levelCounter);
            values.concat(sub[0]);
            if (sub[1].length > 0){
              arrays.concat(sub[1]);
            }            
          } else {
            result.push(element);
          }
        }
        return result;
      }
      let result = fn(myArrays.slice(), [], shallow, 0);
      return result;
    },

    keys: function(object){
      return Object.keys(object);
    },

    values: function(object){
      return Object.values(object);
    },

    functions: function(object) {
      function sortArrFunction(val) { return val }
      let result = [];
      for (let key in object) {
        if (object[key] !== ""){
          result.push(key)
        }
      }
      return result.sort();
    },

    uniq: function(collection, isSorted, callback){
      let newCollection = [];      
      const exists = function(col, val, callback){
        let myExists = false;
        let test = false;
        for (let i = 0; i < col.length; i++){
          if (callback){
            test = callback(col[i]) === callback(val);
          } else {
            test = col[i] === val;
          }
          if (test){
            myExists = true;
            break;
          }
        }
        return myExists;
      }
      let element = undefined;
      for (let n = 0; n < collection.length; n++){
        element = collection[n]
        if (exists(newCollection, element, callback) === false){
            newCollection.push(element);
        }
      }
      return newCollection;
    },

    
    newCollection: function(collection) {
      let myCollection = [];
      if (Array.isArray(collection) === false){
        myCollection = Object.values(collection);
      } else {
        myCollection = collection.slice();
      }
      return myCollection;
    },
  }
})()

fi.libraryMethod()
const testArr = [1, 2, 3, 4]
const testCollection = {one: 1, two: 2, three: 3, four: 4}
const callback = (acc, val, collection) => (acc + (val * 3))
const nestedArr = [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]
const uniqArr = [1, 1, 2, 3, 2, 4, 5, 6, 1]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

const testObject = {
  a: "",
  z: () => null,
  p: "",
  c: () => null,
  k: () => null,
}
