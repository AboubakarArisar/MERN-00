import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="contact-container grid lg:grid-cols-2 sm:grid-cols-1 gap-2 p-10">
        <div className="contact-left lg:flex lg:flex-col sm:grid sm:grid-cols-1">
          <div className="left-content  justify-center items-center flex-wrap lg:p-[40px] sm:[20px]">
            <p className="text-yellow-300">Contact Us</p>
            <h1 className="text-white text-3xl leading-normal">
              Have a<span> Project </span>
              or want to
              <span> Collaborate</span>?
            </h1>
            <p className=" my-3 text-white">
              We would love to hear from you. Drop a message.
            </p>
          </div>
          <div className="card p-40">
            <div className="left-card flex flex-col gap-4 bg-[#323232] p-[24px]  w-[max-content]">
              <div className="text-white">
                <p className="title">Location</p>
                <p>Sukkur, Pakistan</p>
              </div>
              <div className="text-white">
                <p className="title">Email at</p>
                <p>pindaricoders@gmail.com</p>
              </div>
              <div>
                <p className="title">Follow on</p>
                <p>
                  <span>-</span>
                  <a href="">Facebook</a>

                  <span>-</span>
                  <a href="">Instagram</a>

                  <span>-</span>
                  <a href="">Discord</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right bg-[#323232] p-20 w-2/3 rounded">
          <div className="signup-left flex flex-col gap-2 text-white justify-center items-start">
            <h2 className="text-2xl font-bold">Send a Message</h2>

            <form className="flex flex-col w-full gap-4 ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="p-[10px] w-full bg-[#2B2B2B] rounded"
              />

              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-[10px] w-full bg-[#2B2B2B] rounded"
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Need help!"
                className="p-[10px] w-full bg-[#2B2B2B] rounded"
              />
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                cols="20"
                rows="5"
                className="p-[10px] w-full bg-[#2B2B2B] rounded"
              ></textarea>
              <button
                type="submit"
                className="p-[10px] bg-[#195D51] w-[200px] p-[15px] rounded rounded hover:bg-[#225239]"
              >
                Send Message ➡️
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
