const API =
  "https://mediroute-ai-1gb5.onrender.com/api/medicine-expiry";

const getToken = () =>
  localStorage.getItem("token");

export const getExpiryMedicines =
  async () => {

    const response =
      await fetch(API, {
        headers: {
          Authorization:
            `Bearer ${getToken()}`
        }
      });

    return response.json();
  };

export const createExpiryMedicine =
  async (medicineData) => {

    const response =
      await fetch(API, {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${getToken()}`
        },

        body:
          JSON.stringify(
            medicineData
          )
      });

    return response.json();
  };

export const updateExpiryMedicine =
  async (
    id,
    medicineData
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
              `Bearer ${getToken()}`
          },

          body:
            JSON.stringify(
              medicineData
            )
        }
      );

    return response.json();
  };

export const deleteExpiryMedicine =
  async (id) => {

    const response =
      await fetch(
        `${API}/${id}`,
        {

          method:
            "DELETE",

          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.json();
  };