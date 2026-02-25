// Profile data - all fields are optional
const content = {
  name: "Moh Rizky Sinaga", // optional
  avatar: "/images/rizky-formal.png", // optional
  cover: "/images/cover-bg.JPG", // optional
  bio: "IT Project Officer", // optional
  links: [ // optional array
    // title, description and image are generated based on the link (if available) and not provided explicitly
    {
      title: "Portfolio", // optional
      description: "Fully customizable design system for Next.js and Figma.", // optional
      url: "https://once-ui.com", // required if link object exists
      favicon: false
    },
    {
      title: "Magic Portfolio", // optional
      description: "The most awesome portfolio boilerplate built with Once UI.", // optional
      url: "https://magic-portfolio.com", // required if link object exists
      favicon: false
    },
    {
      title: "Design Engineers Club", // optional
      url: "https://designengineers.club", // required if link object exists
      favicon: false
    },
  ],
};

export { content };