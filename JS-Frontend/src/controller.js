class Controller {
    pcs = []
    parts = []
    categories = []
    apiUrl = "http://localhost:3000"
    getCategories() {
        fetch(`${this.apiUrl}/categories`)
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(err => alert(err))
    }

    getParts() {
        fetch(`${this.apiUrl}/parts`)
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(err => alert(err))
    }

    // getPc() {
    //     fetch(`${this.apiUrl}/pc/`)
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp))
    //     .catch(err => alert(err))
    // }
}