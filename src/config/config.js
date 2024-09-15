const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATEBASE_ID),
    packageCollectionId: String(import.meta.env.VITE_APPWRITE_PACKAGE_COLLECTION),
    hotelCollectionId: String(import.meta.env.VITE_APPWRITE_HOTEL_COLLECTION),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default config;