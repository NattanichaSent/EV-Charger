import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/24/outline'

function ProfileNavbar() {
    return (
        <div className='flex items-center cursor-pointer hover:bg-bgHover p-2 rounded-2xl hover:text-secondary'>
            <UserCircleIcon className='h-10 w-10 mr-3 ' strokeWidth={1} />
            <div className='text-sm text-start'>
                <p className='font-bold w-[150px] text-[15px]  '>Nattanicha Sentha</p>
                <p className='text-[14px] text-secondary'>Admin</p>

            </div>
            <ChevronDownIcon className='h-4 w-4 ml-3 text-icon' />
        </div>
    )
}

export default ProfileNavbar