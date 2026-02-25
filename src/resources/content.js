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
        "Selected projects in UI/UX design, frontend engineering, and scalable digital systems built for real-world impact.",
      url: "https://portfolio.ikjoen.space",
      favicon: true,
      size: "l" // ini penting
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