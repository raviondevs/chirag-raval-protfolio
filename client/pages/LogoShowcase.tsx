import { motion } from "framer-motion";
import { LogoDesigns } from "../components/LogoDesigns";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  Download,
  Palette,
  Sparkles,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Star,
  Zap,
  Home,
  Send,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function LogoShowcase() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Message sent successfully! I'll get back to you soon.");
        resetForm();
      } catch (error) {
        toast.error("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Button>
              </Link>
              <div className="hidden md:block w-px h-6 bg-border"></div>
              <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                <Link
                  to="/"
                  className="flex items-center space-x-1 hover:text-primary transition-colors"
                >
                  <Home className="h-3 w-3" />
                  <span>Portfolio</span>
                </Link>
                <span>/</span>
                <span className="text-primary">AI Logo Design</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">AI Logo Design Studio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Hero Section */}
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold relative z-10">
                  AI-Powered <span className="text-gradient">Logo Design</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transform your brand with cutting-edge AI-generated logos. I
                combine advanced AI tools with expert prompt engineering to
                create unique, professional designs that perfectly capture your
                vision.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    AI-Powered
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Advanced Technology
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">
                    Logos Created
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">24hrs</div>
                  <div className="text-sm text-muted-foreground">
                    Turnaround Time
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link to="/#contact">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Start Your Project
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Portfolio
                </Button>
              </motion.div>
            </div>

            {/* Logo Concepts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                AI-Generated Logo Showcase
              </h2>
              <LogoDesigns />
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center space-y-8"
            >
              <h3 className="text-2xl font-bold">What I Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">AI Logo Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom logos created using advanced AI tools and expert
                    prompt engineering
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Brand Identity</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete brand packages including color schemes and
                    typography
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Quick Turnaround</h4>
                  <p className="text-sm text-muted-foreground">
                    Fast delivery with multiple revisions to ensure perfect
                    results
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Section with Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-3xl p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      Ready to Transform Your Brand?
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Let's create a logo that perfectly represents your brand's
                      unique identity. Get in touch to start your AI-powered
                      logo design journey.
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-white/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">
                          chiragraval@raviondevs.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-white/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">
                          +91 9328401463
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-white/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-muted-foreground">
                          Gujarat, India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h4 className="text-2xl font-bold mb-6">Send Message</h4>
                  <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`${
                          formik.touched.name && formik.errors.name
                            ? "border-destructive"
                            : ""
                        }`}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-destructive text-sm">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`${
                          formik.touched.email && formik.errors.email
                            ? "border-destructive"
                            : ""
                        }`}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-destructive text-sm">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your logo design needs or just say hello!"
                        rows={4}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`resize-none ${
                          formik.touched.message && formik.errors.message
                            ? "border-destructive"
                            : ""
                        }`}
                      />
                      {formik.touched.message && formik.errors.message && (
                        <p className="text-destructive text-sm">
                          {formik.errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
