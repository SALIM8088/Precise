import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oasz4mq",
        "template_ihkll7o",
        form.current,
        "0cts1Lykq-0thxrfm"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col items-center"
    >
      {/* Contact Us Title */}
      <h2 className="text-gray-800 text-6xl font-bold m-6 font-outfit tracking-wide">
        CONTACT US
      </h2>
      {/* Contact Description */}
      <div className="text-center mb-8 max-w-2xl px-4">
        <p className="text-gray-600 text-lg">
          We would love to hear from you! If you have any questions, feedback,
          or inquiries, feel free to reach out using the contact form below. Our
          team will get back to you as soon as possible.
        </p>
      </div>
      <div className="w-full flex flex-row max-w-7xl">
        {/* Left Side - Map */}
        <div className="w-1/2 h-screen flex justify-center items-center px-6">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63744.16042675534!2d75.88371326554543!3d16.338957662367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDIwJzIwLjIiTiA3NcKwNTQnNDkuMyJF!5e0!3m2!1sen!2sin!4v1708200000000!5m2!1sen!2sin&maptype=satellite&zoom=15"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-1/2 flex justify-center items-center h-screen bg-white bg-opacity-80 backdrop-blur-lg px-6">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-10 w-full max-w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 text-lg font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Last Name */}
              <div>
                <label className="block text-gray-700 text-lg font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number */}
            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Reason / Message
              </label>
              <textarea
                name="message"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition w-full"
            >
              Send Message
            </button>

            {/* Success Message */}
            {messageSent && (
              <p className="mt-6 text-green-600 font-bold text-center text-lg">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
