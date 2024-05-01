export class Loginuser {


    userName: string | undefined;
    password: string | undefined;
    grant_type: string | undefined;
    client_id: string | undefined;
    constructor(
        userName?: string,
        password?: string,
        grant_type?: string,
        client_id?: string,
        ) {

        this.userName = userName;
        this.password = password;
        this.grant_type = grant_type;
        this.client_id = client_id;

    }
}