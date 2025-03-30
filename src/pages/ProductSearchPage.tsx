import SearchInput from "../components/SearchInput";

function ProductSearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <form className="flex flex-col space-x-4">
          <SearchInput />
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
