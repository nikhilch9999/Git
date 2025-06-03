function fibonacci(num){
    console.log("Enter a number to print fibonacci series: " + num);
    let array = [];
    let num1 = 0;
    if (num == 1){
        array.push(num1);
        console.log(array);
    }
    else if(num == 2){
        array.push(0,1);
        console.log(array);
    }
    else {
        array.push(0,1);
        for(let i=2; i < num; i++){
            array.push(array[i-1]+array[i-2]);
            console.log(array);
        }
    }
}
fibonacci(5);



function swap(a,b){
    let temp;
    // a =1, b =2;
    temp = b;
    b = a;
    a = temp;
    console.log(a,b);
}

swap(2,1);


function withoutswap(a,b){
    // a =1, b =2;
    a = a + b; // a=3
    b = a - b; // b=1;
    a = a - b;
    console.log(a,b);
}

withoutswap(100,200);





















