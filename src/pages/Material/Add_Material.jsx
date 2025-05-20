import React from 'react'
import { Link } from 'react-router'

export default function Add_Material() {
  return (
    <div>
  <section className='w-full'>
                <div className='border-b-2 text-gray-300'></div>
                <div className='py-3'>
                    <nav className='mt-1'>
                        <ul className='flex items-center'>
                            <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
                            <li> <Link to={'/add-material'}><span className='font-bold text-gray-800'>/&nbsp;Material</span> </Link> </li>
                            <li> <span className='font-bold text-gray-800'>/&nbsp;Add</span></li>
                        </ul>

                    </nav>
                </div>
                <div className='border-b-2 text-gray-300'></div>
                <div className='w-full min-h-[620px]'>
                    <div className='max-w-[1220px] mx-auto py-5'>
                    <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>Add Material</h3>
                    <form className=' py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>
                            
                            
<div>

    <div className='mb-5 p-1'>
        <label for="name" className='p-1 block font-medium text-gray-900'>Category Name </label>
        <input type='name' name='cname' id='cname'  className='text-[20px] border-2 py-2.5 px-2 block shadow-md
         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Material Name' />
    </div>

    <div className='mb-5 p-1'>
        <label for="order" className='p-1 block font-medium text-gray-900'>Order</label>
        <input type='number' name='corder' id='corder'  className='text-[20px] border-2 py-2.5 px-2 block shadow-md
         border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Order' />
    </div>
    <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 mx-1.5'>Add Material

    </button>
</div>


                            </form>
                            
                            </div>
                            </div>
                </section>

    </div>
  )
}
export{Add_Material}
