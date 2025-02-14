import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/24/outline'

function ProfileNavbar() {
    return (
        <div className='flex items-center cursor-pointer'>
            <UserCircleIcon className='h-10 w-10 mx-2 text-sm' strokeWidth={1} />
            <div className='text-sm text-start'>
                <p className='font-semibold'>Nattanicha Sentha</p>
                <p className=''>Admin</p>

            </div>
            <ChevronDownIcon className='h-4 w-4 ml-3 text-icon' />
        </div>
    )
}

export default ProfileNavbar