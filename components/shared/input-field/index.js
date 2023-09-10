import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

/* 
    peer - style an element based on the state of a sibling element
    https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state
*/
function InputField({
  name,
  label,
  type = "text",
  isError = false,
  required = false,
  disabled = false,
  autoFocus = false,
  eventHandler = () => {},
}) {
  return (
    <div className="py-6">
      <span className="input-field relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder=""
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          onChange={eventHandler}
          data-automation-id={name}
          className={cn(
            {
              "!border-redMedium !text-redMedium focus:border-redMedium focus:ring-0":
                isError,
            },
            "border-1 body peer block w-full appearance-none rounded-[4px] border-gray-medium bg-white p-4 leading-normal focus-visible:border-blue-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-light disabled:cursor-not-allowed disabled:border-grayLight"
          )}
        />
        <label
          htmlFor={name}
          className={cn(
            { "!text-redMedium": isError },
            "pointer-events-none absolute left-4 top-4 inline-flex rounded-xs transition duration-200 ease-in-out peer-focus-within:left-3 peer-focus-within:-translate-y-6 peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:text-sm peer-focus-within:leading-none peer-disabled:text-grayMedium"
          )}
        >
          {label}
        </label>
      </span>
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  isError: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  eventHandler: PropTypes.func,
  type: PropTypes.oneOf(["text", "email"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputField;
