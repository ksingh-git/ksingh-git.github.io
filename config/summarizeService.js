/**
 * Sends a POST request to the Gemini API to fetch a summary of the provided content.
 *
 * @param {Object} requestData - The request payload containing the text to be summarized.
 * @returns {Promise<Object>} The response data containing the summary.
 * @throws {Error} If the request fails or the response is not ok.
 */
export const fetchSummary = async (requestData) => {
  const API_URL = "https://gemini-api-snippet-blog.onrender.com/api/summarize";
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching summary:", error);
    throw error;
  }
};
