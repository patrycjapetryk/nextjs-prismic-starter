import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return (
    <main className='flex flex-col items-center'>
      <h1 className='font-display text-xl'>{page.data.title}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
