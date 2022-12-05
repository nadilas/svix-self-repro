import { type AppType } from "next/dist/shared/lib/utils";
import { SvixProvider } from "svix-react";
import { env } from "../env/client.mjs";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<SvixProvider token={env.NEXT_PUBLIC_SVIX_API_KEY} appId={"asdf"} options={{
    serverUrl: "https://api.us.svix.com"
  }}><Component {...pageProps} /></SvixProvider>);
};

export default MyApp;
