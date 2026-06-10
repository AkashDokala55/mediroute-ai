import pdfplumber
import json

# -------------------------
# CONFIG
# -------------------------

PDF_PATH = "pdfs/aarogyasri_hospitals_list.pdf"

OUTPUT_PATH = "output/aarogyasriHospitals.json"

SCHEME_NAME = "Aarogyasri"

# -------------------------
# CLEAN FUNCTION
# -------------------------

def clean(value):

    if value is None:
        return ""

    return (
        str(value)
        .replace("\n", " ")
        .strip()
    )

# -------------------------
# EXTRACTION
# -------------------------

hospitals = []

id_counter = 1

with pdfplumber.open(PDF_PATH) as pdf:

    for page_number, page in enumerate(
        pdf.pages,
        start=1
    ):

        print(
            f"Processing Page {page_number}"
        )

        tables = page.extract_tables()

        for table in tables:

            for row in table:

                if not row:
                    continue

                # skip headers
                if row[0] in [
                    "Name of Hospital",
                    "Hospital Name",
                    "Code",
                    None,
                    "",
                ]:
                    continue

                try:

                    hospital_name = clean(
                        row[0]
                    )

                    state = clean(
                        row[1]
                    )

                    district = clean(
                        row[2]
                    )

                    mandal = clean(
                        row[3]
                    )

                    specialities = [
                        s.strip().lower()
                        for s in clean(
                            row[4]
                        ).split(",")
                        if s.strip()
                    ]

                    address = clean(
                        row[5]
                    )

                    contact = clean(
                        row[6]
                    )

                    hospital = {
                        "id": id_counter,

                        "scheme": SCHEME_NAME,

                        "hospitalName":
                            hospital_name,

                        "state": state,

                        "district":
                            district,

                        "mandal": mandal,

                        "specialities":
                            specialities,

                        "address":
                            address,

                        "contact":
                            contact,

                        "searchText":
                            f"{hospital_name} {district} {' '.join(specialities)}".lower(),

                        "sourcePage":
                            page_number,
                    }

                    hospitals.append(
                        hospital
                    )

                    id_counter += 1

                except Exception as e:

                    print(
                        f"Error on page {page_number}: {e}"
                    )

# -------------------------
# SAVE JSON
# -------------------------

with open(
    OUTPUT_PATH,
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        hospitals,
        f,
        indent=2,
        ensure_ascii=False
    )

print(
    f"\nExtraction Completed ✅"
)

print(
    f"Total Hospitals: {len(hospitals)}"
)