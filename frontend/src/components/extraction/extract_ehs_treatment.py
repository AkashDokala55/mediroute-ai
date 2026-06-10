import pdfplumber
import json

PDF_PATH = "pdfs/ehs_list.pdf"

OUTPUT_PATH = "output/ehsTreatments.json"

SCHEME_NAME = "EHS"

treatments = []

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
                        "Procedure Name"
                        in str(row)
                    ):
                        continue

                    treatment = {

                        "id":
                            id_counter,

                        "scheme":
                            SCHEME_NAME,

                        "procedureCode":
                            clean(row[1]),

                        "specialityCode":
                            clean(row[2]),

                        "treatmentName":
                            clean(row[3]),

                        "preauthEvidence":
                            clean(row[4]),

                        "claimEvidence":
                            clean(row[5]),

                        "semiPrivateNonNABH":
                            clean(row[6]),

                        "privateNonNABH":
                            clean(row[7]),

                        "semiPrivateNABH":
                            clean(row[8]),

                        "privateNABH":
                            clean(row[9]),

                        "keywords": [
                            word.lower()
                            for word in clean(
                                row[3]
                            ).split()
                        ],

                        "searchText":
                            clean(
                                row[3]
                            ).lower(),

                        "sourcePage":
                            page_number,
                    }

                    treatments.append(
                        treatment
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
        treatments,
        f,
        indent=2,
        ensure_ascii=False
    )

print(
    f"\n✅ Total Treatments Extracted: {len(treatments)}"
)