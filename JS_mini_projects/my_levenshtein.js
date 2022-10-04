function my_levenshtein(str1, str2) {
	var val = 0;
    if (str1.length == str2.length) {
        for (var i = 0; i < str1.length; i++ ) {
            if (str1[i] != str2[i]) {
            val++;
                        }
            console.log("str1[" + i + "] = " + str1[i] + " and str2[" + i + "] = " + str2[i]);
        }
    } else { 
        val = -1;
    }
    return val;
}

console.log(my_levenshtein("GGACTGA", "GGACTGA"));
console.log(my_levenshtein("GGTGA", "GGACTGA"));
console.log(my_levenshtein("ACCAGGG", "ACTATGG"));
console.log(my_levenshtein("", ""));