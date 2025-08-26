import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const skills = [
  "React",
  "Plasmo",
  "Redux",
  "TypeScript",
  "Next.js",
  "Material UI",
  "AI Logo Design",
  "Prompt Engineering",
  "Git",
  "TailwindCSS",
  "BootStrap",
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - About Text */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-lg leading-relaxed">
                I'm a passionate Frontend Developer with 2 years of experience
                crafting modern, responsive, and scalable web applications. My
                journey in tech began with curiosity and has evolved into a deep
                love for building exceptional digital experiences.
              </p>

              <p className="text-lg leading-relaxed">
                I specialize in React, Next.js, Tailwind CSS, and modern
                frontend technologies, and I’ve also built Chrome extensions
                with React, Plasmo, and Material UI to deliver smooth,
                interactive user experiences.
              </p>

              <p className="text-lg leading-relaxed">
                I enjoy the entire development process—from concept and design
                to deployment and optimization. Beyond coding, I explore new
                technologies, contribute to open source, and share knowledge
                with the developer community.
              </p>

              <p className="text-lg leading-relaxed">
                Additionally, I specialize in AI-powered logo design, combining
                advanced AI tools with expert prompt engineering to create
                unique, professional brand identities that help businesses stand
                out in today's competitive market.
              </p>
            </motion.div>

            {/* Skills Badges */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={badgeVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium bg-card border border-border hover:border-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Exp.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Side - Developer Animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-0">
                <div className="relative w-80 h-80 flex items-center justify-center">
                  {/* Placeholder for Lottie Animation */}
                  <motion.div
                    className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center"
                    animate={{
                      rotateY: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="text-center space-y-4">
                      <motion.div
                        className="text-6xl"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        💻
                      </motion.div>
                      <div className="text-lg font-medium text-muted-foreground">
                        Developer at Work
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Code Elements */}
                  <motion.div
                    className="absolute top-4 right-4 text-2xl"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ⚛️
                  </motion.div>

                  <motion.div
                    className="absolute bottom-4 left-4 text-2xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🚀
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-2 text-xl"
                    animate={{
                      x: [0, 10, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ✨
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
