var btn = document.getElementById("start");
var box = document.getElementById("square");  
var answer = 0;
var number = document.getElementById("zero");
var caption = document.getElementById("subtitle");
var reset = document.getElementById("reset");



btn.addEventListener("click", function() {
      
  /*make box shake*/
   box.classList.add("shake");

   /*Generate random number */
   answer = Math.floor(Math.random() * 25);

   /*Post number to box*/
   number.innerHTML = answer;

   /*If over 21 post you win, if you don't, you lose.*/
   if(answer >= 21) {
      caption.innerHTML = "You win! :D";
   } else {
       caption.innerHTML = "Bummer, dude. Try again.";
   };

   /*Reset play button*/
   btn.disabled = true;

});


reset.addEventListener("click", function() {

    /*Reset box*/
    box.classList.remove("shake");

    number.innerHTML = 0;

    /*Reset banner*/
    caption.innerHTML = "Press \"shake\" button to begin. If the number is higher than 21, you win!";

    /*Reset play button*/
    btn.disabled = false;

});








