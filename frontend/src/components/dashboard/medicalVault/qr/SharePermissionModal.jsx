import {
  ShieldCheck,
  Download,
  Eye,
  Lock,
  CheckCircle2,
} from "lucide-react";

const permissions = [
  {
    id: 1,

    title:
      "View Only",

    description:
      "Doctors and hospitals can only view medical records.",

    icon: Eye,

    color:
      "blue",
  },

  {
    id: 2,

    title:
      "Allow Download",

    description:
      "Users can securely download shared healthcare files.",

    icon: Download,

    color:
      "green",
  },

  {
    id: 3,

    title:
      "Password Protected",

    description:
      "Require password before accessing shared records.",

    icon: Lock,

    color:
      "orange",
  },
];

const SharePermissionModal = ({
  selectedPermission,
  setSelectedPermission,
}) => {

  return (
    <div>

      {/* TITLE */}
      <div>

        <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

          <ShieldCheck size={16} />

          Secure Access Permissions
        </div>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">

          Sharing Permissions
        </h2>

        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-500">

          Configure secure healthcare
          access permissions for hospitals,
          doctors and emergency responders.

        </p>
      </div>

      {/* GRID */}
      <div className="mt-8 space-y-5">

        {permissions.map(
          (
            permission
          ) => {

            const Icon =
              permission.icon;

            const active =
              selectedPermission ===
              permission.title;

            return (

              <button
                key={
                  permission.id
                }
                onClick={() =>
                  setSelectedPermission(
                    permission.title
                  )
                }
                className={`group w-full rounded-[30px] border p-6 text-left transition-all duration-300
                  
                  ${
                    active

                      ? "border-blue-500 bg-blue-50 shadow-lg"

                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }
                `}
              >

                <div className="flex items-start justify-between gap-5">

                  {/* LEFT */}
                  <div className="flex items-start gap-5">

                    {/* ICON */}
                    <div className={`flex h-16 w-16 items-center justify-center rounded-3xl
                      
                      ${
                        permission.color ===
                        "blue"

                          ? "bg-blue-100 text-blue-600"

                          : permission.color ===
                            "green"

                          ? "bg-green-100 text-green-600"

                          : "bg-orange-100 text-orange-600"
                      }
                    `}>

                      <Icon size={30} />
                    </div>

                    {/* TEXT */}
                    <div>

                      <h3 className="text-2xl font-black text-slate-900">

                        {
                          permission.title
                        }
                      </h3>

                      <p className="mt-3 max-w-2xl leading-7 text-slate-500">

                        {
                          permission.description
                        }
                      </p>
                    </div>
                  </div>

                  {/* CHECK */}
                  {active && (

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">

                      <CheckCircle2
                        size={24}
                      />
                    </div>
                  )}
                </div>
              </button>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SharePermissionModal;