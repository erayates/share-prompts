
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

## Screenshoots:
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/2rjr8tk.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/c05se59.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/biji06p.png)


## Notes
### Benefits of Next.js
* Next.js simplifies the development process.
* On top of that it optimizes your web apps.

Primary distinction between React.js and Next.js is rendering.
* React renders UI (User Interface) on the Client Side while Next.js performs Server Side Rendering (SSR).

However, Next.js offers flexibility in rendering options. You can choose the render the UI on the Client Side or Server Side according to your needs.


### Client Side Rendering (CSR):

CSR happens on the client's device or the browser. When a user request to a web page, the server sends a basic HTML document and Javascript code. The browser then downloads and executes the Javascript code which leads to the rendering of components and finally display of the Website.

### Server Side Rendering (SSR):

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

![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/bq04rkp.png)

Next.js recommend using server components (default in the app directory) until you have need to use a client component.

### Routing

Next.js uses file-based routing system. (The routing is handled by the file system.)
![Uygulama Ekran Görüntüsü](https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Flayouts-rfc%2Fapp-folder.png&w=3840&q=75)

![Uygulama Ekran Görüntüsü](https://blog.logrocket.com/wp-content/uploads/2023/03/next-js-13-app-template-tsx-routing-example.png)

**layout.js**

The file in which the components to be used in all the pages and components in the route are written only.

**loading.js**

Component to be used for loading operations provided by Next.js.

**error.js**

The file containing the classic error handling codes. (Must be client component.)

### API Routes

Enabling the creation of serverless functions to handle API requests.

Serverless APIs in Next.js are a way of creating API endpoints without the need for a traditional server.
It allows us to build and deploy APIs without managing server infrastructure or worrying about scaling their server as traffic increases.

With this feature we can create API endpoints by simply creating a file called **route.js** in a specific folder within the app directory.
This file in any route segment of the app directly corresponds to that route API endpoint.

### Automatic Code Splitting

Code splitting is a technique that breaks down large bundles of Javascript code into smaller, more manageable chunks that can be loaded as needed.
This reduces the inital load time of a website and optimizes the user's experience while browsing.
This process is handled automatically in Next.js when user navigates to another page, only the code required for that page is loaded, resulting in faster 
subsequent page navigations

**Next.js**
* Automating most of the remaining processes
* Letting us focus on building the essential business logic of the application.
* *Next.js is a extension of React.js*


### Data Fetching

Next.js offers 3 choices:
1. Server Side Rendering (SSR)
2. Static Site Generation (SSG)
3. Incremental Static Regeneration (ISR)

**Server Side Rendering (SSR):**

Means that dynamic server rendered data. It is fetched fresh on each request with SSR. Each request to the server, triggers
a new rendering cycle and data fetch ensuring that the content is always up-to-date here.

```
async function Page({params}){
  const res = await fetch(`...../api/${params.id}`,{
    cache: 'no-store',
  });
  const data = res.json();
}
```

**Static Site Generation (SSG):**

For the SSG, only thing wee need to do is *remove*
```
cache: 'no-store',
```
That means that by default Next.js uses SSG.

**Incremental Static Regeneration (ISR):**

Instead of
```
{cache: 'no-store'}
```
we add additional parameter
```
{next: {revalidate: 10}}
```

It combines the benefits of SSR and SSG for dynamic content and static sites.
With ISR, you can specify certain data to be statically fetched at build time while defining a revalidation time interval.
This means that data will be cached but after a specific time frame, it's then going to refresh it and you're always going to have new data.

### API Endpoints

Next.js allows us to handle HTTP requests and develop back-end functionality without requiring and external server.
![Uygulama Ekran Görüntüsü](https://www.hizliresim.com/upload-success)

In Node.js with Express, create new app.get route handler and send a response within this route. We have to make our application
listen on a specific port because this is a server that always has to be alive to be able to accept incoming requests.

Recommendad way the first approach of creating the API routes meaning don't create routes right within the app folder.
Rather to keep our code clean and understandable *keep all the backend related logic and API endpoints within **app > api** folder.*

**route.js ->** Special name for create backend features.

### Next.js Support Following HTTP Methods:

**GET ->** Retrieves data from the server. 

**POST ->** Submits data to the server to create a new resource.

**PUT ->** Updates or replaces an existing resource on the server. 

**PATCH ->** Partially updates an existing resource on the server.

**DELETE ->** Removes a specific resource from the server.

**HEAD ->** Retrieves the headers of a resource without fetching its body.

**OPTIONS ->** Retrieves the supported methods and other communication options for a resource.


**Example:**

*api > users > route.js
```
export async function GET(req){
  const users = [....];
  return new Response(JSON.stringify(users));
}
```

*We don't need to add any extra things to handle routers.*

### SEO & Metadata

We can define metada in two ways:
1. Static Metadata
2. Dynamic Metada

**Static Metadata:**

With the static way, you'll have to do something like this:
```
export const metadata = {
  title: 'Home';
 };
 
 OUTPUT:
 <head>
  <title>Home</title>
 </head>
```

**Dynamic Metadata:**

We need to export an async function called "generateMetadata" thats going to get the dynamic params of a specific page.
```
export async function generateMetadata({params,searchParams}){
  const product = await getProduct(params.id);
  return {title: product.title}
}

OUTPUT:
<head>
  <title>My Unique Product</title>
</head>
```


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
