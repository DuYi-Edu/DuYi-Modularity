define((require, exports, module) => {
    require.async("a", function(a){
        console.log(a)
    })
    require.async("b", function(b){
        console.log(b)
    })
})