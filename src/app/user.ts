export class user {
    userId: number;
    login: string;
    name: string;
    lastName: string;
    password: string;
    role: number;

    constructor(userId: number, login: string, name: string, lastName: string, password: string, role: number) {
        this.login = login;
        this.name = name;
        this.lastName = lastName;
        this.role = role;
        this.password = password;
        this.userId = userId;
    }
}