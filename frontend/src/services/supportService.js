const API =
  "https://mediroute-ai-gvqi.onrender.com/api/support";

export const submitSupportRequest =
  async (
    supportData
  ) => {

    const response =
      await fetch(
        `${API}/submit`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(
              supportData
            ),
        }
      );

    return response.json();
  };