import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {

  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndPoint)
      .setProject(conf.appwriteProjectId);
      this.account = new Account(this.client);
  }

  async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(
        ID.unique(), email, password, name
      );
      if(userAccount) {
        //after creating account login automatically for good UX
        return this.login({email, password})
      } else {
        return userAccount
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password}) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
      
    } catch (error) {
      throw error
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get()
    } catch(error) {
      return null;
    }
    return null
  }

  async logout() {
  try {
    await this.account.deleteSession("current");
  } catch (error) {
    throw error;
  }
}
  async forgotPassword(email) {
    try {
      return await this.account.createRecovery(
        email, `${window.location.origin}/reset-password`
      )
      
    } catch (error) {
      throw error
    }
  }

  async resetPassword(userId, secret, password) {
    return await this.account.updateRecovery(
      userId,
      secret,
      password
    )
  }

}

const authService = new AuthService();

export default authService;
