import Footer from "./Footer";
import Headers from "./Headers";
import Thumbnail from "./Thumbnail";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Headers />
      <div className="px-5 md:px-0 max-w-4xl mx-auto prose dark:prose-invert">
        <Thumbnail />
        {children}
      </div>
      <Footer />
    </div>
  );
}
