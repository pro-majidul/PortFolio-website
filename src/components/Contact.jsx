
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ggwkmsr', 'template_ud9cxne', form.current, {
                publicKey: 'zTJh8Dk6Sk51W-Uy8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message Send Successfull')
                    form.current.reset()

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(`${error.text}`)
                },
            );
    };
    return (
        <section id='contact' className="py-6 bg-[#070D1B]">
            <h2 className="w-full bg-gradient-to-r from-blue-500 to-purple-600  text-transparent bg-clip-text text-3xl font-bold text-center my-5 py-5 md:mb-10 md:pb-10 underline underline-offset-8 decoration-orange-300 leading-tight ">Contact Info</h2>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Let’s Discuss Your Project</h1>
                    <p className="pt-2 pb-4 text-gray-400"> I am available for inquiries, collaborations, and consultations. Feel free to get in touch with me through any of the following methods.</p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <p className='border p-3 rounded-full hover:border-orange-400'>

                                <FaLocationDot size={16} />
                            </p>
                            <span className='text-gray-400 hover:text-orange-300'>Rangpur , Dhaka , Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className='border p-3 rounded-full hover:border-orange-400'>

                                <TbPhoneCall size={16} />
                            </p>
                            <span className='text-gray-400 text-xl hover:text-orange-300'>+08 01746637704</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className='border p-3 rounded-full hover:border-orange-400'> <MdEmail size={16} /></p>
                            <span className='text-gray-400 text-xl hover:text-orange-300'>majidul123tub@gamil.com</span>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="container w-full max-w-xl md:p-8 mx-auto space-y-6 rounded-md shadow ">
                    <p className="text-4xl font-bold">Send me A message</p>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" name='user_name' placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624]" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input name='user_email' id="email" type="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624]" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" name='user_message' placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624]"></textarea>
                    </div>
                    <div>
                        <button type="submit" className='px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer'>Send Meassage</button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Contact;