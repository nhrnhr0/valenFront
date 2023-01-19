import { GALLERY_API_URL, POSTS_API_URL } from '../consts.server';



/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  //   const res = await getPageInfo(fetch);
  // const json =  await res.json();
  //   return json;
  let res = await getPageInfo(fetch);
  console.log(res);
  return res;
}



async function getPageInfo(fetch) {
  // return an object with {posts: [{...}, {...}], gallery: [{...}, {...}]}
  const gallery = fetch(GALLERY_API_URL);
  const posts = fetch(POSTS_API_URL);
  const [galleryRes, postsRes] = await Promise.all([gallery, posts]);
  const [galleryJson, postsJson] = await Promise.all([galleryRes.json(), postsRes.json()]);
  return { gallery: galleryJson, posts: postsJson };
}