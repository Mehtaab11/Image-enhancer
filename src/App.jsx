import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center py-8 px-4 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold pt-6 text-gray-800">AI Image Enhancer</h1>
        <p className="text-lg text-gray-600 mt-4">
          Upload your images and enhance them with AI in less than a minute.
        </p>
      </div>
      <Home />
      <div className="text-lg mt-6 text-gray-500">Created by Mehtaab.</div>
      
    </div>
  );
};

export default App;
