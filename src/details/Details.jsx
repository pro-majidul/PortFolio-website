// import React from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useLoaderData } from "react-router-dom";
// import bgimage from "../assets/hero-bg.jpg";
// import { TextShimmer } from "@/components/ui/TextShimmer";

// const Details = () => {
//   const data = useLoaderData();
//   console.log(data);
//   return (
//     // <section
//     //     // style={{
//     //     //     backgroundImage: `url(${bgimage})`,
//     //     //     backgroundPosition: 'center',
//     //     //     backgroundSize: 'cover',
//     //     // }}
//     //     className='w-full p-10 md:p-20'>

//     //     <div className="relative h-full w-full bg-[#0f172a]">
//     //         <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_90%,rgba(102,51,238,1)_100%)]"></div>
//     //     </div>
//     //     <div className='w-full mx-auto space-y-4 max-w-7xl md:space-y-6'>
//     //         <Link to='/' className='flex items-center w-10/12 gap-2 px-4 py-1 md:w-2/12 bg-green-950 rounded-xl hover:bg-green-800'> <FaArrowLeftLong className='text-xl text-yellow-400' /><span className='text-xl'>

//     //             <TextShimmer> Back to Home</TextShimmer>
//     //         </span></Link>
//     //         <div className='space-y-4'>

//     //             <img className='w-full' src={data.image} alt="" />

//     //             <div className='space-y-3'>
//     //                 <h3 className='text-xl md:text-3xl'><span className='text-yellow-300 '>Project Name :</span>
//     //                  {data.project_title}

//     //                  </h3>
//     //                 <p className='text-xl md:text-2xl'><span className='text-xl text-yellow-300 md:text-3xl'>Descriptions :</span>
//     //                     {data.description}

//     //                 </p>

//     //                 <p><span className='text-xl text-yellow-300 md:text-3xl'>Key Features : </span></p>
//     //                 <ul className='ml-5 md:ml-10'>

//     //                     <li className='text-xl list-disc m'> {data.features.user_roles.employee_role}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.user_roles.hr_role}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.user_roles.admin_role}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.employee_panel.task_update}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.employee_panel.performance_reports}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.employee_panel.salary_info}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.hr_panel.employee_list}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.hr_panel.salary_payment}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.hr_panel.attendance_tracking}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.admin_panel.employee_management}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.admin_panel.salary_approval}</li>
//     //                     <li className='text-xl list-disc m'> {data.features.admin_panel.dashboard}</li>
//     //                 </ul>
//     //                 <p><span className='text-xl text-yellow-300 md:text-3xl'>Performance Optimization :</span></p>
//     //                 <ul className='ml-5 list-disc md:ml-10'>
//     //                     {data.performance_optimization.strategies.map(item => <li className='text-xl'>{item}</li>)}</ul>

//     //                 <p><span className='text-xl text-yellow-300 md:text-3xl'>Challenges Learnings : </span></p>
//     //                 <ul className='ml-5 list-disc md:ml-10'>
//     //                     {data.challenges_learnings.implemented_features.map(item => <li className='text-xl'>{item}</li>)}
//     //                 </ul>
//     //                 <p><span className='text-xl text-yellow-300 md:text-3xl'>Project Link :</span></p>
//     //                 <ul className='ml-5 list-disc md:ml-10'>
//     //                     <li>
//     //                         <a className='text-xl hover:text-red-500 ' href={data.project_links.live_site} target='_blank'>Live Link : {data.project_links.live_site}</a></li>
//     //                     <li>
//     //                         <a className='text-xl hover:text-red-500 ' href={data.project_links.frontend_repository} target='_blank'>Front-End : {data.project_links.frontend_repository}</a> </li>
//     //                     <li><a className='text-xl hover:text-red-500 ' href={data.project_links.backend_repository} target='_blank'>  Back-End : {data.project_links.backend_repository}</a></li>
//     //                 </ul>
//     //                 <p><span className='text-xl text-yellow-300 md:text-3xl'>Contact Future Enhancements</span></p>
//     //                 <ul className='ml-5 list-disc md:ml-10'>
//     //                     {data.contact_future_enhancements.future_plans.map(plan => <li className='text-xl'>{plan}</li>)}
//     //                 </ul>
//     //                 <p><span className='text-xl text-yellow-300 md:text-3xl'>Contact Info</span></p>
//     //                 <ul>
//     //                     <li>Email : <a href={`mailto:${data.contact_future_enhancements.contact_info.email}`}>{data.contact_future_enhancements.contact_info.email}</a></li>
//     //                     <li>LinkedIn : <a href={data.contact_future_enhancements.contact_info.linkedin} target='_blank'>{data.contact_future_enhancements.contact_info.linkedin}</a></li>
//     //                 </ul>
//     //             </div>
//     //         </div>
//     //     </div>

