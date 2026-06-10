const API =
  "https://mediroute-ai-gvqi.onrender.com/api/medicines";

const getToken = () =>
  localStorage.getItem(
    "token"
  );

export const getMedicines =
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

export const createMedicine =
  async (medicineData) => {

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
            medicineData
          ),
      });

    return response.json();
  };

export const updateMedicine =
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
              `Bearer ${getToken()}`,
          },

          body:
            JSON.stringify(
              medicineData
            ),
        }
      );

    return response.json();
  };

export const deleteMedicine =
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
export const updateMedicineStatus =
  async (
    id,
    data
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
  JSON.stringify(data),
        }
      );

    return response.json();
  };