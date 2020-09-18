const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
			for (let elKey in collection) {
				callback(collection[elKey])
			}
			return collection
    },

    map: function(collection, callback) {
			let newCollection = []
			for (let elKey in collection) {
				newCollection.push(callback(collection[elKey], elKey, collection))
			}
			return newCollection
    },

    reduce: function(collection, callback, acc) {
			let copy = collection, start = acc
			if(!acc) {
				start = copy[0]
				copy = copy.slice(1)
			}

			for (let elKey in copy) {
				start = callback(start, copy[elKey], copy)
			}
			return start
    },

		find: function(collection, predicate) {
			for (let elKey in collection) {
				if (predicate(collection[elKey])) {
					return collection[elKey]
				}
			}
		},

		filter: function(collection, predicate) {
			let newArr = []
			for (let elKey in collection) {
				if (predicate(collection[elKey])) {
					newArr.push(collection[elKey])
				}
			}
			return newArr
		},

		size: function(collection) {
			let count = 0
			for (let elKey in collection) { count++ }
			return count
		},

		first: function(array, n=1) {
			let newArr = array.slice(0, n)
			return !!newArr[1] ? newArr : newArr[0]
		},

		last: function(array, n=1) {
			let newArr = array.slice(-n)
			return !!newArr[1] ? newArr : newArr[0]
		},

		compact: function(array) {
			let newArr = []
			for (let el of array) {
				if (!!el) {
					newArr.push(el)
				}
			}
			return newArr
		},

		sortBy: function(array, callback) {
			let newArr = array.slice()
			return newArr.sort( (a, b) => callback(a) - callback(b) )
		},

		flatten: function(array, shallow=false) {
			let newArr = array
			if (shallow) {
				return array.reduce( (final, el) => final.concat(el), [])
			} else {
				while (newArr.find(el => Array.isArray(el))) {
					newArr = newArr.reduce( (final, el) => final.concat(el), [])
				}
			}
			return newArr
		},

		uniq: function(array, isSorted, callback) {
			let newArr = []
			if (!callback) {
				for (let el of array) {
					if (!newArr.includes(el)) {
						newArr.push(el)
					}
				}
			} else {
				let transformedArr = []
				for (let el of array) {
					let value = callback(el)
					if (!transformedArr.includes(value)) {
						transformedArr.push(value)
						newArr.push(el)
					}
				}
			}
			return newArr
		},

		keys: function(object) {
			let keys = []
			for (let key in object) {
				keys.push(key)
			}
			return keys
		},

		values: function(object) {
			let values = []
			for (let key in object) {
				values.push(object[key])
			}
			return values
		},

    functions: function(object) {
			let functionNames = []
			for (let key in object) {
				if (typeof object[key] === 'function') {
					functionNames.push(key)
				}
			}
			return functionNames.sort()
    }


  }
})()

fi.libraryMethod()
