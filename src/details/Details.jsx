import { motion, useInView } from "framer-motion";

import {  useEffect, useRef } from "react";
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
  const refHero = useRef(null);
  const refImage = useRef(null);
  const refOverview = useRef(null);
  const refFeatures = useRef(null);
  const refChallenges = useRef(null);
  const refSidebar = useRef(null);

  const inViewHero = useInView(refHero, {
    margin: "0px 0px -100px 0px",
    once: false,
  });
  const inViewImage = useInView(refImage, {
    margin: "0px 0px -100px 0px",
    once: false,
  });
  const inViewOverview = useInView(refOverview, {
    margin: "0px 0px -100px 0px",
    once: false,
  });
  const inViewFeatures = useInView(refFeatures, {
    margin: "0px 0px -100px 0px",
    once: false,
  });
  const inViewChallenges = useInView(refChallenges, {
    margin: "0px 0px -100px 0px",
    once: false,
  });
  const inViewSidebar = useInView(refSidebar, {
    margin: "0px 0px -100px 0px",
    once: false,
  });

  const projectData = useLoaderData();
  console.log(projectData);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className=" bg-background">
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
      <motion.div
        ref={refHero}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewHero ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
      </motion.div>

      {/* Project Images */}
      <motion.div
        ref={refImage}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inViewImage ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 bg-muted/30"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <img
                src={projectData.image || "/placeholder.svg"}
                alt={`${projectData.image}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Main Content */}
              <div className="space-y-8 md:col-span-2">
                {/* Overview */}
                <motion.div
                  ref={refOverview}
                  initial={{ opacity: 0, y: 100 }}
                  animate={inViewOverview ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
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
                </motion.div>

                {/* Features */}

                <Card className="animate-fade-in-up animation-delay-200 bg-[#f1f5f9]">
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.user_roles.admin_role}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.user_roles.employee_role}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.user_roles.hr_role}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.user_roles.admin_role}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {
                            projectData.features.employee_panel
                              .performance_reports
                          }
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.employee_panel.salary_info}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.hr_panel.employee_list}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.hr_panel.salary_payment}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.hr_panel.attendance_tracking}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.admin_panel.dashboard}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.admin_panel.employee_management}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                        <span className="text-muted-foreground">
                          {projectData.features.admin_panel.salary_approval}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Challenges & Solutions */}

                <Card className="animate-fade-in-up animation-delay-400 bg-[#f1f5f9]">
                  <CardHeader>
                    <CardTitle>Challenges & Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {projectData.challenges_learnings.implemented_features.map(
                        (challenge, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#059669]" />
                            <span className="text-muted-foreground">
                              {challenge}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>

                {/* Results */}
                <Card className="animate-fade-in-up animation-delay-600 bg-[#f1f5f9]">
                  <CardHeader>
                    <CardTitle>Results & Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {projectData.objectives.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-chart-4" />
                          <span className="font-medium text-muted-foreground">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}

                <Card className="animate-fade-in-up animation-delay-300 bg-[#f1f5f9]">
                  <CardHeader>
                    <CardTitle className="text-lg">Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {projectData.technology.map((tech, index) => (
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
                </Card>

                {/* Quick Links */}

                <Card className="animate-fade-in-up animation-delay-500 bg-[#f1f5f9]">
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
                        href={projectData.project_links.live_site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="justify-start w-full transition-all duration-300 bg-transparent hover:bg-[#059669] hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={projectData.project_links.frontend_repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Frontend Code
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="justify-start w-full transition-all duration-300 bg-transparent hover:bg-[#059669] hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={projectData.project_links.backend_repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Backend Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
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
                <Link to="/">Get In Touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 bg-transparent border-accent text-[#059669] hover:bg-[#059669]/90 hover:text-accent-foreground"
                asChild
              >
                <a
                  href="https://github.com/pro-majidul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View More Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
