import { popularSearches } from "../../data";

const showSidebar = false;

const InputField = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-x-2">
        <input
          placeholder="Search products..."
          className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Clear
        </button>
      </div>

      {showSidebar && (
        <div
          className="absolute z-10 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          style={{ width: "240px" }}
        >
          <div className="p-4">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">
              Popular Searches
            </h4>
            <ul className="space-y-2">
              {popularSearches.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="w-full text-left text-sm text-gray-700 hover:text-indigo-600 cursor-pointer"
                  >
                    {item.term}{" "}
                    <span className="text-xs text-gray-400">
                      ({item.count})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputField;
