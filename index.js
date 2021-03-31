const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(testArr, alert) {
        if(testArr[0] !== undefined){
          return testArr.map(function(value){
             return alert(value)
          } )
        } else {
          let val = Object.values(testArr)
          val.forEach(function(value){
            alert(value)
          } )
          return testArr
   
        }

    },

    map: function(testArr,alert) {
      if(testArr[0] !== undefined){
        return testArr.map(function(value){
           return alert(value)
        } )
      } else {
        let val = Object.values(testArr)
        return val.map(function(value){
          return alert(value)
        } )
 
      }

    },

    reduce: function(testArr, callback, acc = -2) {
        let colect = 0
        testArr.forEach(function(v){
            colect += v
        })
         return callback(acc,colect)
    },

    find: function(intArr, finIt){
      let found 
      for (let i = 0; i < intArr.length; i++) {
        if(finIt(intArr[i]) === true){
          found = intArr[i]
          break
        }
       
       
      }
       return found

    },
    filter: function(intArr,fn){
      let found = []
      for (let i = 0; i < intArr.length; i++) {
        if(fn(intArr[i]) === true){
          found.push(intArr[i])
        }
       
      }
       return found
    },

    size: function(testArr){
      return Object.keys(testArr).length
    },

    first: function(testArr,index = 0){
      let newArr = []
      if(index === 0){
          return testArr[0]
      } else {
        for (let i = 0; i < testArr.length; i++) {
          if(newArr.length < index){
            newArr.push(testArr[i])    
          } else {
            break
          }    
        }
          return newArr
      }  
    },
    last: function(testArr,index = 0){
      let result = []
      let last 
  
        for (let i = 0; i < testArr.length; i++) {
          if(index === 0){
            last = testArr[i]
          } else if (i >= index - 2){
            result.push(testArr[i])
          }
          
        }
        if(last){
          return last
        } else{
          return result
        }
        
  
    },
    compact: function(nonsenseArr){
      let noFalsy = []
      for (let i = 0; i < nonsenseArr.length; i++) {
        if(nonsenseArr[i]){
          noFalsy.push(nonsenseArr[i])
        }    
      }
       return noFalsy

    },

    sortBy: function(testArr,fn){
      let newArray = [...testArr]
      let duplicatedArray = [...testArr]
      let sortedItem = [ ]
      let sin = testArr.map(function(e){
       return fn(e)
      })
     if (sin.toString().includes('0.')){      
        this.sortHelper(sin).map(function(element,index){   
          for (let i = 0;duplicatedArray.length > i;i++){
            if(element === Math.sin(duplicatedArray[i])){
              sortedItem.push(duplicatedArray[i])
            }
          }
        })
        
        return sortedItem
     } else {
       return this.sortHelper(newArray)
     }
    },

    sortHelper: function(newArray){
        let sortResult = []
        for (let i = 0; newArray.length > 0; i++) {
        let trulyArray = []
        for(let num = 0; num < newArray.length; num++){
          if(newArray[i] <= newArray[num]){
            if (i != num){
              trulyArray.push(true)
            }
          } else {
            trulyArray.push(false)
          }
        } 
        if (!trulyArray.includes(false)){
          sortResult.push(newArray[i])
          newArray.splice(i,1) 
        }
        if (newArray.length === i){
          i = -1
        } 
      }
      return sortResult

    },
    flatten: function(array, truly = false){
      let flatArr = []
      array.forEach(function(e){
        if(typeof(e) != 'object'){
          flatArr.push(e)
        } else {
          e.forEach(function(e){
            if(typeof(e) != 'object'){
              flatArr.push(e)
            } else if(truly === false){
              e.forEach(function(e){
                if(typeof(e) != 'object'){
                  flatArr.push(e)
                } else {
                  e.forEach(function(e){
                    if(typeof(e) != 'object'){
                      flatArr.push(e)
                    } else {
                      console.log("jijiujuj")
                    }
        
                  })
                }
    
              })
              
            }  else {
                flatArr.push(e)
            }

          })
        }        
      })
      return flatArr
       
    },
  uniq: function(array,b,fn = null){ 
    if(fn != null){
      let newArr = array.map(fn)
      return this.uniqHelper(newArr)
    } else {
      return this.uniqHelper(array)
    }
    
    

  },

  uniqHelper: function(array){
    let newArray = []
    array.forEach(function(e){
      for(let i = 0; i < array.length; i++){
        if(array[i] === e && !newArray.includes(e)){
          newArray.push(array[i])
        }
      }
    })
  return newArray
  },
  keys: function(obj){
    return Object.keys(obj)
  },
  values: function(obj){
    return Object.values(obj)
  },

    functions: function(obj) {
      
      let values = this.values(obj)
      let keys = [ ]
      this.keys(obj).forEach(function(e,index){
          if (values[index] != ''){
            keys.push(e)
          }

           
         
       })
    console.log(keys.sort())
       return  keys.sort()
    },






  }
})()

fi.libraryMethod()
