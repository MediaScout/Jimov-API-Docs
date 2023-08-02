export default defineAppConfig({
  docus: {
    title: "JIMOV",
    description:
      "This project is an open-source API for retrieving multimedia content such as anime, movies and series, news, and manga in both Spanish and English.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      github: "koikiss-dev/jimov_api",
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        text: "Discord",
        href: "https://discord.com/invite/tyZ39GCX7R",
        icon: "",
      },
    },
    github: {
      edit: true,
      repo: "https://github.com/koikiss-dev/jimov_api",
      owner: "koikiss-dev",
      branch: "main",
    },
  },
});
