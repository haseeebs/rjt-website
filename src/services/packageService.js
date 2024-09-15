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
    
    // Fetch one package of each type
    async fetchUniqueTypePackages() {
        try {
            const response = await this.databases.listDocuments(
                config.databaseId,
                config.packageCollectionId
            );

            const uniquePackages = response.documents.reduce((acc, pkg) => {
                // If this type doesn't exist in accumulator, add it
                if (!acc.some(existingPkg => existingPkg.type === pkg.type)) {
                    acc.push(pkg);
                }
                return acc;
            }, []);

            return uniquePackages;
        } catch (error) {
            console.error("Error fetching unique type packages:", error);
            throw error;
        }
    }

}

const packageServices = new PackageServices();

export default packageServices;