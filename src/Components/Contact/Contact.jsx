import React from 'react'
import { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()


  const onSubmit = () => {

    return emailjs
      .sendForm(
        "service_z543pm5", //  EmailJS Service ID
        "template_nu3tvib",// EmailJS Template ID
        formRef.current,
        "xFw6WbWuCwr6-HDOS"  // Replace with your EmailJS Public Key
      )
      .then(() => {
        setIsSent(true);
        formRef.current.reset();
        toast('Message sent successfully! ✅', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: ,
          theme: "light",
          transition: Flip,
        });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: ,
          theme: "light",
          transition: Flip,
        });
      })


  }



  return (

    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />

      {/* Section Title */}
      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-4 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>


        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col space-y-4">

          {/* Email Field */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._+]+@gmail\.com$/,
                message: "Invalid Gmail address"
              }
            })}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          {/* Name Field */}
          <input
            type="text"
            placeholder=" Name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s'-]+$/,
                message: "Enter a valid name"
              }

            })}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          {/* Subject Field */}
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is required",
              maxLength: {
                value: 25,
                message: "Subject must be 25 characters or fewer"
              }

            })}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

          {/* Message Field */}
          <textarea
            placeholder="Message"
            rows={4}
            {...register("message", {
              required: "Message is required",
              maxLength: {
                value: 200,
                message: "Message must be 200 characters or fewer"
              }
            })}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          {/* Send Button */}
          <button
            type="submit"
            className={`w-full py-3 font-semibold rounded-md transition
              ${isSubmitting
                ? "bg-purple-400 text-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90"}
             `}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>


        </form>



      </div>

    </section>


  )
}

export default Contact;
