import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(process.env.APPWRITE_PUBLIC_URL)
    .setProject(process.env.APPWRITE_PROJECT_ID);

export const account = new Account(client);
export { ID } from 'appwrite';
