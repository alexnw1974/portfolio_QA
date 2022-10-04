function my_space(str) {
    var x = 0;
    var y = 0;
    var dir = "up";
    for (var i = 0; i < str.length; i++) {
        // console.log("str[" + i + "] = " + str[i]);
        if (str[i] == 'A' && dir == 'up') {
            y--;
        } else if (str[i] == 'R' && dir == 'up') {
            dir = 'right';  
        } else if (str[i] == 'L' && dir == 'up') {
            dir = 'left';
        } else if (str[i] == 'A' && dir == 'right') {
            x++;
        } else if (str[i] == 'R' && dir == 'right') {
            dir = "down";
        } else if (str[i] == 'L' && dir == 'right') {
            dir = "up";
        } else if (str[i] == 'A' && dir == 'left') {
            x--;
        } else if (str[i] == 'R' && dir == 'left') {
            dir = "up";
        } else if (str[i] == 'L' && dir == 'left') {
            dir = "down";
        } else if (str[i] == 'A' && dir == 'down') {
            y++;
        } else if (str[i] == 'R' && dir == 'down') {
            dir = 'left';
        } else if (str[i] == 'L' && dir == 'down') {
            dir = 'right';
        }
    }
    return `{x: ${x}, y: ${y}, direction: '${dir}'}`
}

console.log(my_space("RAALALL"));
console.log(my_space("AAAA"));
console.log(my_space(""));
console.log(my_space("RAARA"));