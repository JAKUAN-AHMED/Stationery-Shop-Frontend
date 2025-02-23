/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  User,
  Phone,
  MapPin,
  Globe,
  Asterisk,
  RefreshCw,
  Pencil,
} from "lucide-react";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";

type ProfileFormData = {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
};

// FormField Component
const FormField = ({ label, id, icon, register, errors, placeholder }: any) => {
  return (
    <div className="relative">
      <Label className="text-gray-700 font-medium" htmlFor={id}>
        {label}
      </Label>
      <div className="absolute left-4 top-10 text-gray-500">{icon}</div>
      <Input
        id={id}
        {...register(id, { required: `${label} is required` })}
        className="pl-10 mt-1 border-gray-300 focus:ring-primary focus:border-primary bg-gray-50"
        placeholder={placeholder}
      />
      {errors[id] && (
        <p className="text-red-500 text-sm mt-1">{errors[id]?.message}</p>
      )}
    </div>
  );
};

const UpdateProfile = () => {
  const { data: myDataInfo } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const getUserInfo = myDataInfo?.data;
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormData>({
    defaultValues: {
      name: getUserInfo?.name || "",
      phone: getUserInfo?.phone || "",
      address: getUserInfo?.address || "",
      city: getUserInfo?.city || "",
      country: getUserInfo?.country || "",
      postalCode: getUserInfo?.postalCode || "",
    },
  });

  // Handle form submit
  const onSubmit: SubmitHandler<ProfileFormData> = async (formData) => {
    const toastId = toast.loading("Updating...");

    try {
      const res = await updateProfile(formData);
      toast.success(res?.data.message, { id: toastId });
    } catch {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  useEffect(() => {
    if (getUserInfo) {
      setValue("name", getUserInfo.name || "");
      setValue("phone", getUserInfo.phone || "");
      setValue("address", getUserInfo.address || "");
      setValue("city", getUserInfo.city || "");
      setValue("country", getUserInfo.country || "");
      setValue("postalCode", getUserInfo.postalCode || "");
    }
  }, [getUserInfo, setValue]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {[
            { label: "Full Name", id: "name", icon: <User size={18} /> },
            { label: "Phone", id: "phone", icon: <Phone size={18} /> },
            { label: "Address", id: "address", icon: <MapPin size={18} /> },
            { label: "City", id: "city", icon: <Globe size={18} /> },
            { label: "Country", id: "country", icon: <Globe size={18} /> },
            {
              label: "Postal Code",
              id: "postalCode",
              icon: <Asterisk size={18} />,
            },
          ].map(({ label, id, icon }) => (
            <FormField
              key={id}
              label={label}
              id={id}
              icon={icon}
              register={register}
              errors={errors}
              placeholder={`Enter your ${label.toLowerCase()}`}
            />
          ))}
          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              className="w-full py-3 text-white bg-primary rounded-md shadow-md hover:bg-primary-dark flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <RefreshCw size={18} className="animate-spin" />
              ) : (
                <Pencil size={18} />
              )}
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateProfile;
