// import { motion } from "framer-motion";
// import {
//   ExternalLink,
//   Github,
//   Code,
//   Calendar,
//   Users,
//   Zap,
//   ArrowLeft,
// } from "lucide-react";

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { useLoaderData } from "react-router-dom";

// export default function ProjectDetailsPage() {
//   const data = useLoaderData();
//   console.log(data);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         duration: 0.6,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.4 },
//     },
//     hover: {
//       scale: 1.02,
//       transition: { duration: 0.2 },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <motion.header
//         className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md border-border"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container px-4 py-4 mx-auto">
//           <div className="flex items-center justify-between">
//             <Button variant="secondary" size="sm" className="gap-2">
//               <ArrowLeft className="w-4 h-4" />
//               Back to Portfolio
//             </Button>
//             <motion.h1
//               className="text-2xl font-bold text-foreground"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//             >
//               {data?.title}
//             </motion.h1>
//             <div className="w-32" />
//           </div>
//         </div>
//       </motion.header>

//       <motion.main
//         className="container px-4 py-8 mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Hero Section */}
//         <motion.section variants={itemVariants} className="mb-12">
//           <div className="relative p-1 overflow-hidden border border-black rounded-xl bg-card border-border ">
//             <motion.img
//               src={data?.image}
//               alt={data?.title}
//               className="object-cover w-full h-96"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             <div className="absolute text-white bottom-6 left-6">
//               <motion.h2
//                 className="mb-2 text-4xl font-bold text-black"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//               >
//                 {data?.title}
//               </motion.h2>
//             </div>
//           </div>
//         </motion.section>

//         {/* Links Section */}
//         <motion.section variants={itemVariants} className="mb-12">
//           <div className="flex flex-wrap justify-center gap-4">
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 asChild
//                 size="lg"
//                 className="gap-2 bg-[#7a73ff] hover:bg-[#7a73ffb7] text-black"
//               >
//                 <a
//                   href={data?.project_links?.live_site}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <ExternalLink className="w-5 h-5" />
//                   Live Demo
//                 </a>
//               </Button>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="gap-2 bg-transparent hover:bg-[#7a73ff] text-black"
//               >
//                 <a
//                   href={data?.project_links?.frontend_repository}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github className="w-5 h-5" />
//                   Client Code
//                 </a>
//               </Button>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="gap-2 bg-transparent hover:bg-[#7a73ff] text-black"
//               >
//                 <a
//                   href={data?.project_links?.backend_repository}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Code className="w-5 h-5" />
//                   Server Code
//                 </a>
//               </Button>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Main Content */}
//         <div className="grid gap-8 lg:grid-cols-3">
//           {/* Project Details */}
//           <motion.div
//             variants={itemVariants}
//             className="space-y-8 lg:col-span-2"
//           >
//             {/* Description */}
//             {/* <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-border">
//                 <CardContent className="p-6">
//                   <h3 className="mb-4 text-2xl font-semibold text-foreground">
//                     Project Overview
//                   </h3>
//                   <p className="text-lg leading-relaxed text-muted-foreground">
//                     {data?.longDescription}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div> */}

//             {/* Features */}
//             {/* <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-border">
//                 <CardContent className="p-6">
//                   <h3 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-foreground">
//                     <Zap className="w-6 h-6 text-accent" />
//                     Key Features
//                   </h3>
//                   <ul className="space-y-3">
//                     {data?.features?.map((feature, index) => (
//                       <motion.li
//                         key={index}
//                         className="flex items-start gap-3 text-muted-foreground"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.1 * index, duration: 0.3 }}
//                       >
//                         <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
//                         <span>{feature}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div> */}

