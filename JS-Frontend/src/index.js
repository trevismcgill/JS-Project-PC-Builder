
const brain = new Controller
const gopher = new Api

var slideIndex = 1;
window.addEventListener("load", () => {
  bindEventListeners();
  intializePcCards();
});

function bindEventListeners() {
  const form = document.querySelector('#pcBuilder')
  const formToggleBtn = document.querySelector('#partPicker')
  formToggleBtn.addEventListener('click', toggleCreatePcBuilderForm)

  form.addEventListener('submit', submitCreatePcBuilderForm)
}

function toggleCreatePcBuilderForm() {
  const form = document.querySelector('#pcBuilder')
  form.classList.toggle("visually-hidden")
}

function submitCreatePcBuilderForm(event) {
    event.preventDefault()
    const form = document.querySelector('#pcBuilder')
    const data = event.target
    gopher.createANewPc(data);
    form.classList.toggle("visually-hidden");
    form.reset();
}











function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  // debugger
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

function intializePcCards() {
  gopher.getPcs()
  .then((pcs) => {
    pcs.forEach(pc => {
      createCard(pc);
    })
  })
  // .then(showDivs(slideIndex));
}

function createCard(pcObj) {
  const cardSlot = document.querySelector("#footerArea")
  const div1 = document.createElement('div')
  div1.className = "mySlides"
  div1.id = `pcCard-${pcObj.id}`
  const div2 = document.createElement('div')
  div2.className = "w3-container w3-grey"
  const h1 = document.createElement('h1')
  h1.innerHTML = `<b>${pcObj.name}</b>`
  const ul = document.createElement('ul')
  ul.style.listStyle = 'none';
  pcObj.parts.forEach(part => {
      let li = document.createElement('li');
      li.innerText = `${part.category} - ${part.name}`
      ul.appendChild(li)
  })
  const btn = document.createElement("button")
  btn.id = `delete-${pcObj.id}`
  btn.innerText = "DELETE"

  btn.addEventListener('click', () => {
      debugger
      gopher.deletePc(pcObj);
      document.querySelector(`#pcCard-${pcObj.id}`).remove();
  })

  ul.appendChild(btn)
  div2.appendChild(h1)
  div2.appendChild(ul)
  div1.appendChild(div2)
  cardSlot.appendChild(div1)

  showDivs(1)
}





  
