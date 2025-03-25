export const Staff = () => {
    return (


        <div className=' md:w-[400px]  md:h-[400px] p-10 bg-white rounded-xl m-2  md:m-10 shadow-xl'>
            <div className='flex justify-between'>
                <div className='font-bold text-gray-800'>Staff</div>
                <div className='text-pink-300 font-bold'>View all</div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>

                <div className='text-center text-gray-600'>
                    <img className='rounded-xl ' src="../../../public/staff.avif" alt="staff photo"/>
                    <p className='p-2'>Name</p>
                </div>
                <div className='text-center text-gray-600'>
                    <img className='rounded-xl' src="../../../public/staff.avif" alt="staff photo"/>
                    <p className='p-2'>Name</p>
                </div>
                <div className='text-center text-gray-600'>
                    <img className='rounded-xl' src="../../../public/staff.avif" alt='staff photo'/>
                    <p className='p-2'>Name</p>
                </div>
                <div className='text-center text-gray-600'>
                    <img className='rounded-xl ' src="../../../public/staff.avif" alt="staff photo"/>
                    <p className='p-2'>Name</p>
                </div>
                <div className='text-center text-gray-600'>
                    <img className='rounded-xl' src="../../../public/staff.avif" alt="staff photo"/>
                    <p className='p-2'>Name</p>
                </div>
                <div className='text-center text-gray-600'>
                    <img className='rounded-xl' src="../../../public/staff.avif" alt='staff photo'/>
                    <p className='p-2'>Name</p>
                </div>

            </div>


        </div>
    )
}