class Pc {
    static all = []
    constructor(id, name) {
        this.id = id
        this.name = name
        Pc.all.push(this)
    }
}