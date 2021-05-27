export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b01b3b2ff2dd470807dade",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-oy9y24gw",
                  apiId: "6f6d8b00-0083-4314-81fe-9d1832da0631",
                },
                {
                  buildHookId: "60b01b3b617acf44263e2e92",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4yvrn1ak",
                  apiId: "240e38f1-8a3c-4c8e-8126-e0ea6c2c685a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/manjula91/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4yvrn1ak.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
