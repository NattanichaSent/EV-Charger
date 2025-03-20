
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PagePagination() {
    return (
        <Stack spacing={2} className='w-fit !text-[9px] items-center'>
            <div className='lg:hidden md:hidden'>
                <Pagination count={10} shape="rounded" boundaryCount={0} siblingCount={0} size="small" className='flex justify-end mt-5' />
            </div>
            <Pagination count={10} shape="rounded" boundaryCount={1} siblingCount={0} className='hidden lg:block md:block' />
        </Stack>
    );
}
