import React from "react";
import Loading from "./Loading";
import { BiDownArrow, BiDownload } from "react-icons/bi";

const ImagePreview = (props) => {
  console.log(props);
  return (
    <div className="mt-8 grid grid-cols-1 w-[70%] md:w-[80%] xl:w-3/5 md:grid-cols-2 gap-6">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2  ">
          Original Image
        </h2>

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Original Image"
            className="w-full h-full object-cover "
          />
        ) : (
          <div className="flex h-80 items-center justify-center text-gray-500 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhaced Image */}

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-yellow-800 text-white py-2  ">
          Enhanced Image
        </h2>
        {props.enhanced ? (
          <div className="relative ">
            {" "}
            <img
              src={props.enhanced}
              alt="Enhnaced Image"
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-4 right-4 ">
              <a
                href={props.enhanced}
                download={"enhanced_image.png"}
                className="bg-yellow-700 text-white w-20 h-20 rounded-xl shadow hover:bg-yellow-600 transition"
              > <BiDownload className="text-xl text-yellow-500" /> </a>
            </div>
          </div>
        ) : props.loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-80 text-gray-500 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
