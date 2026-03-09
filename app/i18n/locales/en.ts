export const en = {
  // Navigation
  nav: {
    home: "Home",
    projects: "Projects",
    technology: "Technology",
    contact: "Contact",
  },

  // Hero Section
  hero: {
    badge: "Solo Frontend Partner",
    title: {
      part1: "Build",
      highlight: "polished websites",
      part2: "that help your business grow.",
    },
    description:
      "I help founders, agencies, and small teams turn their ideas into fast, reliable Next.js sites that look great and feel even better to use.",
    cta: "Start a build sprint →",
    viewWork: "View recent work",
  },

  // USP Section
  usp: {
    title: "Why Work With Me",
    items: [
      {
        title: "Fast Turnaround",
        description: "Get your first working preview in 48 hours",
      },
      {
        title: "Modern Stack",
        description: "Built with Next.js, TypeScript, and Tailwind CSS",
      },
      {
        title: "Responsive Design",
        description: "Looks great on all devices and screen sizes",
      },
      {
        title: "SEO Optimized",
        description: "Built with best practices for search engines",
      },
    ],
  },

  // Projects Section
  projects: {
    badge: "Featured Work",
    title: {
      part1: "Showcasing ",
      highlight: "Professional Projects",
      part2: " that deliver results",
    },
    description:
      "A collection of digital banking and business ecosystem projects developed professionally in a corporate environment (BCA) during my tenure.",
    items: [
      {
        title: "BCA - Promo",
        description:
          "A dynamic promotional website for Bank Central Asia (BCA) showcasing current offers and services with a focus on user engagement and conversion.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://promo.bca.co.id/",
        image: "/projects/bca-promo.png",
      },
      {
        title: "BCA - Ocean",
        description:
          "Ocean by BCA connects businesses with banking, operational, and industry network ecosystems.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://ocean.bca.co.id/",
        image: "/projects/bca-ocean.png",
      },
      {
        title: "BCA - Piala Presiden",
        description:
          "Piala Presiden esport 2023 is a premier esports tournament in Indonesia, showcasing top-tier competitive gaming talent across the nation.",
        tech: ["React", "Tailwind"],
        href: "https://www.bca.co.id/id/Campaign/2021/Piala-Presiden",
        image: "/projects/bca-piala-presiden.png",
      },
      {
        title: "BCA - Simulasi Obligasi",
        description:
          "An interactive bond return simulator for BCA's primary market, allowing users to calculate investment returns until maturity efficiently.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://www.bca.co.id/id/individu/produk/investasi-dan-asuransi/obligasi",
        image: "/projects/bca-simulasi-obligasi.png",
      },
      {
        title: "BCA - Bangga Lokal",
        description:
          "BCA's support program for MSMEs and local brands through business development, promotion, and transaction ease, including community collaboration and training.",
        tech: ["React", "TypeScript", "Tailwind"],
        href: "https://www.bca.co.id/id/Campaign/2020/bangga-lokal",
        image: "/projects/bca-bangga-lokal.png",
      },
    ],
  },

  // Technology Section
  technology: {
    title: "Tools that keep your next launch smooth",
    subtitle:
      "You don’t need to learn the stack—just know that every choice here keeps your site fast, secure, and easy to update. These are the ingredients I rely on to ship dependable results.",
  },

  // Contact Section
  contact: {
    title: "Let's Work Together",
    subtitle: "Have a project in mind? Let's talk about it.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
  },

  // Footer
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js and Tailwind CSS",
  },
};

export type Translations = typeof en;
