import React from 'react'
import { BarsArrowDownIcon } from '@heroicons/react/24/outline'

function FilterButton() {
    return (
        <div className='flex text-secondary bg-bgSky font-semibold hover:bg-hover cursor-pointer py-1 px-2 rounded-lg w-fit'>
            <p className='mr-2'>Filter</p>
            <BarsArrowDownIcon className='w-6 h-6 text-' /></div>

    )
}

export default FilterButton