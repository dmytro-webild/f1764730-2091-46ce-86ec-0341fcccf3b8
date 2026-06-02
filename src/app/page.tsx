"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#features"},
        {
          name: "Packages",          id: "#service-packages"},
        {
          name: "Metrics",          id: "#metrics"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Officina Meccatronica"
      button={{
        text: "Get an Estimate",        href: "#contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Precision Automotive Diagnostics & Repair"
      description="Your trusted partner for advanced vehicle mechatronics and control systems. Experience unparalleled service and expertise that keeps you safely on the road."
      testimonials={[
        {
          name: "Marco Rossi",          handle: "@marcorossi",          testimonial: "Officina Meccatronica provided an excellent service for my car's complex electronic issue. The team was professional, knowledgeable, and delivered promptly. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-mechanic-showing-thumbs-up_1170-1180.jpg"},
        {
          name: "Laura Bianchi",          handle: "@laura_b",          testimonial: "I was thoroughly impressed by the depth of diagnostic expertise. They quickly identified and fixed a problem other garages couldn't. Fantastic work! Relevant and trustworthy.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-worried-businessman-talking-with-african-american-auto-mechanic-about-costs-car-reparation-auto-repair-shop_637285-4251.jpg"},
        {
          name: "Paolo Gialli",          handle: "@paolo_g",          testimonial: "Highly professional and transparent. Officina Meccatronica kept me informed every step of the way, and the repair quality was superb. Couldn't ask for more!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/dealership-agent-talking-with-client-gain-insights-into-what-might-sway-him_482257-124075.jpg",          imageAlt: "Dealership agent talking with client gain insights into what might sway him"},
        {
          name: "Sofia Bruno",          handle: "@sofia.b",          testimonial: "As a busy professional, I appreciate their efficiency and the high standard of work. My car's performance is noticeably improved, and they respect my time.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-mechanic-his-manager-working-touchpad-auto-repair-shop_637285-8672.jpg",          imageAlt: "Black mechanic and his manager working on touchpad in auto repair shop"},
        {
          name: "Davide Rossi",          handle: "@davide.r",          testimonial: "Impeccable service for my fleet vehicles. Officina Meccatronica handles everything with expertise and speed. A definite five-star experience for any business.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-black-car-mechanic-using-computer-with-his-manager-auto-repair-shop_637285-4243.jpg",          imageAlt: "Young black car mechanic using computer with his manager in auto repair shop"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-mechanic-standing-repair-shop_1170-1349.jpg",          alt: "Marco Rossi avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-auto-repairman-taking-car-tire-form-rack-workshop_637285-7530.jpg",          alt: "Laura Bianchi avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171290.jpg",          alt: "Giovanni Verdi avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-view-smiling-young-blonde-female-engineer-wearing-uniform-stretching-out-hand-towards-camera-showing-v-sign-symbol-near-eye_409827-636.jpg",          alt: "Silvia Neri avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-mechanic-workshop_329181-11863.jpg",          alt: "Carlo Esposito avatar"},
      ]}
      avatarText="Trusted by over 1000 happy clients"
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-examining-car_107420-95949.jpg"
      imageAlt="Modern automotive garage interior with diagnostic tools"
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Commitment to Automotive Excellence"
      description={[
        "At Officina Meccatronica Control Garage, we are dedicated to providing cutting-edge automotive services with a focus on precision, reliability, and customer satisfaction. Our state-of-the-art facility is equipped with the latest diagnostic technology to handle the most complex vehicle mechatronics.",        "Our team of certified technicians possesses extensive expertise in a wide range of control systems, from advanced engine management units to intricate transmission and braking systems. We pride ourselves on transparent communication, ensuring you are fully informed throughout the service process, and delivering solutions that restore your vehicle's optimal performance and safety."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "ECU Diagnostics & Reprogramming",          author: "Engine Control Unit",          description: "Precise diagnosis and expert reprogramming of Engine Control Units to optimize performance, fuel efficiency, and address warning lights.",          tags: [
            "Diagnostics",            "Performance",            "Fuel Efficiency"],
          imageSrc: "http://img.b2bpic.net/free-photo/male-expert-uses-tablet-with-chroma-key-display-leveraging-dashboards_482257-126212.jpg",          imageAlt: "Car ECU diagnostic tool display"},
        {
          id: "f2",          title: "Transmission System Repair",          author: "Automatic & Manual",          description: "Comprehensive repair and maintenance for automatic and manual transmission systems, ensuring smooth gear changes and extended lifespan.",          tags: [
            "Transmission",            "Smooth Operation",            "Longevity"],
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-servicing-car-engine_1170-1284.jpg",          imageAlt: "Mechanic working on car transmission"},
        {
          id: "f3",          title: "ABS & ESP System Services",          author: "Braking & Stability",          description: "Specialized services for Anti-lock Braking Systems (ABS) and Electronic Stability Programs (ESP) to guarantee maximum vehicle safety and control.",          tags: [
            "Safety",            "Braking",            "Stability"],
          imageSrc: "http://img.b2bpic.net/free-photo/hands-female-mechanic-using-laptop_1170-1248.jpg",          imageAlt: "ABS ESP sensor brake system car"},
      ]}
      title="Advanced Mechatronic Services"
      description="We specialize in the intricate electronic and mechanical systems that drive modern vehicles, ensuring your car performs flawlessly."
    />
  </div>

  <div id="service-packages" data-section="service-packages">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Basic Car Health Check",          price: "€99",          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-using-digital-tablet-while-servicing-car-engine_1170-1367.jpg",          imageAlt: "Basic car service maintenance checklist"},
        {
          id: "p2",          name: "Premium Diagnostics Package",          price: "€249",          imageSrc: "http://img.b2bpic.net/free-photo/pretty-girl-with-tool-hand-is-sitting-near-new-shiny-car-while-posing-photographer_613910-17074.jpg",          imageAlt: "Advanced vehicle maintenance package"},
        {
          id: "p3",          name: "Comprehensive Vehicle Overhaul",          price: "€499",          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-repairing-car_1170-1671.jpg",          imageAlt: "Full spectrum car repair service"},
        {
          id: "p4",          name: "Brake System Service",          price: "€179",          imageSrc: "http://img.b2bpic.net/free-photo/male-car-mechanic-working-car-repair-shop_23-2150367576.jpg",          imageAlt: "Car brake pads calipers replacement"},
        {
          id: "p5",          name: "Suspension & Steering Check",          price: "€129",          imageSrc: "http://img.b2bpic.net/free-photo/two-female-mechanics-repairing-chassis-automobile_7502-4427.jpg",          imageAlt: "Car suspension system shock absorber"},
        {
          id: "p6",          name: "Engine Performance Tuning",          price: "€349",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fuel-level-gauge-vehicle_23-2150163680.jpg",          imageAlt: "Engine tuning performance car garage"},
      ]}
      title="Exclusive Service & Maintenance Packages"
      description="Choose from our carefully curated service packages designed to meet various needs and keep your vehicle in prime condition."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "15+",          description: "Years of Experience"},
        {
          id: "m2",          value: "1000+",          description: "Satisfied Clients"},
        {
          id: "m3",          value: "98%",          description: "Customer Retention"},
      ]}
      title="Driving Trust Through Numbers"
      description="Our commitment to quality and customer satisfaction is reflected in our proud achievements."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Exceptional Service!",          quote: "The team at Officina Meccatronica went above and beyond. My car runs like new, and their professionalism was unmatched. Best garage experience I've had!",          name: "Giovanni Verdi",          role: "Local Business Owner",          imageSrc: "http://img.b2bpic.net/free-photo/satisfied-couple-signing-documents-while-talking-their-mechanic-auto-repair-shop_637285-7722.jpg",          imageAlt: "Smiling man next to repaired car"},
        {
          id: "t2",          title: "Truly Trustworthy Experts",          quote: "Finally found a garage I can trust. They explained everything clearly and didn't push unnecessary repairs. Their expertise in mechatronics is evident.",          name: "Silvia Neri",          role: "Freelance Designer",          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-talking-her-car-mechanic-repair-shop_637285-8670.jpg",          imageAlt: "Woman mechanic talking to client"},
        {
          id: "t3",          title: "Fast and Reliable",          quote: "My company's fleet vehicles are always serviced here. Officina Meccatronica is consistently fast, reliable, and keeps our operations running smoothly.",          name: "Antonio Bruno",          role: "Fleet Manager",          imageSrc: "http://img.b2bpic.net/free-photo/distraught-man-feeling-sad-while-showing-his-mechanic-car-breakdown-auto-repair-shop_637285-7708.jpg",          imageAlt: "Business owner inspecting car service"},
        {
          id: "t4",          title: "Modern Solutions for Modern Cars",          quote: "They truly understand modern car electronics. My hybrid had an elusive issue that they diagnosed and fixed perfectly. Highly impressed!",          name: "Chiara Gallo",          role: "Software Engineer",          imageSrc: "http://img.b2bpic.net/free-photo/repairmen-fixing-car-garage_23-2147897980.jpg",          imageAlt: "Young adult satisfied with car repair"},
        {
          id: "t5",          title: "Peace of Mind",          quote: "Knowing my family car is in such capable hands gives me immense peace of mind. Regular maintenance here means I never worry about breakdowns.",          name: "Davide Rizzo",          role: "Family Man",          imageSrc: "http://img.b2bpic.net/free-photo/family-with-cute-daughter-choosing-car-car-showroom_1303-26825.jpg",          imageAlt: "Family car maintenance happy customer"},
        {
          id: "t6",          title: "Passion for Vehicles",          quote: "You can tell they genuinely love cars. They treated my classic vehicle with such care and attention to detail. A rare find!",          name: "Elena Costa",          role: "Car Enthusiast",          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-car-door-medium-shot_23-2149714260.jpg",          imageAlt: "Classic car owner satisfied restoration"},
      ]}
      title="What Our Clients Say"
      description="Hear directly from our valued customers about their experiences with Officina Meccatronica."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What types of vehicles do you service?",          content: "We specialize in a wide range of modern vehicles, including gasoline, diesel, hybrid, and electric cars. Our diagnostic tools and expertise cover various makes and models."},
        {
          id: "q2",          title: "How do I book an appointment?",          content: "You can easily book an appointment through our website's contact form, by calling us directly, or by visiting our garage during business hours. We recommend booking in advance for specialized services."},
        {
          id: "q3",          title: "Do you offer warranty on repairs?",          content: "Yes, we stand by the quality of our work. Most of our repairs come with a standard warranty on both parts and labor. Specific warranty details will be provided at the time of service."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-female-mechanic-using-digital-tablet_1170-1415.jpg"
      imageAlt="Mechanic explaining car engine to customer"
      mediaAnimation="slide-up"
      mediaPosition="left"
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about our services, appointments, and general vehicle maintenance."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ottieni un Preventivo Gratuito"
      description="Desideri un servizio di diagnosi o riparazione? Contattaci oggi per una consulenza personalizzata o per fissare un appuntamento."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Il tuo nome",          required: true
        },
        {
          name: "email",          type: "email",          placeholder: "La tua email",          required: true
        },
        {
          name: "phone",          type: "tel",          placeholder: "Il tuo telefono (Opzionale)",          required: false
        }
      ]}
      textarea={{
        name: "message",        placeholder: "Il tuo messaggio",        rows: 5,
        required: true
      }}
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-starting-maintenance_23-2147897914.jpg"
      imageAlt="Modern automotive garage building exterior"
      mediaAnimation="none"
      mediaPosition="right"
      buttonText="Invia Messaggio"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Officina Meccatronica"
      columns={[
        {
          title: "Navigazione",          items: [
            {
              label: "Home",              href: "#hero"
            },
            {
              label: "Chi Siamo",              href: "#about"
            },
            {
              label: "Servizi",              href: "#features"
            },
            {
              label: "Pacchetti",              href: "#service-packages"
            },
            {
              label: "Statistiche",              href: "#metrics"
            },
            {
              label: "Testimonianze",              href: "#testimonials"
            },
            {
              label: "FAQ",              href: "#faq"
            },
            {
              label: "Contatti",              href: "#contact"
            }
          ]
        }
      ]}
      copyrightText="© 2024 Officina Meccatronica. Tutti i diritti riservati."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
