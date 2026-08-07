import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import PdfViewer from '@/components/resume/PdfViewer';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume / CV
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            View or download my professional resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-4xl w-full">
          <PdfViewer />
        </div>
      </div>
    </Container>
  );
}
