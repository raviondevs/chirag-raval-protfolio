import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    location: "Remote",
    type: "Full-time",
    icon: "🚀",
    achievements: [
      "Led development of microservices architecture serving 100K+ users",
      "Improved application performance by 40% through optimization",
      "Mentored 3 junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Innovations",
    period: "2022 - 2023",
    location: "New York, NY",
    type: "Full-time",
    icon: "💻",
    achievements: [
      "Developed responsive web applications using React and TypeScript",
      "Collaborated with UX/UI team to implement pixel-perfect designs",
      "Reduced bundle size by 35% through code splitting and optimization",
      "Built reusable component library used across 5+ projects",
    ],
    technologies: ["React", "TypeScript", "Sass", "Jest", "Webpack"],
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "StartupX",
    period: "2021 - 2022",
    location: "San Francisco, CA",
    type: "Full-time",
    icon: "⚡",
    achievements: [
      "Built MVP from scratch serving initial 10K customers",
      "Implemented real-time features using WebSocket technology",
      "Designed and developed RESTful APIs with comprehensive testing",
      "Worked closely with product team to define technical requirements",
    ],
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io", "Redis"],
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "WebDev Agency",
    period: "2020 - 2021",
    location: "Austin, TX",
    type: "Full-time",
    icon: "🌱",
    achievements: [
      "Developed client websites using modern web technologies",
      "Learned best practices in version control and team collaboration",
      "Participated in agile development processes and daily standups",
      "Contributed to open-source projects and internal tools",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export default function ExperienceSection() {
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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20">
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
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software development, working with
              amazing teams and building impactful solutions.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
              <motion.div
                variants={timelineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full bg-gradient-to-b from-primary to-accent"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground z-10 border-4 border-background">
                    <span className="text-sm">{experience.icon}</span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {/* Header */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  {experience.type}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {experience.period}
                                </span>
                              </div>

                              <h3 className="text-xl font-bold text-primary">
                                {experience.title}
                              </h3>

                              <div className="flex items-center justify-between text-muted-foreground">
                                <span className="font-medium">
                                  {experience.company}
                                </span>
                                <span className="text-sm">
                                  {experience.location}
                                </span>
                              </div>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-1">
                                {experience.achievements.map(
                                  (achievement, achievementIndex) => (
                                    <li
                                      key={achievementIndex}
                                      className="text-sm text-muted-foreground flex items-start"
                                    >
                                      <span className="text-primary mr-2 mt-1.5 text-xs">
                                        •
                                      </span>
                                      {achievement}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">
                                Technologies Used:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 pt-12"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 3 years of experience in full-stack development, I'm
                passionate about creating innovative solutions and working with
                cutting-edge technologies. I thrive in collaborative
                environments and am always eager to take on new challenges that
                push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
