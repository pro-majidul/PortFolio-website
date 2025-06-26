import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Fade } from 'react-awesome-reveal';
import { TextShimmerWave } from './ui/TextShimmerWave';

const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault();
        const fromName = e.target.from_name.value;
        const fromEmail = e.target.from_email.value;
        const message = e.target.message.value;
        const info = { from_name: fromName, from_email: fromEmail, message }
        emailjs
            .send('service_cku3rvt', 'template_ud9cxne', info,
                'zTJh8Dk6Sk51W-Uy8',
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message Sent Successfully');



                    e.target.from_name.value = ''
                    e.target.from_email.value = ''
                    e.target.message.value = ''
                },
                (error) => {
                    console.log('FAILED...', error);
                    toast.error(`${error}`);
                }
            );
    };


    return (
        <section id='contact' className="py-6 ">
            <Fade direction='top' triggerOnce>
                 <h2 className="text-2xl text-center  md:my-10 md:pb-10 md:text-4xl font-bold  mb-10">  <TextShimmerWave>Contact Info</TextShimmerWave></h2>
            </Fade>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <Fade direction='left' triggerOnce >
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Let’s Discuss Your Project</h1>
                        <p className="pt-2 pb-4 text-gray-400"> I am available for inquiries, collaborations, and consultations. Feel free to get in touch with me through any of the following methods.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-violet-600'>
                                    <FaLocationDot size={16} />
                                </p>
                                <span className='text-gray-400 hover:text-violet-600'>Rangpur , Dhaka , Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-violet-600'>
                                    <FaWhatsapp size={16} />
                                </p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://wa.me/8801746637704" className='text-gray-400 text-xl hover:text-violet-600'> 01746637704</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-violet-600'>
                                    <TbPhoneCall size={16} />
                                </p>
                                <a href="tel:+8801746637704" className='text-gray-400 text-xl hover:text-violet-600'>+08 01746637704</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-violet-600'> <MdEmail size={16} /></p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=majidul123tub@gmail.com" className='text-gray-400 text-xl hover:text-violet-600'>majidul123tub@gamil.com</a>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade direction='right' triggerOnce>
                    <form onSubmit={sendEmail} className="container w-full max-w-xl md:p-8 mx-auto space-y-6 rounded-md shadow ">
                        <p className="text-4xl font-bold">Send me A message</p>
                        <div>
                            <label className="block mb-1 ml-1">Name</label>
                            <input type="text" name='from_name' placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624] text-gray-400"/>
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Email</label>
                            <input name='from_email' type="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624] text-gray-400" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Message</label>
                            <textarea id="message" type="text" name='message' placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624] text-gray-400"></textarea>
                        </div>
                        <div>
                            <button type="submit" className='px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer'>Send Message</button>
                        </div>
                    </form>
                </Fade>

            </div>
        </section>
    );
};

export default Contact;
