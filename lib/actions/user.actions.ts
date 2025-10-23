'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
        //mutation // database // make fetch
    } catch (error) {
        console.log(error);
    }
}

export const signUp = async (userData : SignUpParams) => {
    
    const {firstName, lastName, email, password} = userData;
    try {
        // create user account
        const { account } = await createAdminClient();
        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`,
        );
        const session = await account.createEmailPasswordSession(email,password);
        
        const cookieStore = await cookies();
        cookieStore.set('appwrite-session', session.secret, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
        });

        return parseStringify(newUserAccount);
    } catch (error) {
        console.log(error);
    }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
  } catch (error) {
    console.log(error)
    return null;
  }
}