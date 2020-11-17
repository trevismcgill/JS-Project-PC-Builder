class Controller {
    // pcs = []
    static parts = []
    // categories = []
    apiUrl = "http://localhost:3000"
    getCategories() {
        fetch(`${this.apiUrl}/categories`)
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .catch(err => alert(err))
    }

    getParts() {
        fetch(`${this.apiUrl}/parts`)
        .then(resp => resp.json())
        .then(data => {
            data.forEach(part => {
                Controller.parts.push(new Part(part.name, part.category.name))
            })
            this.renderParts()
            })
        .catch(err => alert(err))
    }

    renderParts() {
        let ul = document.createElement('ul')
        // debugger
        Controller.parts.forEach(part => {
            let li = document.createElement('li');
            li.innerText = part.name
            ul.appendChild(li)
        })
        let addParts = document.querySelector('#test1')
        addParts.appendChild(ul)
    }

    // getPc() {
    //     fetch(`${this.apiUrl}/pc/`)
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp))
    //     .catch(err => alert(err))
    // }
}