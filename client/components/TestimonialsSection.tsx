import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechVision",
    company: "TechVision Inc.",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "Chirag transformed our vision into a stunning reality. His attention to detail and technical expertise exceeded our expectations. The e-commerce platform he built increased our sales by 40% in just 3 months.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "Working with Chirag was a game-changer for our startup. He delivered a scalable, robust application that perfectly aligned with our business goals. His communication and project management skills are top-notch.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandForward",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "The website Chirag created for us is not only beautiful but also incredibly functional. Our user engagement increased by 60% after the launch. He truly understands both design and development.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "StartupX",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "Chirag built our MVP from scratch and helped us secure our first round of funding. His technical skills and business understanding make him an invaluable partner for any project.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "DataFlow Systems",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "Exceptional work on our real-time analytics dashboard. Chirag delivered a complex system that handles millions of data points seamlessly. His code quality and architecture decisions were excellent.",
  },
  {
    id: 6,
    name: "James Miller",
    role: "Operations Manager",
    company: "LogiCore",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "The task management system Chirag developed revolutionized our workflow. Team productivity increased by 35%, and the intuitive interface made adoption effortless across all departments.",
  },
];

export default function TestimonialsSection() {
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
    }, 5000); // 5 seconds for testimonials

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20">
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
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my amazing
              clients have to say about working with me.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </motion.div>

          {/* Testimonials Slider */}
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
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
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
                      whileHover={{ y: -5 }}
                      className="h-full"
                    >
                      <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                        <CardContent className="p-8 space-y-6 h-full flex flex-col">
                          {/* Quote Icon */}
                          <div className="flex justify-between items-start">
                            <Quote className="h-8 w-8 text-primary/30" />
                            <div className="flex space-x-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                            "{testimonial.content}"
                          </blockquote>

                          {/* Client Info */}
                          <div className="flex items-center space-x-4 pt-4 border-t border-border">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src={testimonial.image}
                                alt={testimonial.name}
                              />
                              <AvatarFallback className="bg-primary/10">
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                              <h4 className="font-semibold text-foreground">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </p>
                              <p className="text-xs text-primary font-medium">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 pt-8"
          >
            <h3 className="text-2xl font-bold">Ready to Join Them?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's work together to bring your vision to life and create
              something amazing that your users will love.
            </p>
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group"
            >
              Start Your Project
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
