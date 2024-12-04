import {api} from "@/lib/utils";
import {type Random} from "unsplash-js/src/methods/photos/types";
import {type ApiResponse} from "unsplash-js/src/helpers/response";

export async function getRandomPhotos(count = 30, query?: string) {
  const promise = await api.photos.getRandom({ count, query }) as ApiResponse<Random[]>;
  const isFailed = promise.status !== 200 || !promise.response || promise.response.length <= 0

  return isFailed ? null : promise.response;
}