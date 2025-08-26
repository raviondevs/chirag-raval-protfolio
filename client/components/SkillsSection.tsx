import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useCallback, useEffect } from "react";

// Updated skills array with proper logos and all skills from AboutSection
const allSkills = [
  {
    name: "React",
    logo: "/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "/typescript-original.svg",
  },
  {
    name: "Next.js",
    logo: "/nextjs-original.svg",
  },
  {
    name: "TailwindCSS",
    logo: "/tailwind-icon.svg",
  },
  {
    name: "Framer Motion",
    logo: " /framer-motion.svg",
  },
  {
    name: "Git",
    logo: "/git-original.svg",
  },
  {
    name: "Figma",
    logo: "/figma-original.svg",
  },
  {
    name: "Redux",
    logo: "/redux-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png",
  },
  {
    name: "Plasmo",
    logo: "/96090470.png",
  },
  {
    name: "Material UI",
    logo: "/materialui-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "/bootstrap-original.svg",
  },

  {
    name: "JavaScript",
    logo: "/javascript-original.svg",
  },
  {
    name: "HTML5",
    logo: "/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: " /css3-original.svg",
  },
  {
    name: "AI Logo Design",
    logo: "/aiLogo.png",
  },
  {
    name: "Prompt Engineering",
    logo: "/chatgpt.png",
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  // Add simple autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-20">
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
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with a diverse set of technologies and tools to build
              modern, scalable applications that deliver exceptional user
              experiences.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </motion.div>

          {/* Skills Slider */}
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
                {allSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 pl-4"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        inView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0, opacity: 0 }
                      }
                      transition={{
                        delay: 0.1 * (index % 10),
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 h-full">
                        <CardContent className="p-6 text-center space-y-4 flex flex-col items-center justify-center h-32">
                          <motion.div
                            className="w-10 h-10 flex items-center justify-center"
                            whileHover={{
                              scale: 1.2,
                              rotate: [0, -10, 10, 0],
                              transition: { duration: 0.5 },
                            }}
                          >
                            {/* Use actual logo */}
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>

                          <h4 className="font-semibold text-sm text-center leading-tight">
                            {skill.name}
                          </h4>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Skills Note */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 pt-8"
          >
            <p className="text-muted-foreground">
              And many more technologies in my toolkit! Always exploring and
              learning new things.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
