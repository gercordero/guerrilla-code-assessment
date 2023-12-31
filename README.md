This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

In order to get started, first install the dependencies and then run the development server:

```bash
# Install dependencies
yarn

# Run the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Things to improve and comments

I dedicated a total of 3 hours and 40 minutes to almost completing this assessment. The only unfinished section is the final part before the footer. However, I prioritized the essential tasks, which involved implementing contentful data fetching using GraphQL and implementing client-side filtering. I also focused on developing the hero section and the overall layout.

While working on this project, I made efforts to ensure the responsiveness of the page. Although there is some repetitive code that could be consolidated, time constraints prevented me from addressing this issue. Similarly, certain theming values could have been moved to the theme configuration file of Tailwind CSS instead of being hardcoded and duplicated throughout the codebase. Additionally, I would have liked to include a type generator for GraphQL to generate types for all the data queries made to contentful.

One aspect that can be further improved is the naming of the component called "properties." For simplicity and to expedite development, I used a temporary name that came to mind to identify the component quickly. In the interest of better code organization and maintainability, renaming it to something more generic like "CardGrid" or a similar appropriate name would be recommended.

Furthermore, to enhance the project's architecture, it would be beneficial to move the GraphQL query that is currently in the getStaticProps function to a dedicated "services" folder. This would result in a more structured project organization, facilitating better separation of concerns and improving code maintainability.

Overall, I did not encounter any significant difficulties during the exercise, except for the aforementioned minor issues that I had to prioritize in order to optimize my time and deliver as many functionalities as possible. I hope you appreciate my approach to this assessment. If you have any questions or concerns, please feel free to reach out to me. I am more than happy to provide further clarification. 😊
