function reverse(word){
    // word = 'abcde';
     word = word.split("");
     let reverse_word = "";
     for(let i=0; i<word.length; i++){
         reverse_word = word[i] + reverse_word;
     }
     console.log(reverse_word);
 }
 
 reverse('abcde'); 