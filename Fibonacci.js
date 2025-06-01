function fib(new_input_value){
        const Fibonacci = {
        [Symbol.iterator]: function*(){
            let c = 0;
            let n = 1;

            while(true){
                yield c;
                [c,n] = [n,c+n];
            }
        }
    }

    const itr = Fibonacci[Symbol.iterator]();


    const h1 = document.getElementById("fib-number");

    for(let i=0; i <= new_input_value; i++){
        value = itr.next().value;
        if(i === new_input_value){
            h1.innerHTML = value;
        }
    }

}

document.getElementById("button").addEventListener("click", ()=> {
    const input_value = document.getElementById("field-value").value;
    let new_input_value = parseInt(input_value);
    fib(new_input_value);
})
