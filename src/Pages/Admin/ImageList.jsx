import { useEffect, useMemo, useState } from "react";
import packageServices from "../../services/packageService";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeImages, setAllImages } from "../../store/packageSlice";

const ImageList = () => {
  const dispatch = useDispatch();
  const { allImages } = useSelector((store) => store.package);
  const [loading, setLoading] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    return toast.promise(
      (async () => {
        const fetchedImages = await packageServices.listFiles();

        if (!fetchedImages.files || fetchedImages.total === 0) {
          toast.error("No images found...");
          dispatch(setAllImages([]));
          return [];
        }

        dispatch(setAllImages(fetchedImages.files));
        return fetchedImages.files;
      })(),
      {
        loading: "Fetching all images...",
        success: "All images fetched successfully",
        error: "Error fetching images",
      }
    ).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (allImages.length === 0) {
      fetchImages();
    }
  }, [allImages.length]);

  const handleImageDelete = async () => {
    if (!confirmDelete) return;

    try {
      await packageServices.deleteFile(confirmDelete);
      dispatch(removeImages(confirmDelete));
      toast.success("Image deleted successfully...");
    } catch (error) {
      toast.error("Error deleting image...");
    } finally {
      setConfirmDelete(null);
    }
  };

  const imageList = useMemo(
    () =>
      allImages.map((image) => (
        <div
          key={image.$id}
          className="border border-lime-200 rounded-xl p-2 relative"
        >
          <img
            src={packageServices.getOptimizedFilePreview(image.$id)}
            alt="Food"
            className="w-full h-40 object-cover rounded-lg mb-2"
          />
          <button
            type="button"
            onClick={() => setConfirmDelete(image.$id)}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      )),
    [allImages]
  );

  return (
    <div className="h-screen">
      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this image?</p>
            <div className="flex justify-between">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleImageDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load New Images Button */}
      <div className="text-center py-4">
        <button
          onClick={fetchImages}
          disabled={loading}
          className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Loading..." : "Load New Images"}
        </button>
      </div>

      {/* Image Grid */}
      {allImages.length === 0 ? (
        <div className="text-center py-8 text-lime-600">
          No food images available. Click 'Load New Images' to fetch images.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageList}
        </div>
      )}
    </div>
  );
};

export default ImageList;