import React from 'react'
import { Link } from 'react-router'

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function add_color() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [color, setColor] = useColor("#561ecb");
  return (
    <div>
      <section className='w-full'>
        <div className='border-b-2 text-gray-300'></div>
        <div className='py-3'>
          <nav className='mt-1'>
            <ul className='flex items-center'>
              <li> <Link to={'/dashboard'}><span className='font-bold text-gray-800'>Home </span> </Link> </li>&nbsp;
              <li> <Link to={'/add-color'}><span className='font-bold text-gray-800'>/&nbsp;Color</span> </Link> </li>
              <li> <span className='font-bold text-gray-800'>/&nbsp;Add</span></li>
            </ul>

          </nav>
        </div>
        <div className='border-b-2 text-gray-300'></div>
        <div className='w-full min-h-[620px]'>
          <div className='max-w-[1220px] mx-auto py-5'>
        

          <h3 className='text-[26px] p-2 border rounded-t-md font-semibold border-slate-400 bg-gray-200'>Add Color</h3>
              <form  action="/" className=' py-3 px-2 border border-t-0 rounded-b-md border-slate-400' autoComplete='off'>


                <div>

                  <div className='mb-5 p-1'>
                    <label for="name" className='p-1 block font-medium text-gray-900'>Color Name </label>
                    <input type='name' name='colour_name' id='cname' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                     border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Color Name' />
                  </div>
                  <div className='mb-5 p-1 w-[200px]'>
                   
                  <ColorPicker color={color} onChange={setColor} />
                  
                  </div>

                  <div className='mb-5 p-1'>
                    <label for="order" className='p-1 block font-medium text-gray-900'>Order</label>
                    <input type='number' name='color_order' id='corder' className='text-[20px] border-2 py-2.5 px-2 block shadow-md
                                     border-gray-400 w-full rounded-lg focus:border-blue-500' placeholder='Enter Order' />
                  </div>
                  <button className='text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg py-3 px-2 mx-1.5'>Add Color

                  </button>
                </div>


              </form>


           
          </div>
        </div>
       
      </section>







    </div>
  )
}
export { add_color }