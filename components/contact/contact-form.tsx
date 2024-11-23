"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/actions/contactForm";

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

export type ResponseData = {
  status?: string;
  message?: string;
};

const validationSchema = z.object({
  name: z.string().min(1, { message: "Imie jest wymagane" }),
  email: z
    .string()
    .min(1, { message: "Adres email jest wymagany" })
    .email({ message: "Adres email musi być poprawny" }),
  description: z
    .string()
    .min(10, { message: "Wiadomość musi posiadać minimum 10 znaków" })
    .max(300, { message: "Wiadomość musi posiadać mniej niż 300 znaków" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

export default function ContactForm() {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  // const { pending } = useFormStatus();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  async function onSend(data: ValidationSchema) {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value));
      });
      const res = await sendContactEmail(formData);

      setResponse(res.response);
    } catch {
      alert("Błąd podczas wysyłania formularza");
    } finally {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setDisabled(true);
      console.log(response);
    }
  }

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => await onSend(data);

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
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
        <Input
          id="name"
          type="name"
          {...register("name")}
          required
          className="mt-1"
        />
        {errors.name && (
          <p className="text-xs italic text-error ">{errors.name?.message}</p>
        )}
      </motion.div>
      <motion.div variants={itemVariants}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          required
          className="mt-1"
        />
        {errors.email && (
          <p className="text-xs italic text-error ">{errors.email?.message}</p>
        )}
      </motion.div>
      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <Textarea
          id="description"
          {...register("description")}
          required
          className="mt-1"
          rows={4}
        />
        {errors.description && (
          <p className="text-xs italic text-error ">
            {errors.description?.message}
          </p>
        )}
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button type="submit" disabled={isSubmitting || disabled}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </motion.form>
  );
}
