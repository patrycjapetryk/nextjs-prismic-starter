import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID('page', params.uid).catch(() => notFound());

  return (
    <main className='flex flex-col items-center'>
      <h1 className='font-display text-xl'>{page.data.title}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('page', params.uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('page');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
