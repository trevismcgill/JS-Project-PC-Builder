class Pc {
    static all = []
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.parts = obj.parts
        Pc.all.push(this)
        this.createCard()
    }

    createCard() {
        //Builds the HTML for the Pc Cards
        const cardSlot = document.querySelector("#footerArea")
        const div1 = document.createElement('div')
        div1.className = "mySlides"
        div1.id = `pcCard-${this.id}`
        const div2 = document.createElement('div')
        div2.className = "w3-container w3-grey"
        const h1 = document.createElement('h1')
        h1.innerHTML = `<b>${this.name}</b>`
        const ul = document.createElement('ul')
        ul.style.listStyle = 'none';
        this.parts.forEach(part => {
            let li = document.createElement('li');
            li.innerText = `${part.category} - ${part.name}`
            ul.appendChild(li)
        })
        const btn = document.createElement("button")
        btn.id = `delete-${this.id}`
        btn.innerText = "DELETE"
      
        // This feature should moved to it's own function
        btn.addEventListener('click', () => {
            gopher.deletePc(this);
            document.querySelector(`#pcCard-${this.id}`).remove();
            plusDivs(0)
        })

        ul.appendChild(btn)
        div2.appendChild(h1)
        div2.appendChild(ul)
        div1.appendChild(div2)
        cardSlot.appendChild(div1)

        showDivs(1)
        
    }
}