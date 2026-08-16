import { getCollection } from 'astro:content';

type CollectionName = 'blog' | 'projects' | 'events';

export async function getSortedCollection(collectionName: CollectionName) {
  const collection = await getCollection(collectionName);
  return collection.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
