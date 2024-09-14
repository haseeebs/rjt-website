const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATEBASE_ID),
    collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default config;