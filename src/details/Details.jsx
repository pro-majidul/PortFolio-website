import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import bgimage from '../assets/hero-bg.jpg';

const Details = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <section
            style={{
                backgroundImage: `url(${bgimage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            className='w-full md:p-20 p-10'>
            <div className='w-full max-w-7xl mx-auto space-y-4 md:space-y-6'>
                <Link to='/' className='flex items-center gap-2 md:w-2/12  w-10/12 bg-green-950 px-4 py-1 rounded-xl hover:bg-green-800'> <FaArrowLeftLong className='text-yellow-400 text-xl' /><span className='text-xl'>Back to Home</span></Link>
                <div className='space-y-4'>

                    <img className='w-full' src={data.image} alt="" />

                    <div className='space-y-3'>
                        <h3 className='md:text-3xl text-xl'><span className=' text-yellow-300'>Project Name :</span> {data.project_title}</h3>
                        <p className='md:text-2xl text-xl'><span className=' text-yellow-300 md:text-3xl text-xl'>Descriptions :</span>
                            {data.description}

                        </p>

                        <p><span className=' text-yellow-300 md:text-3xl text-xl'>Key Features : </span></p>
                        <ul className='md:ml-10 ml-5'>

                            <li className='list-disc text-xl m'> {data.features.user_roles.employee_role}</li>
                            <li className='list-disc text-xl m'> {data.features.user_roles.hr_role}</li>
                            <li className='list-disc text-xl m'> {data.features.user_roles.admin_role}</li>
                            <li className='list-disc text-xl m'> {data.features.employee_panel.task_update}</li>
                            <li className='list-disc text-xl m'> {data.features.employee_panel.performance_reports}</li>
                            <li className='list-disc text-xl m'> {data.features.employee_panel.salary_info}</li>
                            <li className='list-disc text-xl m'> {data.features.hr_panel.employee_list}</li>
                            <li className='list-disc text-xl m'> {data.features.hr_panel.salary_payment}</li>
                            <li className='list-disc text-xl m'> {data.features.hr_panel.attendance_tracking}</li>
                            <li className='list-disc text-xl m'> {data.features.admin_panel.employee_management}</li>
                            <li className='list-disc text-xl m'> {data.features.admin_panel.salary_approval}</li>
                            <li className='list-disc text-xl m'> {data.features.admin_panel.dashboard}</li>
                        </ul>
                        <p><span className=' text-yellow-300 md:text-3xl text-xl'>Performance Optimization :</span></p>
                        <ul className='list-disc md:ml-10 ml-5'>
                            {data.performance_optimization.strategies.map(item => <li className='text-xl'>{item}</li>)}</ul>

                        <p><span className=' text-yellow-300 md:text-3xl text-xl'>Challenges Learnings : </span></p>
                        <ul className='list-disc md:ml-10 ml-5'>
                            {data.challenges_learnings.implemented_features.map(item => <li className='text-xl'>{item}</li>)}
                        </ul>
                        <p><span className=' text-yellow-300 md:text-3xl text-xl'>Project Link :</span></p>
                        <ul className='list-disc md:ml-10 ml-5'>
                            <li>
                                <a className='hover:text-red-500 text-xl ' href={data.project_links.live_site} target='_blank'>Live Link : {data.project_links.live_site}</a></li>
                            <li>
                                <a className='hover:text-red-500 text-xl ' href={data.project_links.frontend_repository} target='_blank'>Front-End : {data.project_links.frontend_repository}</a> </li>
                            <li><a className='hover:text-red-500 text-xl ' href={data.project_links.backend_repository} target='_blank'>  Back-End : {data.project_links.backend_repository}</a></li>
                        </ul>
                        <p><span className=' text-yellow-300 md:text-3xl text-xl'>Contact Future Enhancements</span></p>
                        <ul className='list-disc md:ml-10 ml-5'>
                            {data.contact_future_enhancements.future_plans.map(plan => <li className='text-xl'>{plan}</li>)}
                        </ul>
                        <p><span className=' text-yellow-300 md:text-3xl text-xl'>Contact Info</span></p>
                        <ul>
                            <li>Email : <a href="">{data.contact_future_enhancements.contact_info.email}</a></li>
                            <li>PortFolio : <a href="">{data.contact_future_enhancements.contact_info.portfolio}</a></li>
                            <li>LinkedIn : <a href="">{data.contact_future_enhancements.contact_info.linkedin}</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Details;