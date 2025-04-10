import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhnacedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState("");
  const [enhancedImage, setEnhancedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      // Call the API to enhance the image here
      const enhancedURL = await enhnacedImageAPI(file);
      console.log(enhancedURL);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.error("Error enhancing image:", error);
      setLoading(false);
      alert("Error while enhancing the image. Please try again.");
    }
  };

  console.log(enhancedImage.image)
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
