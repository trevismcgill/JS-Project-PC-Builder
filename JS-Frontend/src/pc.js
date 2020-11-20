class Pc {
    static all = []
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.parts = obj.parts
        Pc.all.push(this)
    }

    createCard() {
        let cardSlot = document.querySelector("#footerArea")
        let div1 = document.createElement('div')
        div1.className = "mySlides"
        div1.id = `pcCard-${this.id}`
        // div1.style.display = "none"
        let div2 = document.createElement('div')
        div2.className = "w3-container w3-grey"
        let h1 = document.createElement('h1')
        h1.innerHTML = `<b>${this.name}</b>`
        let ul = document.createElement('ul')
        this.parts.forEach(part => {
            let li = document.createElement('li');
            li.innerText = `${part.category} - ${part.name}`
            ul.appendChild(li)
        })
        let btn = document.createElement("button")
        btn.id = `delete-${this.id}`
        btn.innerText = "DELETE"

        btn.addEventListener('click', () => {
            debugger
            gopher.deletePc(this);
            document.querySelector(`#pcCard-${this.id}`).remove();
        })

        ul.appendChild(btn)
        div2.appendChild(h1)
        div2.appendChild(ul)
        div1.appendChild(div2)
        cardSlot.appendChild(div1)
    }
        
}

    