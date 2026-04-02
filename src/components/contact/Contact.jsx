import React from "react";
import { FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const form = e.target;

  //   const data = {
  //     name: form.name.value,
  //     email: form.email.value,
  //     message: form.message.value,
  //   };

  //   const res = await fetch('http://localhost:3000/send-email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const result = await res.json();

  //   if (result.success) {
  //     alert('Message sent!');
  //     form.reset();
  //   } else {
  //     alert('Failed to send message');
  //   }
  // };
  return (
    <div id="contact" className="w-5/6 mx-auto flex flex-col items-center justify-center relative overflow-hidden">

      <h1 className="text-4xl font-bold text-white mb-10">Contact</h1>

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">

        <form className="space-y-6">  
          
          {/* onSubmit={handleSubmit}  */}


          <div>
            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-gray-200 focus:border-purple-500 outline-none"
            />
          </div>


          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-gray-200 focus:border-purple-500 outline-none"
            />
          </div>


          <div>
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full mt-1 p-3 rounded-xl bg-transparent border border-white/20 text-gray-200 focus:border-purple-500 outline-none resize-none"
            ></textarea>
          </div>


          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all"
          >
            Send a message
          </button>

        </form>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mt-8">
        <a href="https://shourovsc38@gmail.com" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20"><FaEnvelope></FaEnvelope></a>
        <a href="https://github.com/st-shourov12" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20"><FaGithub></FaGithub></a>
        <a href="https://www.linkedin.com/in/miraz-shourov/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20"><FaLinkedin></FaLinkedin></a>
        <a href="https://www.facebook.com/mirazulislam.shourov" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20"><FaFacebook></FaFacebook></a>
      </div>
    </div>
  );
};

export default Contact;
