// This serves no purpose currently
class Part {
    static all = []
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.category = obj.category
        Part.all.push(this)
    }
    
}