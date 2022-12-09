import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='my-10'
            style={{
                background: `url(${appointment})`,
                backgroundSize: 'cover',
            }}
        >
            <section className="p-6 ">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid text-white">
                    <fieldset className="w-80 mx-auto my-10">
                        <div className="space-y-2 col-span-full lg:col-span-1 text-center">
                            <p className="font-medium text-xl">Contact Us</p>
                            <p className="text-3xl">Stay connected with us</p>
                        </div>
                        <br />
                        <div className="flex flex-col justify-center  mx-auto space-y-5">
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" className="py-2 px-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="subject" className="text-sm">Subject</label>
                                <input id="subject" type="text" placeholder="Subject" className="py-2 px-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="message" className="text-sm">Message</label>
                                <textarea id="message" type="text" placeholder="Message" className="py-2 px-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default Contact;