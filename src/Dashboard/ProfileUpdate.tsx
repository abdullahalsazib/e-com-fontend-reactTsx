import { useState } from "react";
import { uploadProfilePicture } from "../api/Auth";

const UpdateProfile = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show image preview
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image!");

    try {
      const response = await uploadProfilePicture(image);
      alert("Profile picture updated!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <div className="bg-sky-100 flex items-center justify-center">
      <div>
        <h2>Update Profile Picture</h2>
        <input />
        {preview && <img src={preview} alt="Preview" width="100" />}

        <label
          htmlFor="uploadFile1"
          className="flex bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 mr-2 fill-white inline"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
              data-original="#000000"
            />
            <path
              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
              data-original="#000000"
            />
          </svg>
          Upload
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="uploadFile1"
            className="hidden"
          />
        </label>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default UpdateProfile;
