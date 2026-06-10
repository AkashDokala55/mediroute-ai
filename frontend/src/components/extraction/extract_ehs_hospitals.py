import pdfplumber
import json

PDF_PATH = "pdfs/ehs_applicable_hospitals.pdf"

OUTPUT_PATH = "output/ehsHospitals.json"

SCHEME_NAME = "EHS"

hospitals = []

id_counter = 1


def clean(value):

    if value is None:
        return ""

    return (
        str(value)
        .replace("\n", " ")
        .replace("  ", " ")
        .strip()
    )


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

                try:

                    # skip headers
                    if (
                        "Name of Hospital"
                        in str(row)
                    ):
                        continue

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

                    specialities = clean(
                        row[4]
                    )

                    contact = clean(
                        row[5]
                    )

                    hospital = {

                        "id":
                            id_counter,

                        "scheme":
                            SCHEME_NAME,

                        "hospitalName":
                            hospital_name,

                        "state":
                            state,

                        "district":
                            district,

                        "mandal":
                            mandal,

                        "specialities":
                            [
                                s.strip().lower()
                                for s in specialities.split(",")
                                if s.strip()
                            ],

                        "contact":
                            contact,

                        "searchText":
                            f"{hospital_name} {district} {specialities}".lower(),

                        "sourcePage":
                            page_number,
                    }

                    hospitals.append(
                        hospital
                    )

                    id_counter += 1

                except Exception as e:

                    print(
                        f"Error: {e}"
                    )

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
    f"\n✅ Total Hospitals Extracted: {len(hospitals)}"
)