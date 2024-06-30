import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
} from "react-native-appwrite";

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sprouted',
    projectId: '6680a4a00019e050ad59',
    databaseId: '6680a5ae002c9fd6c13c',
    userCollectionId: '6680a5c90019abf51047',
    postCollectionId: '6680a65c001ec4403ef4',
    storageId: '6680a715001036ef8da4'
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    postCollectionId,
    storageId
} = config;

const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(), 
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl,
            }
        );

        return newUser;

    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

// Sign In
export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        console.log("in the function")
        const currentAccount = await account.get();
        console.log(currentAccount);

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        );
        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const getAllPosts = async() => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            postCollectionId,
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error)
    }
}