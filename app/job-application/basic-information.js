import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select-field";
import Button from "@/components/shared/button";
import InputField from "@/components/shared/input-field";

export default function BasicInformation({
  isLoading,
  countryList,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p className="h4 !font-semibold">Basic information</p>
        <InputField name="email" type="email" label="Email address" required />
        <InputField name="first_name" label="First name" required />
        <InputField name="middle_name" label="Middle name" />
        <InputField name="last_name" label="Last name" required />
        <InputField name="phone_number" label="Phone number" required />
      </div>
      <div className="py-16">
        <p className="h4 !font-semibold">Where are you based?</p>
        <InputField name="city" label="City" required />
        <InputField name="state" label="State" required />
        <InputField name="zipcode" label="Zip/postal code" required />
        <div className="flex min-w-full flex-1 flex-col pt-7">
          <Select name="country" required>
            <SelectTrigger className="mb-10 mt-2 min-w-full max-w-xs rounded-[4px] border border-gray-medium p-3 data-[placeholder]:italic">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent className="min-w-full">
              {countryList?.map((c) => (
                <SelectItem key={c.id} value={String(c.id)}>
                  {c.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <p className="h4 mb-2 !font-semibold">
          Where you referred by an existing Skillsoft Coach?
        </p>
        <p>If so please add their name and email.</p>
        <InputField name="reference_firstname" label="Referral first name" />
        <InputField name="reference_lastname" label="Referral last name" />
        <InputField
          type="email"
          name="reference_email"
          label="Referral email address"
        />
      </div>
      <div className="pt-16 text-center">
        <Button
          id="next"
          text="Next"
          type="submit"
          loading={isLoading}
          className="px-6 py-3 text-2xl font-semibold"
        />
      </div>
    </form>
  );
}
