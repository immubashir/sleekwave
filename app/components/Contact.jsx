import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_0nxosqm',
        'template_ipw1rse',
        {
          from_name: form.name,
          to_name: "Mubashir",
          from_email: form.email,
          to_email: "mkhajamubashiruddin@gmail.com",
          message: form.message,
        },
        'tK18GY-tTBRplmjIB'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible. :)");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again. :(");
        }
      );
  };

  return (
    <div className='mt-20 bg-[#125261] rounded-3xl p-6 sm:p-12 lg:p-20'>
      <div className='flex flex-col gap-10'>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-6 w-full'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4 montserrat-medium text-lg sm:text-xl'>
              What&apos;s your name?
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe *"
              className='bg-gray-200 text-black rounded-lg outline-none border-none font-medium p-3 sm:p-4 placeholder:text-gray-400 focus:bg-white'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4 montserrat-medium text-lg sm:text-xl'>
              What&apos;s your email?
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="johndoe@example.com *"
              className='bg-gray-200 text-black rounded-lg outline-none border-none font-medium p-3 sm:p-4 placeholder:text-gray-400 focus:bg-white'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 sm:mb-4 montserrat-medium text-lg sm:text-xl'>
              Your Message
            </span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Hello Mubashir. Here&apos;s my idea for a unique project"
              className='bg-gray-200 text-black rounded-lg outline-none border-none font-medium p-3 sm:p-4 placeholder:text-gray-400 focus:bg-white'
            />
          </label>
          <button
            type='submit'
            className='py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary overflow-hidden border-2 hover:border-orange-500 transition-all duration-500 group hover:scale-110'
          >
            <div className='relative flex items-center justify-center'>
              <div className='h-24 w-24 sm:h-36 sm:w-36 bg-orange-500 absolute rounded-full -z-10 scale-0 group-hover:scale-[2.9] transition-all duration-500 translate-x-10 translate-y-20'/>
              {loading ? "Sending..." : "Send"}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
