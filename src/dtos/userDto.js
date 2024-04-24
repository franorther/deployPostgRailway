export class UserDto {
    id;
    name;
    email;
    constructor(id, email, name) {
        this.id = id;
        this.email = email;
        this.name = name;
    }
}