import { Client, Databases, ID, Storage } from "appwrite";
import config from "../config/config";

class PackageServices {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.projectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // Fetch all packages
    async fetchPackages() {
        try {
            const response = await this.databases.listDocuments(
                config.databaseId,
                config.packageCollectionId
            );
            return response;
        } catch (error) {
            console.error("Error fetching pacakges:", error)
            throw error;
        }
    }

    // Add a new package
    async addPacakges({ type, makkahHotelId, madinahHotelId, durations, inclusions, exclusions, travelDate = null }) {
        try {
            const packageData = {
                type,
                makkahHotelId,
                madinahHotelId,
                durations,
                inclusions: inclusions || [],
                exclusions: exclusions || [],
                travelDate
            }
            console.log(packageData);
            // const response = await this.databases.createDocument(
            //     config.databaseId,
            //     config.packageCollectionId,
            //     ID.unique(),
            //     packageData
            // );
            // return response;
        } catch (error) {
            console.error("Error adding package:", error);
            throw error;
        }
    }

    // Update an existing package
    async updatePackage(packageId, updateData) {
        try {
            const response = await this.databases.updateDocument(
                config.databaseId,
                config.packageCollectionId,
                packageId,
                updateData
            );
            return response;
        } catch (error) {
            console.error("Error updating package:", error);
            throw error;
        }
    }

    // Delete a package
    async deletePackage(packageId) {
        try {
            await this.databases.deleteDocument(
                config.databaseId,
                config.packageCollectionId,
                packageId
            );
            return true;
        } catch (error) {
            console.error("Error deleting package:", error);
            throw error;
        }
    }

    // File upload service
    async fileUpload(file) {
        try {
            const response = await this.storage.createFile(
                config.bucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    }

    // Delete file
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.bucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            throw error;
        }
    }

    // Get file preview URL
    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.bucketId,
                fileId,
                400, // width
                300, // height
            );
        } catch (error) {
            console.error("Error getting file preview:", error);
            throw error;
        }
    }

     // Get file view URL
     getFileView(fileId) {
        try {
            return this.storage.getFileView(
                config.bucketId,
                fileId
            );
        } catch (error) {
            console.error("Error getting file view:", error);
            throw error;
        }
    }

    // List all files
    async listFiles() {
        try {
            const response = await this.storage.listFiles(
                config.bucketId
            );
            return response;
        } catch (error) {
            console.error("Error listing files:", error);
            throw error;
        }
    }
}

const packageServices = new PackageServices();

export default packageServices;