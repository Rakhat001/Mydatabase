'use strict';

function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this)
        return this.a + this.b; 
    }
    console.log(sum());
}
showThis(4,5);

// 1)   обычная функция: this = window , но если use strict - undefined.