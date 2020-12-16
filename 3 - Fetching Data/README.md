# Fetching Data

Some of the Next features on improving data fetching on the pages.

- In Next we can create join or client and server, using the API feature on Next. That feature create a unique and independent route for each file created at `api/...`, so with that we can create endpoints on our application and that endpoints turns on lambda functions to serve the data independently.
- Next have a hook called useSWR, that hook serve as wrapper for fetch functions. That hook trigger the fetch and returns any errors or data if exists, and when we focus on the application the hook refetch the data for us.
