import { useState } from 'react';
import { bggradient } from '../../constants/index';
import resume from '../../assets/pdf/resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';

// Log the version to verify
console.log('PDF.js version:', pdfjs.version);

// Use the matching version
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="flex text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="h-full w-full bg-slate-950">
          <div className={bggradient}></div>
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center w-full p-5 mt-28 overflow-auto">
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map(page => {
            return (
              <Page
                key={page}
                className="mt-3 w-[100%]"
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                
              />
            );
          })}
        </Document>
        
      </div>
    </section>
  );
};

export default Resume;
