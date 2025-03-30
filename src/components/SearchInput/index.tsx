import { Controller, Control } from "react-hook-form";
import InputField from "./InputField";

interface SearchFormValues {
  search: string;
}

interface SearchInputProps {
  control: Control<SearchFormValues>;
  name: keyof SearchFormValues;
}

function SearchInput({ control, name }: SearchInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <InputField field={field} />}
    />
  );
}

export default SearchInput;
