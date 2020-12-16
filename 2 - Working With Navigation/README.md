# Working With Navigation

Some of the Next.js features on dynamic routing.

- Next `<Link>` serves as a prefetch handler, so when we open a page the application search for the `Link`'s in the dom and prepare that specific pages for navigation, creating a smooth transition between routes.
- Next provides a simple to pass params between routes. When we are creating or routes we can use brackets `[]` to define a route prop/query/param, so with that we can define on `Link` the prop to be passed using the `as="smt/foo"` prop for that.
- For accessing the props passed on the routes we can use the useRoute hook builtin on Next.
- In Next we can fetch initial data to give the page already populated, for this we use the `getInitialProps` function, that function handle the data fetching and return the props we can use on the component.
