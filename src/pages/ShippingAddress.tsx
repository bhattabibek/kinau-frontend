import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { addressSchema, type Address } from "./shipping/Shipping";
import { zodResolver } from "@hookform/resolvers/zod";
import type { addressI } from "@/interfaces/address.interface";

interface ShippingAddressPageProps {
  onNext?: () => void;
  defaultValues?: addressI;
}

export default function ShippingAddressPage({
  onNext: _onNext,
  defaultValues,
}: ShippingAddressPageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      phone: "",
      email: "",
      address_line1: "",
      landmark: "",
      country: "Nepal",
      state: "",
      city: "",
      ...defaultValues,
    },
  });

  const onSubmit: SubmitHandler<Address> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          className="w-full border px-4 py-2 rounded"
        />
        <Input
          placeholder="Phone"
          type="tel"
          {...register("phone")}
          className="w-full border px-4 py-2 rounded"
        />
        <Input
          placeholder="Address line 1"
          type="text"
          {...register("address_line1")}
          className="w-full border px-4 py-2 rounded"
        />
        <Input
          placeholder="Landmark"
          type="text"
          {...register("landmark")}
          className="w-full border px-4 py-2 rounded"
        />

        <div className="flex gap-4">
          <Input
            placeholder="State"
            type="text"
            {...register("state")}
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            placeholder="City"
            type="text"
            {...register("city")}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <Input
          placeholder="Country"
          type="text"
          {...register("country")}
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Continue to Payment
        </button>
        <div className="text-sm text-red-600 space-y-1">
          {Object.values(errors).map((err, idx) => {
            const message = "message" in err ? err.message : undefined;
            return message ? <p key={idx}>{message}</p> : null;
          })}
        </div>
      </form>
    </div>
  );
}
