export interface ITableData {
    id: number
    name: string
    username: string
    email: string
}

export class TableData implements ITableData {
    constructor(public id, public name, public username, public email) {

    }

    getData(): ITableData {
        return this.email;
    };
}
