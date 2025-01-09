import { bggradient } from "../../constants";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assets/pdf/resume.pdf";

// Set the worker path
pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/+esm';


const Reusme = () => {
  return (
    <section className="flex text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="h-full w-full bg-slate-950">
          <div className={bggradient}></div>
        </div>
      </div>
      <div className="w-full h-full mt-28 overflow-auto">
        <Document
          file={resume}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
          onLoadSuccess={() => console.log("PDF loaded successfully")}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};

export default Reusme;