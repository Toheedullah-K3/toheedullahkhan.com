import Container from '@/components/common/Container';
import { LinksShell } from '@/components/links/LinksShell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Links – Toheedullah Khan',
  description:
    'All the important links to my work, projects, writing, and social profiles in one place.',
}; 

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-neutral-950 via-neutral-950 to-neutral-900 text-neutral-50">
      <Container className="flex min-h-screen items-center justify-center py-10 sm:py-16">
        <LinksShell />
      </Container>
    </main>
  );
}

