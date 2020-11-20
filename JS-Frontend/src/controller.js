class Controller {
    pcs = []
    

    // getParts(pcObj) {
    //     let pcParts = pcObj.parts
    //     for(let partObj of pcParts) {
    //         new Part(partObj)
    //     }
    // }

    renderPcParts(pcObj) {
        let ul = document.createElement('ul')
        let pcParts = pcObj.parts
        pcParts.forEach(part => {
            let li = document.createElement('li');
            li.innerText = `${part.category} - ${part.name}`
            ul.appendChild(li)
        })
        let addParts = document.querySelector('#test1')
        addParts.innerHTML = '<h1>See your build here:</h1>'
        addParts.appendChild(ul)
    }

    

        
}
