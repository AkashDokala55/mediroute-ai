import pdfplumber
import json

# -------------------------
# CONFIG
# -------------------------

PDF_PATH = "pdfs/aaroyasri_applicable_seva.pdf"

OUTPUT_PATH = "output/aarogyasriTreatments.json"

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

treatments = []

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
                    "Code",
                    None,
                    "",
                ]:
                    continue

                try:

                    speciality_code = clean(
                        row[0]
                    )

                    speciality = clean(
                        row[1]
                    )

                    treatment_code = clean(
                        row[2]
                    )

                    treatment_name = clean(
                        row[3]
                    )

                    treatment_type = clean(
                        row[4]
                    )

                    package_amount = clean(
                        row[5]
                    )

                    aasara_amount = clean(
                        row[6]
                    )

                    pre = clean(
                        row[7]
                    )

                    post = clean(
                        row[8]
                    )

                    treatment = {
                        "id": id_counter,

                        "scheme": SCHEME_NAME,

                        "specialityCode":
                            speciality_code,

                        "speciality":
                            speciality,

                        "treatmentCode":
                            treatment_code,

                        "treatmentName":
                            treatment_name,

                        "treatmentType":
                            treatment_type,

                        "packageAmount":
                            int(
                                package_amount
                            ) if package_amount.isdigit()
                            else 0,

                        "aasaraAmount":
                            int(
                                aasara_amount
                            ) if aasara_amount.isdigit()
                            else 0,

                        "keywords": [
                            word.lower()
                            for word in treatment_name.split()
                        ],

                        "searchText":
                            f"{speciality} {treatment_name}".lower(),

                        "preInvestigations": [
                            p.strip()
                            for p in pre.split(",")
                            if p.strip()
                        ],

                        "postInvestigations": [
                            p.strip()
                            for p in post.split(",")
                            if p.strip()
                        ],

                        "sourcePage":
                            page_number,
                    }

                    treatments.append(
                        treatment
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
        treatments,
        f,
        indent=2,
        ensure_ascii=False
    )

print(
    f"\nExtraction Completed ✅"
)

print(
    f"Total Treatments: {len(treatments)}"
)