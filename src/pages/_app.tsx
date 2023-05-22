import { type AppType } from "next/dist/shared/lib/utils";
import { SvixProvider } from "svix-react";
import { env } from "../env/client.mjs";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SvixProvider
      token={env.NEXT_PUBLIC_SVIX_API_KEY}
      appId={env.NEXT_PUBLIC_SVIX_APP_ID}
    >
      <Component {...pageProps} />
    </SvixProvider>
  );
};

export default MyApp;
