import {createApi} from "unsplash-js";
import {env} from "@/env";

export const api = createApi({
  accessKey: env.UNSPLASH_ACCESS_KEY,
});