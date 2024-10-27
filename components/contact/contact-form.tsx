"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    //logic for form submition

    // Reset form and show success message
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1"
          rows={4}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </motion.div>
    </motion.form>
  );
}
