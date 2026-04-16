import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [success, setSuccess] = useState(false);

  async function onSubmit(data) {
    await new Promise(r => setTimeout(r, 600));
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 3000); // hide after 3s
  }

  return (
    <div className="container-responsive py-12">
      <Helmet>
        <title>Contact — Jadhavar College of Law, Pune</title>
        <meta
          name="description"
          content="Get in touch with Jadhavar College of Law, Pune. Contact form, phone, email, and campus location."
        />
        <link rel="canonical" href="https://www.jadhavar-law.edu.in/contact" />
      </Helmet>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary text-center mb-10"
      >
        Contact Us
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white border p-6 shadow-lg space-y-4 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-primary">Reach Us</h2>
          <p className="text-sm">📍 <strong>Main Campus:</strong> Jadhavar College of Law, Pune — Near XYZ, Pune, Maharashtra, India.</p>
          <p className="text-sm">📍 <strong>3 Years Law College:</strong> Jadhavar 3 Years Law College, Pune — ABC Road, Pune, Maharashtra, India.</p>
          <p className="text-sm">📞 Phone: +91 9284246664</p>
          <p className="text-sm">✉️ Email: adityajadhavarlaw@gmail.com</p>
          <div className="mt-4">
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8515.80958345856!2d73.81710372383455!3d18.456105600662536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295d3a2ac4a11%3A0x3523bfcf3cc6dbb5!2sJadhavar%20College%20of%20Law%20Pune!5e0!3m2!1sen!2sin!4v1764488400417!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white border p-6 shadow-lg space-y-4 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-primary">Quick Contact</h2>

          <input
            {...register("name", { required: "Name required" })}
            placeholder="Full Name"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 px-4 py-2"
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}

          <input
            {...register("email", { required: "Email required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
            placeholder="Email"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 px-4 py-2"
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}

          <textarea
            {...register("message", { required: "Message required" })}
            placeholder="Message"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 px-4 py-2 min-h-[120px]"
          />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}

          <div className="flex items-center gap-2 text-sm">
            <input {...register("consent", { required: true })} type="checkbox" />
            <label>I consent to be contacted and agree to the privacy policy.</label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 font-medium mt-2 text-center"
            >
              Thanks for contacting us! We will reach out soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  );
}
