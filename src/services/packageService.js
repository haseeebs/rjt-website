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
                config.collectionId
            );
            return response;
        } catch (error) {
            console.error("Error fetching pacakges:", error)
            throw error;
        }
    }

    // Add a new package
    async addPacakges({ type, makkahHotelId, madinahHotelId, durations, inclusions, exclusions, date = null }) {
        try {
            const packageData = {
                type,
                makkahHotelId,
                madinahHotelId,
                durations,
                inclusions: inclusions || [],
                exclusions: exclusions || [],
                date
            }

            const response = await this.databases.createDocument(
                config.databaseId,
                config.collectionId,
                ID.unique(),
                packageData
            );
            return response;
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
                config.collectionId,
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
                config.collectionId,
                packageId
            );
            return true;
        } catch (error) {
            console.error("Error deleting package:", error);
            throw error;
        }
    }
}

const packageServices = new PackageServices();

export default packageServices;