import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    console.log(`handle - event = `, event)
    if (event.url.pathname.startsWith('/custom')) {
        return new Response('custom response');
    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;