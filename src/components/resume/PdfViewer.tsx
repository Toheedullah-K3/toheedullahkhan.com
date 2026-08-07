'use client';

import React, { useState } from 'react';
import { Download, ExternalLink, Eye, RefreshCw, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeConfig } from '@/config/Resume';

export default function PdfViewer() {
  const [viewMode, setViewMode] = useState<'local' | 'drive'>('local');
  const pdfUrl = resumeConfig.url;

  return (
    <div className="w-full space-y-4">
      {/* Top Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <FileText className="size-5 text-primary" />
          <span className="font-semibold text-sm sm:text-base">
            Toheed Ullah Khan — Resume
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Toggle Native vs Google Drive */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode(viewMode === 'local' ? 'drive' : 'local')}
            className="text-xs"
          >
            <RefreshCw className="mr-1.5 size-3.5" />
            {viewMode === 'local' ? 'Switch to Google Drive' : 'Switch to Direct PDF'}
          </Button>

          {/* Open Fullscreen / New Tab */}
          <Button variant="outline" size="sm" asChild className="text-xs">
            <a
              href={viewMode === 'local' ? pdfUrl : resumeConfig.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1.5 size-3.5" />
              Open Full Screen
            </a>
          </Button>

          {/* Download Button */}
          <Button size="sm" asChild className="text-xs font-medium">
            <a href={pdfUrl} download="Toheed_Ullah_Khan_Resume.pdf">
              <Download className="mr-1.5 size-3.5" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      {/* PDF Container */}
      <div className="relative w-full overflow-hidden rounded-xl border bg-card shadow-md">
        {viewMode === 'local' ? (
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full min-h-[850px] md:min-h-[1100px] border-none"
          >
            <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
              <p className="text-muted-foreground">
                Your browser does not support embedded PDF viewing.
              </p>
              <Button asChild>
                <a href={pdfUrl} download="Toheed_Ullah_Khan_Resume.pdf">
                  <Download className="mr-2 size-4" /> Download Resume PDF
                </a>
              </Button>
            </div>
          </object>
        ) : (
          <iframe
            src={resumeConfig.driveUrl}
            className="w-full border-none min-h-[850px] md:min-h-[1100px]"
            title="Resume Preview"
          />
        )}
      </div>
    </div>
  );
}
