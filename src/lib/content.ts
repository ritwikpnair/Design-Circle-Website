import { getCollection, type CollectionEntry } from 'astro:content';

export async function getSortedCollection(
  collectionName: 'blog' | 'projects' | 'events',
): Promise<Array<CollectionEntry<'blog' | 'projects' | 'events'>>> {
  const entries = await getCollection(collectionName as any);

  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  ) as Array<CollectionEntry<'blog' | 'projects' | 'events'>>;
}
