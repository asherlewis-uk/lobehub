/// <reference types="node" />
import type { CapacitorConfig } from '@capacitor/cli';

/**
 * LobeHub iOS (Capacitor) configuration.
 *
 * Backend strategy:
 * The LobeHub SPA talks to its backend on the same origin (relative URLs). A
 * bundled WebView is served from `capacitor://localhost`, so bundled API calls
 * would not reach the server. To ship a working app, the native WebView loads
 * the hosted site directly via `server.url`. Auth, tRPC and streaming then work
 * exactly as they do in the browser.
 *
 * - Default: load https://app.lobehub.com (production).
 * - Override: set `LOBE_MOBILE_SERVER_URL` (e.g. http://localhost:3010 for a
 *   local dev server, or a LAN IP when testing on a physical device).
 * - Offline/bundled mode: set `LOBE_MOBILE_SERVER_URL=""` (empty) to load the
 *   bundled mobile SPA from `www` instead. NOTE: bundled mode additionally
 *   requires the SPA to be built with an absolute API base URL — see README.
 */
const DEFAULT_SERVER_URL = 'https://app.lobehub.com';

const rawServerUrl = process.env.LOBE_MOBILE_SERVER_URL;
const serverUrl = rawServerUrl === undefined ? DEFAULT_SERVER_URL : rawServerUrl;

const config: CapacitorConfig = {
  appId: 'com.lobehub.app',
  appName: 'LobeHub',
  ios: {
    // Let the web content manage its own safe-area insets.
    contentInset: 'always',
  },
  webDir: 'www',
  ...(serverUrl
    ? {
        server: {
          cleartext: serverUrl.startsWith('http://'),
          url: serverUrl,
        },
      }
    : {}),
};

export default config;
