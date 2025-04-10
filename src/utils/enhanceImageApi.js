import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY; // API key for authentication
const BASE_URL = import.meta.env.VITE_BASE_URL;

const MAXIMUM_RETRIES = 20; // Maximum number of retries for polling
export const enhnacedImageAPI = async (file) => {

    try {

        const taskId = await uplaodImage(file);
        console.log("Task ID:", taskId);

        const enhnacedImageData = await pollForEnhancedImage(taskId);
        console.log("Enhanced Image Data:", enhnacedImageData);

        return enhnacedImageData;                                    // Return the enhanced image data
    } catch (error) {
        console.error("Error enhancing image:", error);     // Log the error for debugging
        throw error;                                        // Rethrow the error to be handled by the caller
    }

}


const uplaodImage = async (file) => {
    //  code to upload image
    // '/api/tasks/visual/scale' --post

    const formData = new FormData();
    formData.append('image_file', file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers:
        {
            "Content-Type": "multipart/form-data",
            "X-API-Key": API_KEY,
        }
    }
    )

    if (!data?.data?.task_id) {
        throw new Error("Task ID not found in the response data"); // Throw an error if task_id is not found
    }

    return data.data.task_id; // Return the task ID from the response


}
const fetchEnhancedImage = async (task_id) => {
    // fetch the enhanced image from the API

    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${task_id}`, {
        headers:
        {
            "X-API-Key": API_KEY,
        }
    }
    )

    console.log(data.data.image)

    return data.data; // Return the enhanced image URL from the response

}

const pollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log("Processing the image...");

        if (retries >= 20) {
            throw new Error("Max retries reached. Please try again later.");
        }

        // Wait for 2 seconds before retrying

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return pollForEnhancedImage(taskId, retries + 1); // Recursive call to poll again
    }
    console.log("Enhanced Image URL: ", result);

    return result
}   