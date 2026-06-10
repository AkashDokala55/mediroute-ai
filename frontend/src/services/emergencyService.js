const API =
  "https://mediroute-ai-1gb5.onrender.com/api/emergency";

const getToken = () =>
  localStorage.getItem("token");

export const getEmergencyCards =
  async () => {

    const response =
      await fetch(API, {
        headers: {
          Authorization:
            `Bearer ${getToken()}`,
        },
      });

    return response.json();
  };

export const createEmergencyCard =
  async (cardData) => {

    const response =
      await fetch(
        "https://mediroute-ai-1gb5.onrender.com/api/emergency",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${
                localStorage.getItem(
                  "token"
                )
              }`,
          },

          body:
            JSON.stringify(
              cardData
            ),
        }
      );

    return response.json();
  };
export const deleteEmergencyCard =
  async (id) => {

    const response =
      await fetch(
        `${API}/${id}`,
        {

          method:
            "DELETE",

          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.json();
  };