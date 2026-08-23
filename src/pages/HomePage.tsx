import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { BarChart2, Mic, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Next-Gen Fintech"
      title="Speak to the market. Understand what matters. Act."
      description="TrabyOS is a voice-first interface that connects market movement, understanding, your position, and trading action inside one professional environment."
      primaryButton={{
        text: "Get Early Access",
        href: "#contact",
      }}
      secondaryButton={{
        text: "See How It Works",
        href: "#how-it-works",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3GLo0YRGGsIy7uNuPUjGzkkSL86/uploaded-1787470309335-6jrlopge.png",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sound-volume-up-front-side-with-white-background_187299-39989.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/information-improvement-data-report_53876-138583.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/physician-using-blood-pressure-monitor-check-pulse-blood-pressure_482257-112283.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-running-with-stopwatch_1048-1717.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-typing-laptop-sitting-home-with-automation-lighting-system_482257-8729.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="how-it-works" data-section="how-it-works">
    <SectionErrorBoundary name="how-it-works">
          <AboutFeaturesSplit
      tag="Voice First"
      title="One workflow for everything"
      description="Stop jumping between disconnected tools. TrabyOS centralizes your charting, news, and execution into a single, cohesive voice-ready environment."
      items={[
        {
          icon: Mic,
          title: "Voice Intelligence",
          description: "Ask natural questions about your positions and market movements.",
        },
        {
          icon: BarChart2,
          title: "Structured Insights",
          description: "Get visual proof points instead of raw data overload.",
        },
        {
          icon: Zap,
          title: "Instant Action",
          description: "Execute trades faster with context-aware command tools.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-typing-laptop-sitting-home-with-automation-lighting-system_482257-8729.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Key Benefits"
      title="Designed for active traders"
      description="Professional-grade software built for efficiency, control, and reduced cognitive load."
      features={[
        {
          title: "Contextual Understanding",
          description: "Never lose sight of why a move matters for your specific portfolio.",
          imageSrc: "http://img.b2bpic.net/free-photo/sound-volume-up-front-side-with-white-background_187299-39989.jpg",
        },
        {
          title: "Fragmented Workflows",
          description: "Consolidate your news feeds, charts, and social data into one place.",
          imageSrc: "http://img.b2bpic.net/free-photo/information-improvement-data-report_53876-138583.jpg",
        },
        {
          title: "Decision Efficiency",
          description: "Make better trades in less time with AI-driven summaries.",
          imageSrc: "http://img.b2bpic.net/free-photo/physician-using-blood-pressure-monitor-check-pulse-blood-pressure_482257-112283.jpg",
        },
        {
          title: "Pro-Grade Control",
          description: "The speed and reliability required for active semi-pro trading.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-running-with-stopwatch_1048-1717.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="product" data-section="product">
    <SectionErrorBoundary name="product">
          <FeaturesImageBento
      tag="Visual Interface"
      title="Clarity at every level"
      description="A purpose-built interface that respects your expertise and keeps focus on high-impact market signals."
      items={[
        {
          title: "Dashboard View",
          description: "Your complete workspace",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-code-running-computer-screens-modern-server-room_482257-114724.jpg",
        },
        {
          title: "Market Depth",
          description: "Deeper analysis visuals",
          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-image-showcasing-businessman-digital-environment_482257-127120.jpg",
        },
        {
          title: "Voice Engine",
          description: "Active listening visualizer",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-soundwaves-background-with-flowing-lines_1048-15842.jpg",
        },
        {
          title: "Mobile Access",
          description: "Trade on the go",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-working-with-computer-with-coffee-cup-hotel-room_1150-17469.jpg",
        },
        {
          title: "News Feed",
          description: "Real-time context",
          imageSrc: "http://img.b2bpic.net/free-photo/research-agency-office-worker-analyzing-organization-financial-data-statistics-young-confident-company-employee-reviewing-startup-project-status-charts-while-sitting-modern-office_482257-41511.jpg",
        },
        {
          title: "Analytics",
          description: "Performance tracking",
          imageSrc: "http://img.b2bpic.net/free-photo/trading-stock-stock-market-business-graph-trading-investment-broker-stock-exchange-market_169016-66719.jpg",
        },
        {
          title: "Trade Execution",
          description: "One-click action",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-shopping-online_23-2151952964.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="security" data-section="security">
    <SectionErrorBoundary name="security">
          <MetricsMediaCards
      tag="Trusted Performance"
      title="Institutional grade infrastructure"
      description="Engineered for speed, reliability, and security to match professional standards."
      metrics={[
        {
          value: "99.9%",
          title: "Uptime",
          description: "Always available for high-volatility events.",
          imageSrc: "http://img.b2bpic.net/free-photo/market-trends-concept-with-computer_23-2150372439.jpg",
        },
        {
          value: "<20ms",
          title: "Latency",
          description: "Market-leading execution speeds.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-business-entrepreneur-office-setup-home-with-personal-computer_482257-91126.jpg",
        },
        {
          value: "AES-256",
          title: "Encryption",
          description: "Bank-grade data protection.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-works-computer-night_169016-63253.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="TrabyOS removed all the noise from my trading day. Finally, I have a voice interface that understands my portfolio as well as I do."
      rating={5}
      author="Marcus V., Active Semi-Pro Trader"
      avatars={[
        {
          name: "Marcus",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-man-holding-smart-phone_23-2147935571.jpg",
        },
        {
          name: "Sarah",
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-freelancer-dressed-casual-t-shirt-sitting-front-laptop-looking-smiling-with-cheerful-expression-after-successful-morning-work-enjoying-sunny-day-outdoor-cafe_273609-6602.jpg",
        },
        {
          name: "David",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-businessman-smiling-happy-standing-city_839833-25759.jpg",
        },
        {
          name: "Elena",
          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-young-african-man-sitting-coworking_171337-13496.jpg",
        },
        {
          name: "Tom",
          imageSrc: "http://img.b2bpic.net/free-photo/young-pensive-businessman-classic-black-suit-with-wireless-earphones-dreamily-looking-aside-with-hand-watch-laptop-knees-outdoor_574295-5743.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Help"
      title="Frequently Asked Questions"
      description="Learn more about how TrabyOS can help you scale your trading workflow."
      items={[
        {
          question: "What markets are supported?",
          answer: "TrabyOS currently supports US equities, crypto markets, and major forex pairs.",
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use industry-standard encryption to protect your sensitive financial data.",
        },
        {
          question: "Can I integrate my own brokers?",
          answer: "We support integrations with most major retail and institutional brokerage platforms.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/solar-panel-manufacturing-plant-researcher-typing-laptop-keyboard-closeup_482257-123394.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Access"
      text="Join the waitlist for the next generation of fintech."
      primaryButton={{
        text: "Get Early Access",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Sales",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