//     // </section >

//    <></>
//   );
// };

// export default Details;
"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Calendar,
  Users,
  Zap,
  ArrowLeft,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLoaderData } from "react-router-dom";

export default function ProjectDetailsPage() {
  const data = useLoaderData();
    console.log(data);
  const expectetdata = {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with modern technologies",
    longDescription:
      "This comprehensive e-commerce platform features a responsive design, secure payment integration, real-time inventory management, and an intuitive admin dashboard. Built with performance and scalability in mind, it handles thousands of concurrent users while maintaining fast load times.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Express.js",
    ],
    features: [
      "Secure user authentication and authorization",
      "Real-time inventory management system",
      "Integrated payment processing with Stripe",
      "Responsive design for all devices",
      "Admin dashboard with analytics",
      "Email notifications and order tracking",
    ],
    links: {
      live: "https://example-ecommerce.com",
      githubClient: "https://github.com/username/ecommerce-client",
      githubServer: "https://github.com/username/ecommerce-server",
    },
    stats: {
      duration: "3 months",
      teamSize: "4 developers",
      performance: "98% uptime",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <Button variant="secondary" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            <motion.h1
              className="text-2xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {data?.title}
            </motion.h1>
            <div className="w-32" />
          </div>
        </div>
      </motion.header>

      <motion.main
        className="container px-4 py-8 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="relative overflow-hidden border rounded-xl bg-card border-border">
            <motion.img
              src={data?.image}
              alt={data?.title}
              className="object-cover w-full h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute text-white bottom-6 left-6">
              <motion.h2
                className="mb-2 text-4xl font-bold text-black"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {data?.title}
              </motion.h2>
            </div>
          </div>
        </motion.section>

        {/* Links Section */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="gap-2 bg-[#7a73ff] hover:bg-[#7a73ffb7] text-black"
              >
                <a
                  href={data?.project_links?.live_site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent hover:bg-[#7a73ff] text-black"
              >
                <a
                  href={data?.project_links?.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  Client Code
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent hover:bg-[#7a73ff] text-black"
              >
                <a
                  href={data?.project_links?.backend_repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="w-5 h-5" />
                  Server Code
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Project Details */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 lg:col-span-2"
          >
            {/* Description */}
            {/* <motion.div variants={cardVariants} whileHover="hover">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    Project Overview
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {data?.longDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div> */}

            {/* Features */}
            {/* <motion.div variants={cardVariants} whileHover="hover">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-foreground">
                    <Zap className="w-6 h-6 text-accent" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {data?.features?.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div> */}

            {/* Technologies */}
            {/* <motion.div variants={cardVariants} whileHover="hover">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data?.technologies?.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1 text-sm"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Project Stats */}
            {/* <motion.div variants={cardVariants} whileHover="hover">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    Project Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Duration
                        </p>
                        <p className="font-medium text-foreground">
                          {data?.stats?.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Team Size
                        </p>
                        <p className="font-medium text-foreground">
                          {data?.stats?.teamSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Performance
                        </p>
                        <p className="font-medium text-foreground">
                          {data?.stats?.performance}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}

            {/* Quick Links */}
            {/* <motion.div variants={cardVariants} whileHover="hover">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <motion.a
                      href={data?.links?.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-muted/50 hover:bg-muted"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">
                        Live Demo
                      </span>
                    </motion.a>
                    <motion.a
                      href={data?.links?.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-muted/50 hover:bg-muted"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">
                        Frontend Code
                      </span>
                    </motion.a>
                    <motion.a
                      href={data?.links?.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-muted/50 hover:bg-muted"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Code className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">
                        Backend Code
                      </span>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
