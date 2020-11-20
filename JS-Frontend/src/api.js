class Api {


    apiUrl = "http://localhost:3000"

    getPcs() {
        return fetch(`${this.apiUrl}/pcs`)
            .then(resp => resp.json())
            .then(data => {
                for(let pcObj of data) {
                    let pc = new Pc(pcObj)
                    Controller.getParts(pcObj)
                    pc.createCard()
                }
            })
            .catch(err => alert(err))
        
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
            Controller.renderPcParts(newPcObj)
            pc.createCard();
            plusDivs(0);
        })
    }

    deletePc(pcObj) {
        return fetch(`${this.apiUrl}/pc/${pcObj.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'            
            },
            body: JSON.stringify({})
    })
    .then(resp => resp.json())
    .then(data => console.log(data))

}