//             {/* Technologies */}
//             {/* <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-border">
//                 <CardContent className="p-6">
//                   <h3 className="mb-4 text-2xl font-semibold text-foreground">
//                     Technologies Used
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {data?.technologies?.map((tech, index) => (
//                       <motion.div
//                         key={tech}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 0.1 * index, duration: 0.3 }}
//                         whileHover={{ scale: 1.1 }}
//                       >
//                         <Badge
//                           variant="secondary"
//                           className="px-3 py-1 text-sm"
//                         >
//                           {tech}
//                         </Badge>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div> */}
//           </motion.div>

//           {/* Sidebar */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             {/* Project Stats */}
//             {/* <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-border">
//                 <CardContent className="p-6">
//                   <h3 className="mb-4 text-xl font-semibold text-foreground">
//                     Project Stats
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <Calendar className="w-5 h-5 text-accent" />
//                       <div>
//                         <p className="text-sm text-muted-foreground">
//                           Duration
//                         </p>
//                         <p className="font-medium text-foreground">
//                           {data?.stats?.duration}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Users className="w-5 h-5 text-accent" />
//                       <div>
//                         <p className="text-sm text-muted-foreground">
//                           Team Size
//                         </p>
//                         <p className="font-medium text-foreground">
//                           {data?.stats?.teamSize}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Zap className="w-5 h-5 text-accent" />
//                       <div>
//                         <p className="text-sm text-muted-foreground">
//                           Performance
//                         </p>
//                         <p className="font-medium text-foreground">
//                           {data?.stats?.performance}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div> */}

//             {/* Quick Links */}
//             {/* <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-border">
//                 <CardContent className="p-6">
//                   <h3 className="mb-4 text-xl font-semibold text-foreground">
//                     Quick Links
//                   </h3>
//                   <div className="space-y-3">
//                     <motion.a
//                       href={data?.links?.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-muted/50 hover:bg-muted"
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <ExternalLink className="w-4 h-4 text-accent" />
//                       <span className="text-sm font-medium text-foreground">
//                         Live Demo
//                       </span>
//                     </motion.a>
//                     <motion.a
//                       href={data?.links?.githubClient}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-muted/50 hover:bg-muted"
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Github className="w-4 h-4 text-accent" />
//                       <span className="text-sm font-medium text-foreground">
//                         Frontend Code
//                       </span>
//                     </motion.a>
//                     <motion.a
//                       href={data?.links?.githubServer}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-muted/50 hover:bg-muted"
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Code className="w-4 h-4 text-accent" />
//                       <span className="text-sm font-medium text-foreground">
//                         Backend Code
//                       </span>
//                     </motion.a>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div> */}
//           </motion.div>
//         </div>
//       </motion.main>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Globe,
  Calendar,
  User,
  Code,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLoaderData } from "react-router-dom";

export default function ProjectDetailsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const projectData = useLoaderData();
  console.log(projectData);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm border-border">
        <div className="container px-4 py-4 mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={`py-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl text-foreground animate-fade-in-up">
              {projectData.project_title}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
              Full-stack modern e-commerce solution
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="px-8 py-3 text-lg font-semibold transition-all duration-300  text-white bg-[#059669] hover:bg-[#059669]   hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a
                  href={projectData.project_links.live_site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  View Live Demo
                </a>
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 bg-transparent border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white hover:scale-105"
                  asChild
                >
                  <a
                    href={projectData.project_links.frontend_repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Client Code
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 bg-transparent border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white hover:scale-105"
                  asChild
                >
                  <a
                    href={projectData.project_links.backend_repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Server Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2024 - 2025
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Stack Developer
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />8 To 10 Days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <img
                src={projectData.image || "/placeholder.svg"}
                alt={`${projectData.image} screenshot ${activeImage + 1}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Main Content */}
              <div className="space-y-8 md:col-span-2">
                {/* Overview */}
                <Card className="animate-fade-in-up bg-[#f1f5f9]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-[#059669]" />
                      Project Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {projectData.description}
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                      {projectData.conclusion}
                    </p>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card className="animate-fade-in-up animation-delay-200 bg-[#f1f5f9]">
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.user_roles.admin_role}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.user_roles.employee_role}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                         {projectData.features.user_roles.hr_role}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.user_roles.admin_role}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                         {projectData.features.employee_panel.performance_reports}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.employee_panel.salary_info}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.hr_panel.employee_list}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.hr_panel.salary_payment}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.hr_panel.attendance_tracking}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.admin_panel.dashboard}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.admin_panel.employee_management}
                        </span>
                      </li>
                      <li  className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                         {projectData.features.admin_panel.salary_approval}
                        </span>
                      </li>
                      
                    </ul>
                  </CardContent>
                </Card>

                {/* Challenges & Solutions */}
                {/* <Card className="animate-fade-in-up animation-delay-400">
                  <CardHeader>
                    <CardTitle>Challenges & Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {projectData.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
                          <span className="text-muted-foreground">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card> */}

                {/* Results */}
                {/* <Card className="animate-fade-in-up animation-delay-600">
                  <CardHeader>
                    <CardTitle>Results & Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {projectData.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-chart-4" />
                          <span className="font-medium text-muted-foreground">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card> */}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                {/* <Card className="animate-fade-in-up animation-delay-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {projectData.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="transition-colors duration-300 cursor-default bg-muted hover:bg-[#059669] hover:text-primary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card> */}

                {/* Quick Links */}
                {/* <Card className="animate-fade-in-up animation-delay-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      variant="outline"
                      className="justify-start w-full transition-all duration-300 bg-transparent hover:bg-[#059669] hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={projectData.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="justify-start w-full transition-all duration-300 bg-transparent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a
                        href={projectData.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Frontend Code
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="justify-start w-full transition-all duration-300 bg-transparent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a
                        href={projectData.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Backend Code
                      </a>
                    </Button>
                  </CardContent>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Interested in Working Together?
            </h2>
            <p className="mb-8 text-muted-foreground">
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="transition-all duration-300 bg-[#059669] hover:bg-[#059669]/90 text-primary-foreground hover:scale-105"
                asChild
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <Link href="/">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
