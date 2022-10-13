class Todo {
    private _id: string;
    private _name: string;

    constructor(name: string) {
        this._name = name;
        this._id = Math.floor(Math.random() * 100).toString();
    }

    public getId() {
        return this._id;
    }

    public setName(name: string) {
        this._name = name;
    }
    public getName() {
        return this._name;
    }
}
export default Todo;
