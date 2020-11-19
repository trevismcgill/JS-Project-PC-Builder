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
        pcParts.forEach(part => {
            let li = document.createElement('li');
            li.innerText = `${part.category} - ${part.name}`
            ul.appendChild(li)
        })
        let addParts = document.querySelector('#test1')
        // debugger
        addParts.innerHTML = '<h1>See your build here:</h1>'
        addParts.appendChild(ul)
    }

    getPcs() {
        return fetch(`${this.apiUrl}/pcs`)
            .then(resp => resp.json())
            .then(data => {
                for(let pcObj of data) {
                    let pc = new Pc(pcObj)
                    this.getParts(pcObj)
                    pc.createCards()
                }
                return Pc.all
            })
            .catch(err => alert(err))
        
    }

    renderPc() {
        
    }

    createANewPc(data) {
        return fetch(`${this.apiUrl}/pcs`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'            
            },
            body: JSON.stringify({
                name: data.pcName.value,
                parts_attributes: [
                    {
                        name: data.cpu.value,
                        category: data.cpu.id
                    },
                    {
                        name: data.cooler.value,
                        category: data.cooler.id
                    },
                    {
                        name: data.motherboard.value,
                        category: data.motherboard.id
                    },
                    {
                        name: data.ram.value,
                        category: data.ram.id
                    },
                    {
                        name: data.storage.value,
                        category: data.storage.id
                    },
                    {
                        name: data.gpu.value,
                        category: data.gpu.id
                    },
                    {
                        name: data.psu.value,
                        category: data.psu.id
                    },
                ]
            })
        })
        .then(resp => resp.json())
        .then(newPcObj => {
            let pc = new Pc(newPcObj)
            this.renderPcParts(newPcObj)
            pc.createCards();
            plusDivs(0);
        })
    }
    


    bindEventListeners() {
        let form = document.querySelector('#pcBuilder')
        document.querySelector('#partPicker').addEventListener('click', function() {
            if(form.style.display === 'none') {
                form.style.display = 'block';
            } else {
                form.style.display = 'none';
            }
            
        })

        document.querySelector('#pcBuilder').addEventListener('submit', (event) => {
            event.preventDefault()
            let data = event.target
            this.createANewPc(data);
            form.style.display = 'none';
            form.reset();
            
        })
    }

        
}
