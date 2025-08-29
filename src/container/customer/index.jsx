import React, { useState, useEffect, useMemo } from 'react';

const CustomerDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('All'); // All / Newest / Oldest
    const [currentPage, setCurrentPage] = useState(1);

    // Animated counters
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [members, setMembers] = useState(0);
    const [activeNow, setActiveNow] = useState(0);

    // Animate numbers (unchanged)
    const animateValue = (setter, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 30);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                clearInterval(timer);
                setter(target);
            } else {
                setter(Math.floor(start));
            }
        }, 30);
    };

    useEffect(() => {
        animateValue(setTotalCustomers, 5423);
        animateValue(setMembers, 1893);
        animateValue(setActiveNow, 189);
    }, []);

    // Sample customer data with createdAt added for sorting
    const customers = [
        { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active', createdAt: '2025-08-10' },
        { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive', createdAt: '2025-07-22' },
        { name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive', createdAt: '2025-06-05' },
        { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active', createdAt: '2025-05-18' },
        { name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active', createdAt: '2025-04-30' },
        { name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active', createdAt: '2025-03-22' },
        { name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active', createdAt: '2025-02-14' },
        { name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive', createdAt: '2025-01-07' },



        {
            name: 'Sophia Bennett',
            company: 'Netflix',
            phone: '(415) 555-0198',
            email: 'sophia.b@netflix.com',
            country: 'Canada',
            status: 'Active',
            createdAt: '2025-08-10'
        },
        {
            name: 'Ethan Harris',
            company: 'Spotify',
            phone: '(212) 555-0132',
            email: 'ethan.h@spotify.com',
            country: 'Australia',
            status: 'Inactive',
            createdAt: '2025-07-05'
        },
        {
            name: 'Olivia Martinez',
            company: 'Airbnb',
            phone: '(310) 555-0147',
            email: 'olivia.m@airbnb.com',
            country: 'Spain',
            status: 'Active',
            createdAt: '2025-06-21'
        },
        {
            name: 'Liam Thompson',
            company: 'Stripe',
            phone: '(503) 555-0111',
            email: 'liam.t@stripe.com',
            country: 'Germany',
            status: 'Active',
            createdAt: '2025-05-12'
        },
        {
            name: 'Ava Patel',
            company: 'Shopify',
            phone: '(646) 555-0190',
            email: 'ava.p@shopify.com',
            country: 'India',
            status: 'Inactive',
            createdAt: '2025-04-18'
        },
        {
            name: 'Mason Clark',
            company: 'Slack',
            phone: '(206) 555-0183',
            email: 'mason.c@slack.com',
            country: 'United Kingdom',
            status: 'Active',
            createdAt: '2025-03-07'
        },
        {
            name: 'Isabella Nguyen',
            company: 'Zoom',
            phone: '(617) 555-0159',
            email: 'isabella.n@zoom.com',
            country: 'Singapore',
            status: 'Active',
            createdAt: '2025-02-14'
        },
        {
            name: 'James Robinson',
            company: 'PayPal',
            phone: '(702) 555-0165',
            email: 'james.r@paypal.com',
            country: 'South Africa',
            status: 'Inactive',
            createdAt: '2025-01-02'
        }
    ];



    // Filter customers by search term (memoized)
    const filteredCustomers = useMemo(() => {
        const t = searchTerm.trim().toLowerCase();
        if (!t) return customers;
        return customers.filter(customer =>
            customer.name.toLowerCase().includes(t) ||
            customer.company.toLowerCase().includes(t) ||
            customer.email.toLowerCase().includes(t)
        );
    }, [customers, searchTerm]);

    // Sort customers after filtering (memoized)
    const sortedCustomers = useMemo(() => {
        const arr = [...filteredCustomers];
        if (sortBy === 'Newest') {
            arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortBy === 'Oldest') {
            arr.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        return arr;
    }, [filteredCustomers, sortBy]);

    return (
        <>
            <div className="p-4 md:p-8 bg-[#e4edf2] top-0 inset w-full md:w-[80%] md:ml-62  min-h-screen">


                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white shadow-sm
                 rounded-lg border gap-6 mb-8">

                    {/* Total Customers */}
                    <div className="p-6 ">
                        <div className="flex items-start justify-around">
                            <div className="w-8 md:w-12 h-8 md:h-12 mt-4 bg-green-100 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 md:w-9 md:h-9 bg-green-500 rounded-full">
                                    {/* corrected: use className only */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-1 text-green-800 w-4 h-4 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="mt-1 ml-1 text-green-800 font-xs md:font-sm ">Total Customers</p>
                                <p className="text:base md:text-2xl font-bold text-gray-900">{totalCustomers.toLocaleString()}</p>
                                <div className="flex items-center mt-1 md:mt-2">
                                    <span className="text-green-500 text:xs md:text-sm">↗ 16%</span>
                                    <span className="text-gray-400 text-xs md:text-sm ml-1">this month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Members */}
                    <div className=" p-6">
                        <div className="flex items-start justify-around">
                            <div className="w-8 md:w-12 h-8 md:h-12 mt-4 bg-green-100 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 md:w-9 md:h-9 bg-green-500 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-1  w-4 h-4 md:w-7 md:h-7 text-green-800" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="mt-1 ml-1 text-green-800 font-xs md:font-sm ">Members</p>
                                <p className="text:base md:text-2xl font-bold text-gray-900">{members.toLocaleString()}</p>
                                <div className="flex items-center  mt-1 md:mt-2">

                                    <span className="flex text-red-500 text:xs md:text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='mt-2' width="10" height="10" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z" />
                                        </svg>
                                        1%</span>
                                    <span className="text-gray-400 text:xs md:text-sm ml-1">this month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active Now */}
                    <div className=" p-6 ">
                        <div className="flex items-start justify-around">
                            <div className="h-8 w-8 md:w-12 md:h-12 mt-4 bg-green-100 rounded-full flex items-center justify-center">
                                <div className=" h-6 w-6 md:w-9 md:h-9 bg-green-500 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-1 text-green-800 w-4 h-4 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="mt-1 ml-1 text-green-800 font-xs md:font-sm ">Active Now</p>
                                <p className="text:base md:text-2xl font-bold text-gray-900">{activeNow.toLocaleString()}</p>
                                <div className="flex items-center  mt-1 md:mt-2">
                                    <div className="flex -space-x-4">
                                        <div className=" w-6 h-6 md:w-9 md:h-9 bg-blue-500 rounded-full justify-center items-center border-2 border-white">
                                            <img src="/avatar4.jpg" alt="" className='w-6 h-6 md:w-9 md:h-9 rounded-full ' />
                                        </div>
                                        <div className="w-6 h-6 md:w-9 md:h-9 bg-green-500 rounded-full border-2 border-white">
                                            <img src="/t1.jpg" alt="" className='w-6 h-6 md:w-9 md:h-9 rounded-full ' />
                                        </div>
                                        <div className="w-6 h-6 md:w-9 md:h-9 bg-purple-500 rounded-full border-2 border-white">
                                            <img src="/t2.jpg" alt="" className='w-6 h-6 md:w-9 md:h-9 rounded-full ' />
                                        </div>
                                        <div className="w-6 h-6 md:w-9 md:h-9 bg-orange-500 rounded-full border-2 border-white">
                                            <img src="/t3.jpg" alt="" className='w-6 h-6 md:w-9 md:h-9 rounded-full ' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Customer Table */}
                <div className="bg-white rounded-lg shadow-sm border">
                    {/* Header */}
                    <div className="p-6 border-b">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div>
                                <h2 className=" text-sm md:text-xl font-semibold font-serif text-gray-900">All Customers</h2>
                                <p className="text-green-600 text-xs md:text-sm mt-1">Active Members</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg   focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                    <div className="absolute left-3 top-2.5  w-4 h-4 text-gray-400">
                                        <svg
                                            className="h-4 w-4 md:h-5 md:w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 
                                                 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <span className="text-xs md:text-sm text-gray-500">Sort by:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="border border-gray-300 rounded-lg px-3 py-1.5 md:py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    >
                                        <option value="All">All</option>
                                        <option value="Newest">Newest</option>
                                        <option value="Oldest">Oldest</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-[800px] w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sortedCustomers.map((customer, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.company}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.phone}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.country}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${customer.status === 'Active'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                    }`}
                                            >
                                                {customer.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                    {/* Pagination */}
                    <div className="px-6 py-3 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Showing items 1 to 8 
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-1 md:px-3 py-1 text-xs md:text-sm text-gray-500 hover:text-gray-700">&lt;</button>
                                <button className="px-1 md:px-3 py-1  text-xs md:text-sm bg-purple-600 text-white rounded">1</button>
                                <button className="px-1 md:px-3 py-1 text-xs md:text-sm text-gray-500 hover:text-gray-700">2</button>
                                <button className="px-1 md:px-3 py-1 text-xs md:text-sm text-gray-500 hover:text-gray-700">3</button>
                                <button className="px-1 md:px-3 py-1 text-xs md:text-sm text-gray-500 hover:text-gray-700">4</button>
                                <span className="px-1 md:px-3 py-1 text-xs md:text-sm text-gray-500">...</span>
                                <button className="px-1 md:px-3 py-1 text-xs md:text-sm text-gray-500 hover:text-gray-700">40</button>
                                <button className="px-1 md:px-3 py-1 text-xs md:text-sm text-gray-500 hover:text-gray-700">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerDashboard;             