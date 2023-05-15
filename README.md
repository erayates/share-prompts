
# Share Prompt

Share Prompt is an open-source AI prompting tool for modern world to
discover, create and share creative prompts.

( This project is a clone project to learn Next.js clearly. Thanks for 
JavaScript Mastery for this project. )

## Demo
You can test live demo:
https://share-prompts-app.vercel.app/


## Additional Implementations To The Project
* Implementing Search
* Implemeting Click on Tag
* Implement View Other Profiles


## Notes
### Benefits of Next.js
* Next.js simplifies the development process.
* On top of that it optimizes your web apps.

Primary distinction between React.js and Next.js is rendering.
* React renders UI (User Interface) on the Client Side while Next.js performs Server Side Rendering (SSR).

However, Next.js offers flexibility in rendering options. You can choose the render the UI on the Client Side or Server Side according to your needs.


### Client Side Rendering (CSR)
CSR happens on the client's device or the browser. When a user request to a web page, the server sends a basic HTML document and Javascript code. The browser then downloads and executes the Javascript code which leads to the rendering of components and finally display of the Website.

### Server Side Rendering (SSR)
SSR involves rendering the web pages on the server before transmitting it to the client's device. When a user request to a web page, the server processes the req. and renders the components on the server side. The server then sends back the fully rendered HTML to the client's browser enabling immediate display.

This distinction highlights an essential aspects of Web Dev. (SEO)
* Search Engine crawlers face difficulties indexing pages dynamically rendering on the client side. As a result of the SEO performance of such pages may suffer. By utilizing Next.js this issue is resolved by sending pre-rendered code directly to the client. This enables easy crawling and indexing by search engines leading to the improved SEO.

### Why should I prioritize SEO?
SEO is crucial for optimizing a website's visibility and ranking in search engine results.
You can achive several benefits, including:
* Increased organic traffic
* Enhanced user experience
* Credibility & Trustworthiness
* Competitive advantage


### Folder Structure
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/brai2bb.png)


**globals.css**

That file contains the global css styles of the entire application.

**layout.js**

Main entry point of our application and all of the components are wrapped within it as its children. Any code you write in this file will be displayed on every route page that you create.
**Any components you include in in this file will be shared throughout your entire application.** 

**page.js**

Purpose of the page.js file is that it simply **represents the home page route of the application.**


### Server & Client Components
By default all components created in Next.js (within the app folder) are React server components. Which means that Next.js leverages server-side rendering to enhance the initial page loading speed resulting in improved SEO and user experience. In case, you want to turn that server side component by default into a client-side. In this situation, you need to add the **"use client"** directive to the top of your page to turn it into a client-side component.

Using both the client components and the server components allows us to leverage the benefits of server-side rendering while still utilizing React capabilities for building dynamic and interactive user interfaces.

Whenever you're utilizing state or hooks like useState, useEffect in React, or other client side management solutions ***it is important to declare the component as a client-side component***

**Summary:** State management in React.js primarily handled on the client side where the component state managed and updated within the browser.
So if you are using any React hooks you need "use client" at the top of your code.


### When I Use Server Component or Client Component?




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
