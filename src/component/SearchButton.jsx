
import { MagnifyingGlassIcon, MapIcon } from '@heroicons/react/24/outline'

function SearchButton() {
    return (
        <div className="flex items-center border border-stroke rounded-3xl  overflow-hidden px-5">
            <MagnifyingGlassIcon className=' text-icon h-5 w-5 flex items-center' />
            <input

                type="text"
                placeholder="Search..."
                className="px-4 py-2 outline-none w-60 text-icon text-sm flex items-center"
            />
            <button>
                <MapIcon className='text-icon h-5 w-5 flex items-center cursor-pointer' />
            </button>


        </div>
    )
}

export default SearchButton