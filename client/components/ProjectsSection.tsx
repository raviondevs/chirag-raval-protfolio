import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import {
  ExternalLink,
  Github,
  Eye,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Palette,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "The Potato Studio",
    description:
      "The Potato Studio is a global UX/UI agency based in India, specializing in research-driven, user-friendly digital products. With a repertoire spanning mobile apps, dashboards, branding, prototyping, and more, they merge creativity with business strategy to deliver delightful, intuitive design experiences",
    image: "/potato.png",

    category: "Full-Stack",
    liveUrl: "https://example.com",

    featured: true,
  },
  {
    id: 2,
    title: "KrishnaX  AI music artist",
    description:
      "krishnax.xyz is the official portfolio of Krishna, an AI music artist. The website showcases Krishna’s original songs, highlights his creative journey, and connects listeners to his work on platforms like Spotify—blending technology and artistry in every track.",
    image: "/KrishnaX.png",
    technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    category: "Full-Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Farm Stories",
    description:
      "Farm Stories is a resort website designed to showcase a Bali-inspired getaway near Bangalore. It highlights luxury suites with private pools, vegetarian dining, and relaxing amenities like bonfire lounges and lush lounging spaces—offering guests a seamless way to explore, experience, and book their perfect nature retreat.",
    image: "/farmstories.png",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Vuetra Website",
    description:
      "Vuetra is an AI-powered trading desk that anticipates setups, monitors market moves, and learns your strategy to act like a second brain. It unifies charting, analytics, execution, and community tools into one seamless platform tailored for traders.",
    image: "/Vuetra.png",
    technologies: ["React", "Framer Motion", "TailwindCSS", "Vite"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Vuetra Chrome Extension",
    description:
      "The Vuetra Chrome Extension embeds your AI trading co-pilot directly into platforms like TradingView and Binance, providing intelligent symbol search, chart-aware insights, and seamless research tools. Officially launching on September 1, 2025.",
    image: "/VuetraChrome.png",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
    category: "Full-Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Add simple autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Slower autoplay for projects (4 seconds)

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in building modern web applications.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </motion.div>

          {/* Projects Slider */}
          <motion.div variants={itemVariants} className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 flex items-stretch"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        inView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.8, opacity: 0 }
                      }
                      transition={{
                        delay: 0.1 * (index % 6),
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -10 }}
                      className="group flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <Card className="h-full flex flex-col border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                          {/* Image */}
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full object-cover"
                            />

                            {project.featured && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-primary text-primary-foreground">
                                  Featured
                                </Badge>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Button
                                size="icon"
                                variant="secondary"
                                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                                asChild
                              >
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Eye className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </div>

                          {/* Content always visible */}
                          <CardContent className="p-6 space-y-4 flex flex-col">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {project.description}
                            </p>
                          </CardContent>
                        </Card>
                      </a>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Logo Design CTA */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  Also Specialize in AI Logo Design
                </h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Beyond web development, I create stunning logos using advanced
                AI tools and expert prompt engineering. Transform your brand
                with unique, professional designs.
              </p>
              <Link to="/logo-designs">
                <Button variant="outline" size="lg" className="group">
                  <Palette className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  View Logo Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
