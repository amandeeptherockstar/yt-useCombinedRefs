import { useForm } from "react-hook-form";
import SearchInput from "../components/SearchInput";

interface SearchFormValues {
  search: string;
}

function ProductSearchPage() {
  const { control, handleSubmit } = useForm<SearchFormValues>({
    defaultValues: { search: "" },
  });

  const onSubmit = (data: SearchFormValues) => {
    alert(`You searched: ${data.search}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-x-4"
        >
          <SearchInput name="search" control={control} />
          <div className="mt-4">
            <button
              type="submit"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ProductSearchPage;
