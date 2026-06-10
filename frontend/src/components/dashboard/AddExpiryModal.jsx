import {
  useState,
  useEffect,
} from "react";

import {
  X,
  Pill,
  Package,
  CalendarClock,
  Upload,
  ImageIcon,
} from "lucide-react";

import {
  createExpiryMedicine,
  updateExpiryMedicine,
} from "../../services/expiryService";
import {
  scanMedicineImage,
} from "../../services/ocrService";
import toast from "react-hot-toast";
const AddExpiryModal = ({
  open,
  setOpen,
  medicines,
  setMedicines,
  editingMedicine,
  setEditingMedicine,
}) => {

  const [formData, setFormData] =
    useState({
      medicineName: "",
      quantity: "",
      expiryDate: "",
    });

  const [selectedFile,
    setSelectedFile] =
    useState(null);
    const [ocrLoading,
  setOcrLoading] =
  useState(false);
  const [ocrResult,
  setOcrResult] =
  useState("");

  useEffect(() => {

    if (editingMedicine) {

      setFormData({
        medicineName:
          editingMedicine.medicineName,

        quantity:
          editingMedicine.quantity,

        expiryDate:
          editingMedicine.expiryDate?.split(
            "T"
          )[0],
      });

    } else {

      setFormData({
        medicineName: "",
        quantity: "",
        expiryDate: "",
      });
    }

  }, [editingMedicine]);

  if (!open)
    return null;
  const extractExpiryDate =
  (text) => {

    const lines =
      text
        .split("\n")
        .map(
          line =>
            line.trim()
        )
        .filter(Boolean);

    const expIndex =
      lines.findIndex(
        line =>
          line
            .toUpperCase()
            .includes("EXP")
      );

    if (
      expIndex === -1
    ) {
      return null;
    }

    const detectedDates =
      [];

    for (
      let i = expIndex + 1;
      i <
      Math.min(
        expIndex + 6,
        lines.length
      );
      i++
    ) {

      let match =
        lines[i].match(
          /\d{2}[\/\-]\d{2}[\/\-]\d{4}/
        );

      if (match) {

        detectedDates.push({
          value:
            match[0],
          type:
            "fullDate",
        });

      }

      match =
        lines[i].match(
          /\d{2}[\/\-]\d{4}/
        );

      if (match) {

        detectedDates.push({
          value:
            match[0],
          type:
            "monthYear",
        });

      }

      match =
        lines[i].match(
          /(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[.\s]?\d{4}/i
        );

      if (match) {

        detectedDates.push({
          value:
            match[0],
          type:
            "monthText",
        });

      }

    }

    if (
      detectedDates.length
    ) {

      return detectedDates[
        detectedDates.length - 1
      ];

    }

    return null;
  };
const convertToDateInput =
  (detected) => {

    const monthMap = {
      JAN: "01",
      FEB: "02",
      MAR: "03",
      APR: "04",
      MAY: "05",
      JUN: "06",
      JUL: "07",
      AUG: "08",
      SEP: "09",
      OCT: "10",
      NOV: "11",
      DEC: "12",
    };

    if (
      detected.type ===
      "fullDate"
    ) {

      const [
        day,
        month,
        year,
      ] =
        detected.value.split(
          /[\/\-]/
        );

      return `${year}-${month}-${day}`;
    }

    if (
      detected.type ===
      "monthYear"
    ) {

      const [
        month,
        year,
      ] =
        detected.value.split(
          /[\/\-]/
        );

      return `${year}-${month}-01`;
    }

    if (
      detected.type ===
      "monthText"
    ) {

      const [
        month,
        year,
      ] =
        detected.value
          .replace(
            ".",
            " "
          )
          .split(" ");

      return `${year}-${monthMap[month]}-01`;
    }

    return "";
  };
const handleImageOCR =
  async (file) => {

    try {

      setOcrLoading(true);

      const data =
        await scanMedicineImage(
          file
        );



      const text =
        data.text;

      

      const expiry =
        extractExpiryDate(
          text
        );

     if (
  expiry
) {

  setOcrResult(
    expiry.value
  );

  const formattedDate =
    convertToDateInput(
      expiry
    );

  setFormData(
    (prev) => ({
      ...prev,
      expiryDate:
        formattedDate,
    })
  );

}


else {

        setOcrResult(
          "No expiry detected"
        );
      }

    } catch (error) {

      

      setOcrResult(
        "OCR Failed"
      );

    } finally {

      setOcrLoading(false);
    }
  };

  const handleSubmit =
    async () => {

      if (
        !formData.medicineName ||
        !formData.quantity ||
        !formData.expiryDate
      ) {
        toast.error(
  "Please fill all fields"
);
        return;
      }

      try {

        if (
          editingMedicine
        ) {

          const updated =
            await updateExpiryMedicine(
              editingMedicine._id,
              formData
            );

          setMedicines(
            medicines.map(
              (med) =>
                med._id ===
                updated._id
                  ? updated
                  : med
            )
          );

        } else {

          const created =
              toast.success("Medicine Added")
            await createExpiryMedicine(
              formData
            );

          setMedicines([
            ...medicines,
            created,
          ]);
        }

        setOpen(false);

        setEditingMedicine(
          null
        );

        setSelectedFile(
          null
        );

        setFormData({
          medicineName: "",
          quantity: "",
          expiryDate: "",
        });

      } catch (error) {

        
      }
    };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md">

<div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[36px] bg-white shadow-2xl">
        {/* HEADER */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5 text-white">

          <button
            onClick={() => {

              setOpen(false);

              setEditingMedicine(
                null
              );
            }}
            className="absolute right-4 top-4 rounded-xl bg-white/20 p-2 transition hover:bg-white/30"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-white/20 p-3">
              <Pill size={20} />
            </div>

            <div>

              <h2 className="text-2xl font-black">
                {editingMedicine
                  ? "Edit Medicine"
                  : "Add Medicine"}
              </h2>

              <p className="text-sm text-blue-100">
                Medicine Inventory
              </p>

            </div>

          </div>

        </div>

        {/* BODY */}
        <div className="space-y-4 p-6">

          {/* NAME */}
          <InputField
            icon={Pill}
            placeholder="Medicine Name"
            value={
              formData.medicineName
            }
            onChange={(value) =>
              setFormData({
                ...formData,
                medicineName:
                  value,
              })
            }
          />

          {/* QUANTITY */}
          <InputField
            icon={Package}
            type="number"
            placeholder="Quantity"
            value={
              formData.quantity
            }
            onChange={(value) =>
              setFormData({
                ...formData,
                quantity:
                  value,
              })
            }
          />

          {/* EXPIRY */}
          <InputField
            icon={
              CalendarClock
            }
            type="date"
            value={
              formData.expiryDate
            }
            onChange={(value) =>
              setFormData({
                ...formData,
                expiryDate:
                  value,
              })
            }
          />

          {/* OCR SECTION */}
 {/* OCR SECTION */}
<div className="rounded-[28px] border border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">

  <div className="flex items-center gap-2">

    <ImageIcon
      size={18}
      className="text-blue-600"
    />

    <h3 className="font-bold text-gray-800">
      Smart OCR Scanner
    </h3>

  </div>

  <p className="mt-2 text-sm text-gray-500">
    Upload a medicine strip, bottle, or box image.
    OCR will automatically detect the expiry date.
  </p>

  <p className="mt-1 text-xs font-medium text-orange-600">
    Maximum file size: 1 MB
  </p>

  <label className="mt-5 block cursor-pointer">

    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">

      <Upload
        size={32}
        className="text-blue-600"
      />

      <p className="mt-3 font-semibold text-gray-800">
        Upload Medicine Image
      </p>

      <p className="text-xs text-gray-500">
        JPG • PNG • JPEG
      </p>

    </div>

    <input
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {

        const file =
          e.target.files[0];

        if (!file)
          return;

        if (
          file.size >
          1024 * 1024
        ) {

          toast.error(
            "Image size must be less than 1 MB"
          );

          return;
        }

        setSelectedFile(
          file
        );

        handleImageOCR(
          file
        );

      }}
    />

  </label>

  {selectedFile && (

    <div className="mt-4 rounded-xl bg-blue-100 px-4 py-3">

      <p className="text-sm font-medium text-blue-700">

        📷 Selected:
        {" "}
        {selectedFile.name}

      </p>

    </div>

  )}

  {ocrLoading && (

    <div className="mt-4 rounded-xl bg-blue-100 p-4">

      <p className="text-sm font-medium text-blue-700">

        🔍 Reading medicine image...

      </p>

    </div>

  )}

  {ocrResult &&
    !ocrLoading && (

    <div
      className={`mt-4 rounded-xl border p-4 ${
        ocrResult ===
        "No expiry detected"
          ? "border-red-200 bg-red-50"
          : "border-green-200 bg-green-50"
      }`}
    >

      <p
        className={`text-sm font-bold ${
          ocrResult ===
          "No expiry detected"
            ? "text-red-700"
            : "text-green-700"
        }`}
      >

        {ocrResult ===
        "No expiry detected"
          ? "⚠ OCR Detection Failed"
          : "✅ OCR Detection Successful"}

      </p>

      <p
        className={`mt-2 ${
          ocrResult ===
          "No expiry detected"
            ? "text-red-600"
            : "text-green-600"
        }`}
      >

        {ocrResult}

      </p>

      <p className="mt-2 text-xs text-gray-500">

        {ocrResult ===
        "No expiry detected"
          ? "Please enter the expiry date manually."
          : "Expiry field has been filled automatically. You may edit it before saving."}

      </p>

    </div>

  )}

</div>
</div>
        {/* FOOTER */}
        <div className="flex gap-3 border-t border-gray-100 p-5">

          <button
            onClick={() =>
              setOpen(false)
            }
            className="flex-1 rounded-2xl bg-gray-100 py-3 font-semibold text-gray-700 transition hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={
              handleSubmit
            }
            className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

const InputField = ({
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">

      <Icon
        size={20}
        className="text-blue-600"
      />

      <input
        type={type}
        value={value}
        placeholder={
          placeholder
        }
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="w-full bg-transparent text-black outline-none"
      />

    </div>
  );
};

export default AddExpiryModal;