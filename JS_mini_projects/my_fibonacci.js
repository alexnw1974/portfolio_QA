function my_fibonacci(param_1) {
    var a = 1;
    var b = 1;
    if (param_1 < 0) {
        b = -1;
    } else {
        switch(param_1){
            case 0:
                b = 0;
                break;
            case 1:
                break;
            case 2:
                break; 
            default:    
                for (var i = 2; i < param_1; i++) {
                    var c = a + b;
                    a = b;
                    b = c;
                };
        };
    };    
    return b;

};
console.log(my_fibonacci(2));
console.log(my_fibonacci(3));
console.log(my_fibonacci(4));
console.log(my_fibonacci(7));
console.log(my_fibonacci(-5));
console.log(my_fibonacci(0));
console.log(my_fibonacci(1));
console.log(my_fibonacci(2));