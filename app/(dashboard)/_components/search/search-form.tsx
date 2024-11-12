import Form from "next/form";
import { FiSearch } from "react-icons/fi";
import SearchFormReset from "./search-reset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" className="search-form flex items-center space-x-4 p-4 w-full mx-auto">
      <input
        name="query"
        defaultValue={query}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Client"
      />

      <div className="flex items-center">
        {query && <SearchFormReset />}

        <button type="submit" className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none">
          <FiSearch className="h-5 w-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
