$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var inputPhrase = $("#userphrase").val();
    var wordArray = inputPhrase.split("");
    var transformedArray = [];

    wordArray.forEach(function(letter) {
      if (vowels.includes(letter)) {
        transformedArray.push("-")
      } else {
        transformedArray.push(letter)
      }
    });
    var puzzle = transformedArray.join("");
    console.log(puzzle);
    $("p#output").text(puzzle);
  });
});
