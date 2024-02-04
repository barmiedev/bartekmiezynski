import { sanityClient } from 'sanity:client';

async function get(query: string) {
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getConcerts() {
  const query = `*[_type == "concert"]`;
  return get(query);
}

export async function getSpecificConcert(slug: string) {
  const query = `*[_type == "concert" && slug.current == "${slug}"][0]`;
  return get(query);
}

export async function getLastConcert() {
  const query = `*[_type == "concert" && date < now()][0]`;
  return get(query);
}

export async function getUpcomingConcerts() {
  const query = `*[_type == "concert" && date > now()]`;
  return get(query);
}
