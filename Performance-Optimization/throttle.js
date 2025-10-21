//throttle helps to perform some task after some delay.

const inputElement = document.getElementById("input");

//throttle code
function throttle(fnc, delay){

    let lastTime = 0;

    return function(...args){

        let now = Date.now();

        if(now - lastTime >= delay){
            lastTime = now;
            fnc(...args);
        }

    }
}


inputElement.addEventListener('input', throttle(function(){console.log('throttle example')}, 1000))





