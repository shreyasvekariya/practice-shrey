// Imediately Invoke Function Expressions (IIFE)


(function shrey(){
    // name IIFE
    console.log(`DB CONNECTED`);
})();        // to remove global scopee polution 

// shrey() // ; for write teo IIFE

(   (friend)  => {
    // unmaned IIFE (peramiters)
    console.log(`OB CONNECTED SHREYAS ${friend}`)
})("friend shrey")