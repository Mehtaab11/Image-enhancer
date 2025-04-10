const ImageUpload = (props) => {
  const showImageHandler = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    if (file) {
      props.uploadImageHandler(file);
    }
    // setuploadImage(e.target.files[0]);
    // console.log(uploadImage);
    // setuploadImage(e.target.files[0]);
    // e.target.files[0] && setuploadImage(e.target.files[0]);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition duration-200"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden "
          onChange={showImageHandler}
        />

        <span className="text-lg font-medium text-gray-600">
          Click and drag to upload your image{" "}
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
