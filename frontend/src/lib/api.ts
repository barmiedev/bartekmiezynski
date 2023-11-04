import { sanityClient } from 'sanity:client';

async function get(query: string) {
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getAllReleases() {
  const query = `*[_type == "release"]`;
  return get(query);
}

export async function getCurrentPromoRelease() {
  const query = `*[_type == "release" && active == true][0]`;
  return get(query);
}

export async function getSpecificRelease(slug: string) {
  const query = `*[_type == "release" && slug.current == "${slug}"][0]`;
  return get(query);
}

export async function getImage(ref: string) {
  const query = `*[_type == "photo" && _id == "${ref}"]{author,photo}[0]`;
  return get(query);
}
