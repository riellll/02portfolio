"use client";
import { useEffect, useState } from "react";
// import { HiOutlineMailOpen, HiOutlineLocationMarker } from "react-icons/Hi";
// import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  useEffect(() => {
    setTimeout(() => setMessageSent(false), 10000);
  }, [messageSent]);
  useEffect(() => {
    setTimeout(() => setMessageErr(false), 10000);
  }, [messageErr]);

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    console.log(name, email, message);

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (!res.ok) {
        console.log(res.status);
        setMessageErr(true);
        throw new Error("Faild to send request" + res.status);
      }
      setMessageSent(true);
      e.target.reset();
    } catch (error) {
      console.log(error);
      throw new Error("Faild to send request" + error);
    }
  };

  return (
    <div className="grid bg-white gap-10 pt-10 lg:mt-20 content-center justify-items-center text-center lg:px-32 md:px-16 md:mb-30 sm:px-10 min-[320px]:px-8 sm:mb-20 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        CONTACT ME
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="text-start">
          <h1 className="text-xl font-bold dark:text-gray-300">Hello,</h1>
          <p className="font-medium dark:text-gray-300">
            Thank you for taking the time to explore my portfolio project.
          </p>
          <p className="font-medium dark:text-gray-300">
            If you have any questions, feedback, or would like to discuss
            potential collaborations, I would love to hear from you. Please feel
            free to get in touch with me, just fill out the contact form.
          </p>
        </div>

        <form onSubmit={submitForm}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg outline-none ring-0 focus:shadow-none focus:outline-none border focus:border-slate-600 focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-slate-600 dark:shadow-sm-light"
              placeholder="name..."
              autoComplete="on"
              required
            />
          </div>
          {/*           <div className="mb-6">
            <label
              htmlFor="company"
              className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="company..."
              autoComplete="on"
              required
            />
          </div> */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="hadow-sm bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg outline-none ring-0 focus:shadow-none focus:outline-none border focus:border-slate-600 focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-slate-600 dark:shadow-sm-light dark:text-gray-300"
              placeholder="name@example.com"
              autoComplete="on"
              required
            />
          </div>

          <label
            htmlFor="message"
            className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="hadow-sm bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg outline-none ring-0 focus:shadow-none focus:outline-none border focus:border-slate-600 focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-slate-600 dark:shadow-sm-light dark:text-gray-300"
            placeholder="Leave a comment..."
            autoComplete="on"
            required
          ></textarea>
          <div className="flex items-start mt-6">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </div>
          {messageSent && (
            <h1 className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 mt-5">
              message successfully sent
            </h1>
          )}
          {messageErr && (
            <h1 className="bg-red-50 border border-red-500 text-red-900 dark:text-red-400 mt-5">
              faild to send message
            </h1>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
