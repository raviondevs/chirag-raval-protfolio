import { inView, motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Sparkles,
  Palette,
  Zap,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

// AI-generated logo designs showcasing Chirag's AI prompting skills
export const LogoDesigns = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });
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

  const aiLogos = [
    "/logos/logo1.jpeg",
    "/logos/logo2.jpeg",
    "/logos/logo3.jpeg",
    "/logos/logo4.jpeg",
    "/logos/logo5.jpeg",
    "/logos/logo6.jpeg",
    "/logos/logo7.jpeg",
    "/logos/logo8.jpeg",
    // "/logos/logo9.jpeg",
    "/logos/logo10.jpeg",
    "/logos/logo11.jpeg",
  ];
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
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
          {aiLogos.map((logo, index) => (
            <div
              key={logo}
              className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 pl-4"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
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
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                    <motion.div
                      className="w-32 h-32 flex items-center justify-center"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Logo usage guidelines component
export const LogoGuidelines = () => {
  return (
    <div className="space-y-8 mt-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">AI Logo Design Services</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          I specialize in creating stunning logos using advanced AI tools and my
          expertise in prompt engineering. Each design is crafted with precision
          and can be customized to match your brand's unique vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-primary flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              AI Design Process
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Advanced AI prompt engineering for precise results</li>
              <li>• Multiple design variations and iterations</li>
              <li>• Brand research and competitor analysis</li>
              <li>• Color psychology and typography selection</li>
              <li>• Scalable vector formats for all applications</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-primary flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Design Deliverables
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• High-resolution logo files (PNG, SVG, AI)</li>
              <li>• Multiple color variations and formats</li>
              <li>• Logo usage guidelines and best practices</li>
              <li>• Social media profile picture versions</li>
              <li>• Business card and letterhead designs</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          <strong>Why Choose AI-Generated Logos?</strong> AI tools combined with
          expert prompt engineering create unique, professional designs that
          stand out in today's competitive market. Each logo is crafted to be
          memorable, scalable, and perfectly aligned with your brand identity.
        </p>
      </div>
    </div>
  );
};
