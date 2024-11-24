"use client";

import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ResponseData } from "../contact/contact-form";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { addToContact } from "@/actions/newsletter";

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Adres email jest wymagany" })
    .email({ message: "Adres email musi być poprawny" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

const NewsletterForm = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });
  const [newsletterHoneypot, setNewsletterHoneypot] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSend = async (data: ValidationSchema) => {
    if (newsletterHoneypot) return;
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, JSON.stringify(value));
    });
    const res = await addToContact(formData);
    setResponse(res.response!);
    formRef.current?.reset();

    toast({
      title: "Success!",
      description: response.message,
      duration: 3000,
    });
  };

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => await onSend(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center px-8 pb-2 gap-4 w-full"
        ref={formRef}
        id="form"
      >
        <div className="flex flex-col justify-center items-start md:items-end">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-gray-800 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            {errors.email && (
              <p className="text-small italic text-error font-bold">
                {errors.email?.message}
              </p>
            )}
            {/* Honeypot */}
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              checked={newsletterHoneypot}
              onChange={() => setNewsletterHoneypot(!newsletterHoneypot)}
            />
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewsletterForm;
