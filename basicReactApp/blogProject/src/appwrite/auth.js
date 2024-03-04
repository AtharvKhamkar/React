import { Account, Client, ID } from "appwrite";
import conf from "../config/config.js";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    
    //function to signup user
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (userAccount) {
                //call another method
                return this.login({email,password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }


    //function to login user 
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
        }
    }


}
 

const authService = new AuthService();

export default authService