import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { UserRoundPen } from "lucide-react";
import image from "./../../assets/images/myself.jpg";
import { toast } from "sonner";

const MyProfile = () => {
  const { data: myDataInfo } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const { name, email, role, phone, address, city, country, postalCode } =
    myDataInfo?.data || {};

  return (
    <>
      <div className="">
        <h2 className="text-2xl px-1 font-black text-primary-text dark:text-white">
          My Profile
        </h2>
        {/* Profile image section */}
        <div className=" mt-6 border rounded-2xl border-neutral-200 p-4 flex items-center justify-between">
          <div className=" flex items-center gap-6">
            <div>
              <img className=" w-24 h-24 rounded-full" src={image} alt="" />
            </div>
            <div className=" space-y-  font-medium text-sm">
              <h2 className="text-3xl  text-primary-text">
                {name?.charAt(0)?.toUpperCase() + name?.slice(1)}
              </h2>
              <p className=" text-foreground">
                Role: {role?.charAt(0).toUpperCase() + role?.slice(1)}
              </p>
              <p className=" text-foreground">
                {city?.charAt(0).toUpperCase() + city?.slice(1)},
                {country != "N/A"
                  ? country?.charAt(0).toUpperCase() + country?.slice(1)
                  : ""}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() =>
                toast.warning("Currently you not updating your profile image!")
              }
              className=" hover:cursor-pointer hover:bg-secondary hover:text-white hover:border-none border border-neutral-300 px-4 py-2 flex gap-3 items-center justify-center font-medium text-primary-text rounded-full"
            >
              Edit <UserRoundPen size={19} />
            </button>
          </div>
        </div>
        {/* Personal Information */}
        <section className="mt-8 border rounded-2xl border-neutral-200 p-4">
          <div className=" flex items-center justify-start">
            <h2 className=" text-lg font-semibold text-primary-text">
              Personal Information
            </h2>
          </div>
          <div className=" mt-6 grid grid-cols-1 md:grid-cols-2">
            <div className=" space-y-6">
              <div>
                <label className=" font-medium text-foreground text-sm">
                  First Name
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {name?.charAt(0).toUpperCase() + name?.slice(1)}
                </h4>
              </div>
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Email address
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {email}
                </h4>
              </div>
            </div>
            <div className=" space-y-6">
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Last Name
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  NA
                </h4>
              </div>
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Phone number
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {phone ? phone : "NA"}
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* Address */}
        <section className="mt-8 border rounded-2xl border-neutral-200 p-4">
          <div className=" flex items-center justify-start">
            <h2 className=" text-lg font-semibold text-primary-text">
              Address
            </h2>
          </div>
          <div className=" mt-6 grid grid-cols-1 md:grid-cols-2">
            <div className=" space-y-6">
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Country
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {country?.charAt(0).toUpperCase() + country?.slice(1)}
                </h4>
              </div>
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Postal Code
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {postalCode}
                </h4>
              </div>
            </div>
            <div className=" space-y-6">
              <div>
                <label className=" font-medium text-foreground text-sm">
                  City/State
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {city?.charAt(0).toUpperCase() + city?.slice(1)}
                </h4>
              </div>
              <div>
                <label className=" font-medium text-foreground text-sm">
                  Address
                </label>
                <h4 className=" text-md font-medium text-primary-text mt-1">
                  {address?.charAt(0).toUpperCase() + address?.slice(1)}
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyProfile;
