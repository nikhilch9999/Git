/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var arr1 = s.split("");
    arr1 = arr1.sort();
    var arr2 = t.split("");
    arr2 = arr2.sort();

    if (arr1.length != arr2.length) {
        return false;
    }
    else {
    for (i=0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    }
    return true;
    
};