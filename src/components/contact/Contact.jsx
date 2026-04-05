

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope, FaFacebook, FaGithub,
  FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const socials = [
  { icon: <FaEnvelope />, href: "mailto:shourovsc38@gmail.com", label: "Email", color: "hover:border-pink-500/60 hover:text-pink-400" },
  { icon: <FaGithub />, href: "https://github.com/st-shourov12", label: "GitHub", color: "hover:border-gray-400/60 hover:text-gray-300" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/miraz-shourov/", label: "LinkedIn", color: "hover:border-blue-500/60 hover:text-blue-400" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/mirazulislam.shourov", label: "Facebook", color: "hover:border-indigo-500/60 hover:text-indigo-400" },
];

const infoCards = [
  { icon: <FaEnvelope />, label: "Email", value: "shourovsc38@gmail.com", color: "from-pink-500 to-rose-500" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Dhaka, Bangladesh", color: "from-purple-500 to-violet-500" },
  { icon: <FaPhone />, label: "Status", value: "Open to Work 🟢", color: "from-green-500 to-emerald-500" },
];

const Toast = ({ type, message }) => (
  <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl border shadow-2xl
                   backdrop-blur-md transition-all duration-500
                   ${type === 'success'
      ? 'bg-green-900/60 border-green-500/40 text-green-300'
      : 'bg-red-900/60 border-red-500/40 text-red-300'}`}
    style={{ animation: 'slideUp 0.4s ease' }}>
    {type === 'success' ? <FaCheckCircle className="text-xl shrink-0" /> : <FaExclamationCircle className="text-xl shrink-0" />}
    <span className="text-sm font-medium">{message}</span>
  </div>
);

const Contact = () => {
  const formRef = useRef(null);
  
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [focused, setFocused] = useState('');

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.from_name || !form.from_email || !form.message) {
      showToast('error', 'Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // Optional: simple email format check
    if (!/\S+@\S+\.\S+/.test(form.from_email)) {
      showToast('error', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS Success:", result.text);
      showToast('success', "Message sent successfully! I'll get back to you soon 🚀");

      // Reset form
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      formRef.current.reset(); // extra safety

    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast('error', error.text || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full mt-1.5 p-3.5 rounded-xl bg-white/5 border text-gray-200 outline-none
     transition-all duration-300 placeholder-gray-600 text-sm
     ${focused === field
      ? 'border-purple-500 shadow-[0_0_0_3px_rgba(168,85,247,0.15)] bg-white/8'
      : 'border-white/15 hover:border-white/30'}`;

  return (
    <>
      {toast && <Toast type={toast.type} message={toast.message} />}

      <div id="contact" className="w-10/12 mx-auto py-20 relative overflow-hidden">
        {/* Glow blobs */}
        {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-700/20 rounded-full blur-3xl pointer-events-none" /> */}
         <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-purple-400/40"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 80}%`,
                      animation: `particle-rise ${Math.random() * 12 + 8}s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left panel - Info + Socials (unchanged) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {infoCards.map((card) => (
              <div key={card.label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 hover:bg-white/8 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-linear-to-r ${card.color} flex items-center justify-center text-white shrink-0`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{card.label}</p>
                  <p className="text-gray-200 text-sm font-medium mt-0.5">{card.value}</p>
                </div>
              </div>
            ))}

            <div className="h-px bg-white/10 my-1" />

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3 flex-wrap">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    title={s.label}
                    className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/15 text-gray-400 text-lg transition-all duration-300 hover:scale-110 hover:bg-white/10 ${s.color}`}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-purple-900/40 to-pink-900/30 border border-purple-500/20 rounded-2xl p-5 mt-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently open to freelance projects, internships, and full-time opportunities. Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Right panel - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 shadow-[0_0_40px_#6b00ff15]">
              <h3 className="text-white font-semibold text-lg mb-6">Send me a message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider">
                      Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      placeholder="Name"
                      className={inputClass('name')}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider">
                      Email <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={form.from_email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      placeholder="you@email.com"
                      className={inputClass('email')}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                    placeholder="Project inquiry, collaboration..."
                    className={inputClass('subject')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider">
                    Message <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    rows={5}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Tell me about your project or just say hi..."
                    className={`${inputClass('message')} resize-none`}
                    required
                  />
                  <p className="text-right text-xs text-gray-600 mt-1">
                    {form.message.length} characters
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm tracking-wide
                             hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-purple-700/30
                             disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message ✉️</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Contact;