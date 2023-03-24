This project demonstrates an issue with loading a Svelte component inside a non-Svelte component.

Steps to reproduce:
1. Run the application with `npm run dev`.  Typically it will run on localhost:5173.
2. Go to "http://localhost:5173/test-page/index.html"
3. Click the "Click to load SvelteKit Component" button.
4. The page will make a jQuery ajax call, fetch "http://localhost:5173/embedded", and put the resulting HTML in the "#svelte-target" div.

What will then happen is that the Svelte component will be loaded into the div **and** forced into the head of the page, breaking all javascript and CSS.
