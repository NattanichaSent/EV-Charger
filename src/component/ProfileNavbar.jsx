import React from 'react'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/24/outline'

function ProfileNavbar() {
    return (
        <div className='flex items-center'>
            <UserCircleIcon className='h-6 w-6' />
            <div className='text-sm text-start'>
                <p>Nattanicha Sentha</p>
                <p>Admin</p>

            </div>
            <ChevronDownIcon className='h-4 w-4 ml-3' />
        </div>
    )
}

export default ProfileNavbar