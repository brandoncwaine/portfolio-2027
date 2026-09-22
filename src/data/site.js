export const site = {
  name: "Brandon Waine",
  role: "Designer and developer",
  intro:
    "Developer building high converting features for medium to large scale ecommerce brands.",
  email: "you@example.com",

  // Set active: false to hide the pill entirely.
  status: {
    active: true,
    prefix: "Currently working at",
    org: "54 Bit Studios",
    href: "",
  },
  links: [
    {
      label: "Email",
      value: "brandonwaine@outlook.com",
      href: "mailto:brandonwaine@outlook.com",
    },
    {
      label: "GitHub",
      value: "@brandoncwaine",
      href: "https://github.com/brandoncwaine",
    },
    {
      label: "LinkedIn",
      value: "/in/brandonwaine",
      href: "https://linkedin.com/in/brandon.waine",
    },
  ],
};

/* Each project becomes a case study page at /projects/<slug>.
   Order matters — the homepage shows the first three.

   slug     the URL, so keep it lowercase and hyphenated
   live     optional; renders a "Visit site" button when set
   sections each one is a heading with paragraphs, and an optional list */
export const projects = [
  {
    id: "001",
    slug: "component-library",
    title: "Component Library",
    blurb:
      "An internal component library for 54 Bit Studios that anyone on the team can publish to, with an MCP server so coding agents build against our own patterns.",
    year: "2026",
    role: "Design and build",
    at: "54 Bit Studios",
    live: "",
    sections: [
      {
        heading: "The problem",
        body: [
          "Every new build started by rewriting components we had already written. The same accordion, the same product card, the same form field — solved well once, then solved again slightly differently on the next project.",
          "Coding agents made it sharper. They are fast, but left alone they invent their own patterns, so the output looks like nobody on the team wrote it.",
        ],
      },
      {
        heading: "What it is",
        body: [
          "A component library anyone on the team can publish to. Closer in spirit to Tailwind UI than to a locked-down design system: you find the component you need, see how it is built, and take it.",
          "Keeping uploads open matters. A library only one person can add to stops reflecting how the team actually works within a month.",
        ],
      },
      {
        heading: "The MCP server",
        body: [
          "The library exposes an MCP server, so coding agents can read the components directly rather than guessing.",
          "The result is that generated code arrives already shaped like our code — our components, our conventions, our accessibility defaults — instead of something generic that has to be rewritten by hand.",
        ],
      },
    ],
  },
  {
    id: "002",
    slug: "laidback-london",
    title: "Laidback London",
    blurb:
      "A full ecommerce build for the footwear brand, extended from two initial page designs into the entire site.",
    year: "2025",
    role: "Development",
    at: "54 Bit Studios",
    live: "",
    sections: [
      {
        heading: "The brief",
        body: [
          "The project started with designs for two pages: the homepage and the product page. Everything else — the rest of a full ecommerce site — had to follow from those.",
        ],
      },
      {
        heading: "Extending the system",
        body: [
          "Rather than treat the two designs as one-offs, I pulled the type scale, spacing and component patterns out of them and used those to build the remaining templates. The pages that were never designed still read as though they were.",
          "That is the part of this kind of work I enjoy most: taking a small set of decisions someone has made carefully and extending them without diluting them.",
        ],
      },
      {
        heading: "Performance",
        body: [
          "The site scores highly across Lighthouse. On an ecommerce build that is not a vanity metric — the speed of the product page is part of whether the product sells.",
        ],
      },
    ],
  },
  {
    id: "003",
    slug: "ai-drive-thru",
    title: "AI-Powered Drive-Thru",
    blurb:
      "Combining hospitality experience with AI to streamline coffee shop drive-thru operations.",
    year: "2024",
    role: "Solo project",
    at: "Personal",
    live: "",
    sections: [
      {
        heading: "Background",
        body: [
          "I spent a long stretch working in hospitality, serving coffee and keeping the line moving. It is fast, social work, and it gives you a very concrete sense of where the minutes go.",
          "This project came directly out of that — not from looking for a problem to apply AI to, but from already knowing which parts of a drive-thru shift are worth fixing.",
        ],
      },
      {
        heading: "What it set out to do",
        body: [
          "The aim was to use technology to take pressure off the operation without taking the person out of it.",
        ],
        list: [
          "Streamline drive-thru operations",
          "Reduce wait times",
          "Improve order accuracy",
          "Support staff during peak hours",
        ],
      },
      {
        heading: "Hospitality meets technology",
        body: [
          "The interesting constraint was keeping the human part intact. The best drive-thrus are quick because the staff are good at it, not in spite of them — so the software had to make the job easier rather than replace the judgement in it.",
        ],
      },
    ],
  },
  {
    id: "004",
    slug: "buccs-life-hackathon",
    title: "BUCCS Life Hackathon",
    blurb:
      "Winner of Bournemouth University's BUCCS Life Hackathon, built solo in June 2024.",
    year: "2024",
    role: "Solo project",
    at: "Bournemouth University",
    live: "",
    sections: [
      {
        heading: "The brief",
        body: [
          "The hackathon was themed around life hacks: build software that solves an everyday problem. I entered as a solo team.",
        ],
      },
      {
        heading: "Working alone",
        body: [
          "A solo entry means every decision is yours, which is freeing right up until the point it is not.",
        ],
        list: [
          "Full ownership of design and engineering",
          "Managing time across each phase of the build",
          "Making technical calls without a second opinion",
          "Shipping something finished, not something half-built, by the deadline",
        ],
      },
      {
        heading: "The result",
        body: [
          "I won. More usefully, it taught me how much you can actually get done in a fixed window if you decide what to cut early rather than late.",
        ],
      },
    ],
  },
  {
    id: "005",
    slug: "bu-sustainability-platform",
    title: "BU Sustainability Platform",
    blurb:
      "An educational platform built for Bournemouth University's sustainability team during a hackathon in March 2024.",
    year: "2024",
    role: "Team of four",
    at: "Bournemouth University",
    live: "",
    sections: [
      {
        heading: "The project",
        body: [
          "Four of us built an educational platform for the university's sustainability team, aimed at promoting environmental awareness and more sustainable habits on campus.",
        ],
      },
      {
        heading: "Goals",
        body: [
          "The hackathon window was short, so the scope had to be honest about that.",
        ],
        list: [
          "Make the material engaging rather than worthy",
          "Support the university's existing environmental work",
          "Ship a working prototype inside the deadline",
        ],
      },
      {
        heading: "What I took from it",
        body: [
          "Most of the lessons were about coordination rather than code — splitting work so four people could move at once without standing on each other, and agreeing early on what was not going to make it in.",
        ],
      },
    ],
  },
];
