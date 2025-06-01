function fib(v){
        const Fibonacci = {
        [Symbol.iterator]: function*(){
            c = 0;
            n = 1;

            while(true){
                yield c;
                [c,n] = [n,c+n];
            }
        }
    }

    const itr = Fibonacci[Symbol.iterator]();

    for(let i=0; i <= v; i++){
        console.log(itr.next().value);
        
    }

}

fib(8);
