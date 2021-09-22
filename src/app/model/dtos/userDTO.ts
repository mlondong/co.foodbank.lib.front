
export class UserDTO {
    public id: string;
    public name: string;
    public email: string;
    public phones: string;

    public constructor(id: string, name: string, email: string, phones: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phones = phones;
    }

}