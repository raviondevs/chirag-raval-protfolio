import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles, Palette, ArrowRight, Star, Zap, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function AILogoDesignSection() {
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

  const featuredLogos = [
    {
      id: 1,
      name: "Tech Startup",
      category: "Technology",
      description: "Modern geometric logo with AI-generated elements",
      image: "/placeholder.svg",
      prompt:
        "Create a tech startup logo with geometric shapes and AI elements",
      featured: true,
    },
    {
      id: 2,
      name: "Creative Agency",
      category: "Creative",
      description: "Dynamic logo representing creativity and innovation",
      image: "/placeholder.svg",
      prompt: "Design a creative agency logo with vibrant colors",
      featured: true,
    },
    {
      id: 3,
      name: "Eco Brand",
      category: "Environment",
      description: "Sustainable logo with nature-inspired design",
      image: "/placeholder.svg",
      prompt: "Create an eco-friendly logo with green elements",
      featured: false,
    },
  ];

  return (
    <section
      id="ai-logo-design"
      className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              AI-Powered <span className="text-gradient">Logo Design</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your brand with cutting-edge AI-generated logos. I
              combine advanced AI tools with expert prompt engineering to create
              unique, professional designs that perfectly capture your vision.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">AI-Powered</div>
              <div className="text-sm text-muted-foreground">
                Advanced Technology
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Logos Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">24hrs</div>
              <div className="text-sm text-muted-foreground">
                Turnaround Time
              </div>
            </div>
          </motion.div>

          {/* Featured Logos */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center">
              Featured AI-Generated Logos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredLogos.map((logo, index) => (
                <motion.div
                  key={logo.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                    <div className="relative overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                        <Palette className="w-16 h-16 text-gray-400" />
                      </div>

                      {/* Featured Badge */}
                      {logo.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* AI Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI-Generated
                        </Badge>
                      </div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {logo.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {logo.category}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {logo.description}
                      </p>

                      {/* AI Prompt Used */}
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                        <p className="text-xs text-blue-700 dark:text-blue-300 font-medium mb-1">
                          AI Prompt Used:
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 italic">
                          "{logo.prompt}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Overview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">AI Logo Design</h4>
              <p className="text-sm text-muted-foreground">
                Custom logos created using advanced AI tools and expert prompt
                engineering
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Brand Identity</h4>
              <p className="text-sm text-muted-foreground">
                Complete brand packages including color schemes and typography
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Quick Turnaround</h4>
              <p className="text-sm text-muted-foreground">
                Fast delivery with multiple revisions to ensure perfect results
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-6">
                Let's create a logo that perfectly represents your brand's
                unique identity. Get in touch to start your AI-powered logo
                design journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/logo-designs">
                  <Button size="lg" variant="secondary" className="group">
                    View Full Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-blue-600"
                  >
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
