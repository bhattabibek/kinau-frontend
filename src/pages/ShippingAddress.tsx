import { useForm} from "react-hook-form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { addressSchema, type Address } from "./shipping/Shipping";
import { zodResolver } from "@hookform/resolvers/zod";
import type { addressI } from "@/interfaces/address.interface";

interface ShippingAddressPageProps {
  onNext?: () => void;
  defaultValues: addressI;
}

export default function ShippingAddressPage({
  onNext,
  defaultValues,
}: ShippingAddressPageProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    resolver: zodResolver(addressSchema),
    defaultValues: defaultValues
      ? {
          ...defaultValues,
        }
      : {
          phone: "",
          email: "",

          address_line1: "",
          landmark: "",
          country: "Nepal",
          state: "",
          city: "",
        },
  });
  const onSubmit: SubmitHandler<addressI> = (data) => console.log(data);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          placeholder="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          {...register("fullname")}
          className="w-full border pxa-4 py-2 rounded"
        />
        <Input
          placeholder="your Address"
          name="address"
          type="text"
          value={formData.address}
          {...register("address")}
          className="w-full border px-4 py-2 rounded"
        />

        <div className="flex gap-4">
          <Input
            placeholder="city"
            name="city"
            type="text"
            value={formData.city}
            {...register("city")}
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            placeholder="zip"
            name="zip"
            type="number"
            value={formData.zip}
            {...register("zip")}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <Input
          placeholder="country"
          name="country"
          type="text"
          value={formData.country}
          {...register("country")}
          className="w-full border px-4 py-2 rounded"
        />
        <Input
          placeholder="Phone Number"
          name="phone"
          type="number"
          value={formData.phone}
          {...register("phone")}
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
