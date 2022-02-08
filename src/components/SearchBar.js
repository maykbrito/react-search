export function SearchBar({ onKeyUp }) {
  return (
    <form className="mt-6 flex space-x-4" action="#">
      <div className="flex-1 min-w-0">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input onChange={onKeyUp} type="search" name="search" id="search" className="focus:ring-pink-500 focus:border-pink-500 block w-full p-3 pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search" />
        </div>
      </div>
    </form>
  )
}