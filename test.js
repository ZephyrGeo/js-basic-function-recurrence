function f(...Args) {
    console.log(Args.length)
}

function ff(a,...Args) {
    // Args.map(function(element) {
    //     console.log(a + element)
    // }) 
    Args.map(element => console.log(a + element))
}

function fff(...Args) {
    console.log(Args[0], Args[1])
}

fff(1,2)


// f(1,23,4,5,6,79)
// ff(1,23,4,5,6,79)
