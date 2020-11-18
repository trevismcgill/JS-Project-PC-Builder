class Controller {
    pcs = []
    apiUrl = "http://localhost:3000"
    
    // paintDom() {
    //     this.getPcs()
    // }

    getParts(pcObj) {
        let pcParts = pcObj.parts
        for(let partObj of pcParts) {
            new Part(partObj)
        }
        // console.log(Part.all)
    }

    renderPcParts(pcObj) {
        let ul = document.createElement('ul')
        let pcParts = pcObj.parts
        // debugger
        pcParts.forEach(part => {
            let li = document.createElement('li');
            li.innerText = `${part.category} - ${part.name}`
            ul.appendChild(li)
        })
        let addParts = document.querySelector('#test1')
        addParts.appendChild(ul)
    }

    getPcs() {
        fetch(`${this.apiUrl}/pcs`)
            .then(resp => resp.json())
            .then(data => {
                for(let pcObj of data) {
                    new Pc(pcObj)
                    this.getParts(pcObj)
                }
                // this.renderPcParts(Pc.all[0])
                // console.log(Pc.all)
            })
            .catch(err => alert(err))
        // console.log(Pc.all)
    }

    renderPc() {
        
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
            // let data = event.target
            // debugger
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
        .then(resp => console.log(resp.json()))
        .then(data => {
            console.log(data)
        })
    }

}