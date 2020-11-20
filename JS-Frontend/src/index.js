
const brain = new Controller
const gopher = new Api

var slideIndex = 1;

brain.bindEventListeners()
gopher.getPcs()

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  };
  x[slideIndex-1].style.display = "block";

}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

setTimeout(function(){showDivs(slideIndex)}, 500);



  
