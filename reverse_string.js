function reverse(word){
    // word = 'abcde';
   //  word = word.split("");
     let reverse_word = "";
     for(let i=0; i<word.length; i++){
         reverse_word = word[i] + reverse_word;
     }
     console.log(reverse_word);
 }
 
 reverse('abcde'); 

 // reverse an array without using temp array
 // In place reverse

 function reversearray(arr){
    for(let i = 0, j = arr.length - 1; i < j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
 }
 console.log(reversearray(['a', 'b', 'c']));