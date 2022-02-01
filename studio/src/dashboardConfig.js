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
                    "61f91374d85c46a703ab7b3c",
                  title: "Sanity Studio",
                  name: "rpba-sanity-gatsby-blog-studio",
                  apiId: "8a5b9fe9-83eb-43c8-aab1-831828f7be82",
                },
                {
                  buildHookId: "61f91374ac0a81a8d1e4b61d",
                  title: "Blog Website",
                  name: "rpba-sanity-gatsby-blog",
                  apiId: "cf9141d6-d266-42a9-ad93-3e555c5da443",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ashokhce/RPBA-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://rpba-sanity-gatsby-blog.netlify.app",
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
