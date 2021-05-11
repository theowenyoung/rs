const siteMetadata = {
  siteUrl: "https://sideproject.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "国外股市热门",
  shortTitle: "股市热门",
  description: "用中文浏览国外股票社区里的热门讨论",
  keywords: ["buzzing", "股市热门", "国外股市热门"],
  telegram: "@stocks_top",
  telegram_chat_id: "-1001246603580",
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
    // {
    //   name: "RSS",
    //   url: "/rss.xml",
    //   prefetch: false,
    // },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @国外股市热门讨论",
      url: "https://t.me/stocks_top",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name:"Reddit Stocks",
      url:"https://www.reddit.com/r/stocks",
      external:true
    },
    {
      name:"Reddit Investing",
      url:"https://www.reddit.com/r/investing",
      external:true
    },
    {
      name: `Reddit Bogleheads`,
      url: `https://www.reddit.com/r/Bogleheads/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Stocks`,
      shortTitle: "BuzzStocks",
      description: `See popular discussions in foreign stock communities in your native language`,
      keywords: ["buzzing", "Stocks"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
        // {
        //   name: "RSS",
        //   url: "/en/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "國外股市熱門",
      shortTitle: "股市熱門",
      description: "用中文瀏覽國外股票社區裡的熱門討論",
      keywords: ["buzzing", "股市熱門"],
      menuLinks: [
        {
        name: "每週精選",
        url: "/zh-Hant/issues",
        },
        // {
        //   name: "RSS",
        //   url: "/zh-Hant/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
    {
      locale: "ja",
      title: "米国株式市場人気の話し合います",
      shortTitle: "米国株",
      description: "人気の米国株式市場の話し合いまを日本語で閲覧",
      keywords: ["buzzing", "米国株式市場"],
      menuLinks: [
        {
        name: "每週精選",
        url: "/ja/issues",
        },
        // {
        //   name: "RSS",
        //   url: "/zh-Hant/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
