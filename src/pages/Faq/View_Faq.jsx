import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { FaFilter, FaCircleXmark, FaMagnifyingGlass } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function ViewFaq() {
  let [ids, setIds] = useState([]);
  let [faqList, setMaterialList] = useState([])
  let [faqData, setFaqData] = useState([]);
  let [showSearch, setShowSearch] = useState(false);

  let apiBaseUr = import.meta.env.VITE_APIBASEURL;

  let getFaq = () => {
    axios.get(`${apiBaseUr}faq/view`)
      .then(res => res.data)
      .then(finalRes => {
        setFaqData(finalRes.data);
      })
      .catch(err => {
        console.error("Error fetching FAQ data:", err);
      });
  };

  useEffect(() => {
    getFaq();
  }, []);

  let getAllCheckedvalue = (event) => {
    if (event.target.checked && !ids.includes(event.target.value)) {
      setIds([...ids, event.target.value])
    }
    else {
      // let filnalArray=ids.filter((v)=>v!=event.target.value)
      setIds(ids.filter((v) => v != event.target.value))
    }
  }
  let faqMultipleDelete = () => {
    axios.post(`${apiBaseUr}faq/delete`, { ids })
      .then((res) => res.data)
      .then((finaLres) => {
        console.log(finaLres)
        getFaq()
        setIds([])
      })
  }
  useEffect(() => {
    console.log(ids)
  }, [ids])

  return (
    <>
      <div className='w-full mx-auto text-md font-medium my-3 text-gray-700'>
        <p className='flex items-center gap-3'>
          <Link to='/dashboard' className='hover:text-blue-600'>Home</Link>
          <Link to='/faq/add' className='hover:text-blue-600'> / &nbsp; Faq </Link>
          <span className='text-gray-500'> / &nbsp; View </span>
        </p>
        <hr className="bg-[#ccc] h-px border-0 my-2" />
      </div>

      {/* Toggle Search Form */}
      {showSearch && (
        <div className="px-6 py-4 border-b bg-white">
          <form className="flex max-w-sm" onSubmit={e => e.preventDefault()}>
            <div className="relative w-full">
              <label htmlFor="search" className="sr-only">Search Name</label>
              <input
                type="text"
                id="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block w-full p-2.5"
                placeholder="Search Name"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:outline-none flex items-center justify-center"
              aria-label="Search"
            >
              <FaMagnifyingGlass />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      )}

      <section className='mt-5 max-w-full rounded-md border' id='viewFaq'>
        <div className='bg-slate-100 flex p-4 justify-between items-center form-heading'>
          <h3 className='text-[26px] font-semibold'>View Faq</h3>
          <div className='flex items-center gap-2 mr-3'>
            <div
              className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700 cursor-pointer'
              onClick={() => setShowSearch(prev => !prev)}
              aria-label={showSearch ? "Close search form" : "Open search form"}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowSearch(prev => !prev); }}
            >
              {showSearch ? <FaCircleXmark size={22} /> : <FaFilter size={22} />}
            </div>
            <button className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white hover:bg-green-800 focus:outline-none'>
              Change Status
            </button>
            <button onClick={faqMultipleDelete} className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white hover:bg-red-800 focus:outline-none'>
              Delete
            </button>
          </div>
        </div>

        <div className='form px-4'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th className='lg:w-[3%] sm:w-[7%]'>

                </th>
                <th className='lg:w-[20%] sm:w-[33%]'>Question</th>
                <th className='w-[30%]'>Answer</th>
                <th className='w-[15%] text-center'>Order</th>
                <th className='lg:w-[11%] sm:w-[15%]'>Status</th>
                <th className='w-[6%]'>Action</th>
              </tr>
            </thead>
            <tbody>
              {faqData.length > 0 ? (
                faqData.map((item, index) => {
                  const { faqQuestion, faqAnswer, faqOrder, faqStatus } = item;
                  return (
                    <tr key={index} className='bg-white border-gray-200 hover:bg-gray-50'>
                      <td><input onChange={getAllCheckedvalue} checked={ ids.includes(item._id) } type="checkbox" value={item._id} className='w-4 h-4' /></td>
                      <td className='text-base font-semibold text-black py-2'>{faqQuestion}</td>
                      <td className='text-justify py-2'>{faqAnswer}</td>
                      <td className='text-center py-2'>{faqOrder}</td>
                      <td>
                        <button className={`py-1.5 px-5 rounded-sm text-white font-semibold
                          ${faqStatus
                            ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
                            : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600'}`}>
                          {faqStatus ? 'Active' : 'Deactive'}
                        </button>
                      </td>
                      <td>
                        <button className='flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-full hover:bg-blue-600 focus:outline-none'>
                          <MdEdit className='text-[18px]' />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className='text-center text-xl text-black py-4'>No Faq Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}