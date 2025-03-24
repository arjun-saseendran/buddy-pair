import {HiOutlineUser, HiOutlineUserAdd, HiOutlineMail, HiOutlinePhotograph} from "react-icons/hi";


export const AdminProfile = () => {

    return (<div>

        <div className='bg-white text-center rounded-xl h-[500px] w-[300px] mx-auto mt-10 shadow-xl'>
            <div className='border-2 border-[#ED2690] rounded-full inline-block p-1 text-center mt-10'>
                <img className='w-32 h-32 rounded-full' src="../../../public/dp.jpg" alt=""/>
            </div>
            <p className='font-bold text-gray-700'>Yash Ghori</p>
            <p className='text-gray-700'>Ahmedabad, Gujarat</p>
            <p className='text-gray-700'>India</p>

            <hr className='mx-10 my-4'/>
            <div className='flex justify-center items-center gap-2'>
                <div>

                    <HiOutlineUser className='text-gray-700'/>
                </div>
                <div>
                    <p className='text-gray-700'>Administrator</p>

                </div>
            </div>
            <hr className='mx-10 mt-4'/>

            <div className='flex justify-center items-center gap-2 mt-4 ms-7'>
            <div>
                <HiOutlineUserAdd className='text-gray-700'/>

            </div>
                <div>
                    <p className='text-gray-700'>+91 7048144030</p>
                </div>

            </div>
            <div className='flex justify-center items-center gap-2 mt-4 ms-7'>
            <div>
                <HiOutlineMail className='text-gray-700'/>

            </div>
                <div>
                    <p className='text-gray-700'>yghori@asite.com</p>
                </div>

            </div>

            <div className='flex justify-center items-center gap-2 mt-4 mr-12'>
            <div>
                <HiOutlinePhotograph className='text-gray-700'/>

            </div>
                <div>
                    <p className='text-gray-700'>PDT - |</p>
                </div>

            </div>



        </div>


    </div>)

}