class Controller {
    // pcs = []
    static parts = []
    static categories = []
    apiUrl = "http://localhost:3000"
    getCategories() {
        fetch(`${this.apiUrl}/categories`)
        .then(resp => resp.json())
        .then(data => data.forEach(category => {
            Controller.categories.push(new Category(category.name))
        }))
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

    bindEventListeners() {
        let form = document.querySelector('#pcBuilder')
        document.querySelector('#partPicker').addEventListener('click', function() {
            console.log('Hello')
            if(form.style.display === 'none') {
                form.style.display = 'block';
            } else {
                form.style.display = 'none';
            }
            
        })

        document.querySelector('#pcBuilder').addEventListener('submit', (event) => {
            event.preventDefault()
            let data = event.target
            debugger
            fetch(`${this.apiUrl}/parts`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    // name: data.querySelector("#cpu").value
                })              
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
            })
       })
       form.reset
    }

    createANewPc() {
        fetch(`${this.apiUrl}/pcs`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'            
            },
            body: JSON.stringify()
            })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    // getPc() {
    //     fetch(`${this.apiUrl}/pc/`)
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp))
    //     .catch(err => alert(err))
    // }


}