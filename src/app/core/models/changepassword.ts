export class ChangePassword {
    
   
    userName: string | undefined;
    oldPassword: string | undefined;
    newPassword: string | undefined;

    constructor(
        userName?: string,
        oldPassword?: string,
        newPassword?: string,
        ) {

        this.userName = userName;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
       
    }
}