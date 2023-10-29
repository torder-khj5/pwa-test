import { NavigationRoute, registerRoute } from 'workbox-routing';
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';

declare let self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html'), { denylist: [/^\/backoffice/] }));
