const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(input, func) {
      //console.log(input)
      let array;
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(input);
      }
      console.log(array)
      for (let i = 0; i < array.length; i++) {
        array[i] = func(i);
      }
      return input;
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
