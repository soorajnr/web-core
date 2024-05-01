export class Session {
   // userID: string | null = null;
    userName: string | null = null;
    //staffID: string | null = null;
    accessToken: string | null = null;
    refreshToken: string | null = null;
    createdDate: Date | null = null;
    updatedDate: Date | null = null;

    isNew(): boolean {
        if (this.createdDate != null && this.updatedDate === null) {
            return true;
        }
        return false;
    }
}