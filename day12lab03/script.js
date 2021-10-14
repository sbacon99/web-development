function calcWordFrequencies() {

   string = prompt("Enter a string of words.")
   split = string.split(" ")

   let words = new Map();

   for (let i = 0; i < split.length; i++){
        if (words.has(split[i])) {
            words.set(split[i], words.get(split[i]) +1);
        }
        else{
            words.set(split[i], 1);
        }
   }

   for (let [word, count] of words){
       console.log(word + " " + count);
   }

   

}