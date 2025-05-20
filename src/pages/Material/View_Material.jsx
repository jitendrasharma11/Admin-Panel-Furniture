import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaPen } from 'react-icons/fa';

export default function View_Material() {
    const [activeFilter, setActiveFilter] = useState(true);

    return (
        <section className='w-full px-4 py-6'>
            <div className="border rounded-lg shadow-sm">
                {/* Header Section */}
                <div className="flex items-center justify-between bg-[#f2f6fb] px-6 py-4 border-b rounded-t-lg">
                    <h2 className="text-2xl font-bold text-gray-900">View Material</h2>
                    <div className="flex items-center gap-3">
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3"
                            onClick={() => setActiveFilter(!activeFilter)}
                        >
                            <FaFilter className="text-white" />
                        </button>
                        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Change Status
                        </button>
                        <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Filter/Search Section */}
                {!activeFilter && (
                    <div className="px-6 py-4 border-b bg-white">
                        <form className="flex max-w-sm">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Search Name"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="ml-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div>
                )}

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-t">
                            <tr>
                                <th className="px-4 py-3">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm" />
                                </th>
                                <th className="px-6 py-3 font-semibold">Material Name</th>
                                <th className="px-6 py-3 font-semibold">Order</th>
                                <th className="px-6 py-3 font-semibold">Status</th>
                                <th className="px-6 py-3 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 */}
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="px-4 py-4">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">Neil Sims</td>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block bg-green-600 text-white text-sm font-semibold px-5 py-1.5 rounded-lg">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-[40px] h-[40px] rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center">
                                        <Link to="/user">
                                            <FaPen className="text-white" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="px-4 py-4">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-400 rounded-sm" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">Neil Sims</td>
                                <td className="px-6 py-4">2</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block bg-red-600 text-white text-sm font-semibold px-5 py-1.5 rounded-lg">
                                        Deactive
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-[40px] h-[40px] rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center">
                                        <Link to="/user">
                                            <FaPen className="text-white" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}