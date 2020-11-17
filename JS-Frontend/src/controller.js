class Controller {
    // pcs = []
    // parts = []
    // categories = []
    apiUrl = "http://localhost:3000"
    getCategories() {
        fetch(`${this.apiUrl}/categories`)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => alert(err))
    }

    getParts() {
        fetch(`${this.apiUrl}/parts`)
        .then(resp => resp.json())
        .then(data => data.forEach(part => {
            Part.all.push(new Part(part.name, part.category.name)
        )}))
        .then(console.log(Part.all))
        .catch(err => alert(err))
    }

    // getPc() {
    //     fetch(`${this.apiUrl}/pc/`)
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp))
    //     .catch(err => alert(err))
    // }
}