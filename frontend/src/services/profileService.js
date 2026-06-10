const API =
  "https://mediroute-ai-1gb5.onrender.com/api/profiles";

const getToken = () =>
  localStorage.getItem("token");

export const getProfiles =
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

export const createProfile =
  async (
    profileData
  ) => {

    const response =
      await fetch(API, {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${getToken()}`,
        },

        body:
          JSON.stringify(
            profileData
          ),
      });

    return response.json();
  };

export const removeProfile =
  async (id) => {

    const response =
      await fetch(
        `${API}/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },
        }
      );

    return response.json();
  };
  export const updateProfile =
  async (
    id,
    profileData
  ) => {

    const response =
      await fetch(
        `${API}/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${getToken()}`,
          },

          body:
            JSON.stringify(
              profileData
            ),
        }
      );

    return response.json();
  };