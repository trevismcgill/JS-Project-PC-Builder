class Pc {
    static all = []
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.parts = obj.parts
        Pc.all.push(this)
    }
}