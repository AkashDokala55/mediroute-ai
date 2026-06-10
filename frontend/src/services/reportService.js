const API =
  "https://mediroute-ai-1gb5.onrender.com/api/reports";

const getToken = () =>
  localStorage.getItem("token");

export const getReports =
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

export const uploadFile =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await fetch(
        `${API}/upload`,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${getToken()}`,
          },

          body:
            formData,
        }
      );

    return response.json();
  };

export const createReport =
  async (
    reportData
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
            reportData
          ),
      });

    return response.json();
  };

export const removeReport =
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