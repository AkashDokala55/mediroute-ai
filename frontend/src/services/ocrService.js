import axios from "axios";

const API =
  "https://mediroute-ai-gvqi.onrender.com/api/ocr";

export const scanMedicineImage =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "image",
      file
    );

    const response =
      await axios.post(
        `${API}/scan`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };