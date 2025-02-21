import { APL, FileAPL, UpstashAPL } from "@saleor/app-sdk/APL";
import { SaleorApp } from "@saleor/app-sdk/saleor-app";
import { VercelKvApl } from "@saleor/app-sdk/APL/vercel-kv";

/**
 * By default auth data are stored in the `.auth-data.json` (FileAPL).
 * For multi-tenant applications and deployments please use UpstashAPL.
 *
 * To read more about storing auth data, read the
 * [APL documentation](https://github.com/saleor/saleor-app-sdk/blob/main/docs/apl.md)
 */

export let apl: APL = new UpstashAPL({
  restURL: 'https://awake-magpie-18079.upstash.io',
  restToken: 'AUafAAIjcDFhODhlMjZmNTE2NjY0MGU5YTk2ODRiMzA0YTRhOTQwMnAxMA'
});

export const saleorApp = new SaleorApp({
  apl,
});
