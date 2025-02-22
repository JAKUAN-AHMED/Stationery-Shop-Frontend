import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  User,
  Phone,
  MapPin,
  Globe,
  Pencil,
  Asterisk,
  RefreshCw,
} from "lucide-react";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";

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
  } = useForm({
    defaultValues: {
      name: getUserInfo?.name || "",
      phone: getUserInfo?.phone || "",
      address: getUserInfo?.address || "",
      city: getUserInfo?.city || "",
      country: getUserInfo?.country || "",
      postalCode: getUserInfo?.postalCode || "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading("Updating...");

    try {
      const res = await updateProfile(formData);
      toast.success(res?.data.message, { id: toastId });
    } catch {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

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
            <div key={id} className="relative">
              <Label className="text-gray-700 font-medium" htmlFor={id}>
                {label}
              </Label>
              <div className="absolute left-4 top-10 text-gray-500">{icon}</div>
              <Input
                id={id}
                {...register(
                  id,
                  id === "name" ? { required: `${label} is required` } : {}
                )}
                className="pl-10 mt-1 border-gray-300 focus:ring-primary focus:border-primary bg-gray-50"
                placeholder={`Enter your ${label.toLowerCase()}`}
              />
              {errors[id] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[id]?.message}
                </p>
              )}
            </div>
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
