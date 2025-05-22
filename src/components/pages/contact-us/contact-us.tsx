"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  organizationContainerVariants,
  organizationItemVariants,
} from "@/components/animation/variants";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactUs = () => {
  const t = useTranslations("contact");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <motion.section
      className="min-h-screen relative bg-white overflow-hidden"
      initial={{
        background:
          "linear-gradient(289deg, #ff0000 0%, #ffffff 0%, #ffffff 100%)",
      }}
      animate={{
        background:
          "linear-gradient(289deg, #ff0000 55%, #ffffff 55%, #ffffff 100%)",
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}>
      <div className="relative container mx-auto px-4 py-3">
        {/* Animated Breadcrumb */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-4">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-gray-800 hover:text-gray-600">
                  {t("menu1")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-500" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-800 font-medium">
                  {t("menu2")}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        {/* Animated Container */}
        <motion.div
          variants={organizationContainerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm rounded-2xl shadow-xl max-w-5xl mx-auto border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Information Section */}
            <motion.div
              variants={organizationItemVariants}
              className="p-5 md:p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {t("title")}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start justify-center space-x-4 group">
                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                      <MapPin className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="">
                      <div className="border border-gray-400 p-4">
                        <div className="w-full ">
                          <h3 className="font-semibold text-[12px]  text-gray-800">
                            {t("location1.title")}
                          </h3>
                        </div>
                        <div className="w-full ">
                          <p>{t("location1.address")}</p>
                        </div>
                      </div>
                      <div className="border border-gray-400 p-4">
                        <div className="w-full ">
                          <h3 className="font-semibold text-[12px]  text-gray-800">
                            {t("location2.title")}
                          </h3>
                        </div>
                        <div className="w-full ">
                          <p>{t("location2.address")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                      <Phone className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">
                        {t("phone")}
                      </h3>
                      <p className="text-gray-600"> +40784805998</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">
                        {t("email")}
                      </h3>
                      <p className="text-gray-600">info@empowerment.group</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {t("contactsocial")}
                </h3>

                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/empowermentuk"
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    target="_blank">
                    <Facebook className="w-6 h-6 text-gray-700" />
                  </a>
                  <a
                    href="https://x.com/empowerment4492"
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    target="_blank">
                    <Twitter className="w-6 h-6 text-gray-700" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/empowerment-group-limited"
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    target="_blank">
                    <Linkedin className="w-6 h-6 text-gray-700" />
                  </a>
                </div>
                <div className="flex space-x-4 mt-5">
                  <a
                    href="https://www.youtube.com/@EmpowermentGroupLimited"
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    target="_blank">
                    <Youtube className="w-6 h-6 text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {t("workingtime.title")}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>{t("workingtime.days1")}</span>
                    <span className="text-green-800 font-medium">
                      {t("workingtime.hours1")}
                    </span>
                  </p>
                  <p className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>{t("workingtime.days2")}</span>
                    <span className="text-green-800 font-medium">
                      {t("workingtime.hours2")}
                    </span>
                  </p>
                  <p className="flex justify-between items-center py-2">
                    <span>{t("workingtime.days3")}</span>
                    <span className="text-red-700 font-medium">
                      {t("workingtime.hours3")}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              variants={organizationItemVariants}
              className="p-5 md:p-6 backdrop-blur-sm bg-gray-50/50">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("contactform.title")}
                </h2>
                <p className="text-gray-600 mt-2">{t("contactform.desc")}</p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.name")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-white/80 border-gray-200 text-gray-900 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            {...field}
                            className="bg-white/80 border-gray-200 text-gray-900 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.subject")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Message subject"
                            {...field}
                            className="bg-white/80 border-gray-200 text-gray-900 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.message")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            className="min-h-[150px] bg-white/80 border-gray-200 text-gray-900 placeholder:text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90">
                    {t("contactform.btnText")}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
