import { Client, Account, Storage, Databases } from 'appwrite';
import conf from '../conf/conf';

const  client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

const account = new Account(client) 
const database = new Databases(client)
const storage = new Storage (client)   
export { account, database, storage};
export default client;