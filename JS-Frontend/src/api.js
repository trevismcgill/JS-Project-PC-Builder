class Api {


    apiUrl = "http://localhost:3000"

    getPcs() {
        return fetch(`${this.apiUrl}/pcs`)
            .then(resp => resp.json())
            .then(data => {
                for(let pcObj of data) {
                    let pc = new Pc(pcObj)
                }
                return Pc.all
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
            renderPcParts(newPcObj)
            createCard(pc);
            plusDivs(0);
        })
    }

    deletePc(pcObj) {
        return fetch(`${this.apiUrl}/pcs/${pcObj.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'  
            },
            body: JSON.stringify(pcObj)   
        })
        .then(resp => resp.json())
        .then(deletedPc => {
           const pcLeftovers = Pc.all.filter((pc) => {
                return pc.id !== deletedPc.id
            })
            Pc.all = pcLeftovers
        })
        
    }   

}