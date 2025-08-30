export const fetchSummary = async (requestData) => {
    const API_URL = "https://gemini-api-snippet-blog.onrender.com/api/summarize";
    try {
        const response = await fetch(API_URL, {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(requestData),
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching summary:", error);
        throw error;
    }
};
