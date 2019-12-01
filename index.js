const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,iterate) {
      let newCollection=Array.isArray(collection)?collection:Object.values(collection)
      newCollection.forEach((item)=>iterate(item))
      return collection
    },

    map: function(collection,transform) {
      let newCollection=Array.isArray(collection)?collection:Object.values(collection)
      return newCollection.map(transform)
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},

    find: function(collection,callback) {
      return collection.find(callback)
    },

    filter: function(collection,callback) {
      let newArr=[]
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          newArr.push(collection[i])
        }
      }
      return newArr;
    },

    size: function(collection) {
      let newCollection=Array.isArray(collection)?collection:Object.values(collection)
      return newCollection.length
    },

    first: function(collection,n) {

      let newArr=[]
      for (var i = 0; i<n ; i++) {
        newArr.push(collection[i])
      }
      if (!n) {
        newArr=collection[0]
      }

      return newArr
    },

    last: function(collection,n) {

      let newArr=[]
      for (var i = collection.length-n; i<collection.length ; i++) {
        newArr.push(collection[i])
      }
      if (!n) {
        newArr=collection[collection.length-1]
      }

      return newArr
    },

    compact: function(collection) {
      let newArr=[]
      for (var i = 0; i < collection.length; i++) {
        if (collection[i]) {
          newArr.push(collection[i])
        }
      }
      return newArr;
    },

    sortBy: function(array, callback) {
      let newArr= [...array]

      return newArr.sort(function(a, b){return callback(a)-callback(b)})
    },

    flatten: function(array, shallow) {
      let newArr= [...array]
      return shallow?newArr.flat():newArr.flat(Infinity)
    },

    uniq: function(array, isSorted, callback) {
      if (isSorted===false) {
        let arr1=[]
        let arr2=[]
        for (let i of array) {
          let mod=callback(i)
          if (!arr1.includes(mod)) {
            arr1.push(mod)
            arr2.push(i)

          }
        }

        return arr2
      }
      else {
        let newArr= [...array]
        return [...new Set(newArr)]
      }
    },

    keys: function(object) {
      let newArr=[]
      for (var keys in object) {
        newArr.push(keys)
      }
      return newArr;
    },

    values: function(object) {
      let newArr=[]
      for (var keys in object) {
        newArr.push(object[keys])
      }
      return newArr;
    },

    functions: function(object) {
      let newArr=[]
      for (var keys in object) {
        if (typeof object[keys]==="function") {
          newArr.push(keys)
        }
      }
      return newArr.sort();
    },
  }
})()

fi.libraryMethod()
