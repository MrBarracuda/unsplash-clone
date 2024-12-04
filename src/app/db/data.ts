import {api} from "@/lib/utils";
import {type Random} from "unsplash-js/src/methods/photos/types";
import {type ApiResponse} from "unsplash-js/src/helpers/response";

export async function getRandomPhotos(count = 20) {
  const promise = await api.photos.getRandom({ orientation: "landscape", count }) as ApiResponse<Random[]>;
  const isFailed = promise.status !== 200 || !promise.response || promise.response.length <= 0

  return isFailed ? null : promise.response;
}

export async function getPhotosByQuery(query: string) {
  const promise = await api.search.getPhotos({query});
  const isFailed = promise.status !== 200 || !promise.response || promise.response.results.length <= 0

  return (isFailed ? null : promise.response?.results) as Random[] | null;
}
