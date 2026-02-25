// Profile data - all fields are optional
const content = {
  name: "Moh Rizky Sinaga", // optional
  avatar: "/images/rizky-formal.png", // optional
  cover: "/images/cover-bg.JPG", // optional
  bio: "IT Project Officer", // optional
  links: [
    {
      title: "Portfolio Space",
      description:
        "A curated collection of systems, interfaces, and web products I’ve built.",
      url: "https://portfolio.ikjoen.space",

      media: "/images/portfolio-preview2.png",
      favicon: "/images/favicon.ico",
      size: "l",
    },
    {
      title: "Curriculum Vitae",
      description:
        "A collection of my professional background and qualifications.",
      url: "https://drive.google.com/file/d/1OmZRgmDCZQS-R8zsnUOPnCJgLF6SMDe0/view?usp=sharing",

      media: "/images/cv-preview3.png",
      direction: "column",
      size: "l",
    },
    // {
    //   title: "Magic Portfolio", // optional
    //   description: "The most awesome portfolio boilerplate built with Once UI.", // optional
    //   url: "https://magic-portfolio.com", // required if link object exists
    //   favicon: true
    // },
    // {
    //   title: "Design Engineers Club", // optional
    //   url: "https://designengineers.club", // required if link object exists
    //   favicon: false
    // },
  ],
};

export { content };