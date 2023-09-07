import { createClient } from '@/prismicio';
import Link from 'next/link';

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <footer className='flex flex-row-reverse w-full px-4 py-2'>
      <Link href='/'>
        ©{new Date().getFullYear()} {settings.data.site_title}
      </Link>
    </footer>
  );
}
