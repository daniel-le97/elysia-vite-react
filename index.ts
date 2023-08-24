import { Elysia } from 'elysia';
import { elysiaVite } from 'elysia-vite';
const app = new Elysia()
    .get( '/', () => 'hello' )
    .use( elysiaVite( {
        base: '/app', // url path to serve index.html file or leave blank to serve as root path
        viteConfigFile: `${ process.cwd() }/vite.config.ts`, // absolute path to your vite config file
        entryHtmlFile: `${ process.cwd() }/src/client/index.html`, // absolute path to your entry html file
        entryClientFile: `${ process.cwd() }/src/client/entry-client.jsx`, // absolute path to your entry script file
        isReact: true, // inject React's specific HRM code @see https://vitejs.dev/guide/api-hmr.html
        placeHolderDevScripts: '<!--vite-dev-scripts-->', // placeholder to replace vite scripts
    } ) )
    .listen( 3333 );
console.log( ( 'http://' + app.server?.hostname + ':' + app?.server?.port  + '/app/') );