const store = (function(){
    let storage = {};
    return {
        addItem: function(key, value){
            Object.assign(storage, {[key]: value})
        },
        clear: function(){
            storage = {}
        }
    }
})()

//LIFE
console.log(store)
console.log(storage)





// (function func(){
//     let a = 17;
//     console.log(a)
// })()