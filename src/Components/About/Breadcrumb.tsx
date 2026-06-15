import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-5">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index < items.length - 1 ? (
              <>
                <a
                  href={item.href ?? "#"}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </a>
                <ChevronRight size={14} className="text-gray-400" />
              </>
            ) : (
              <span className="text-sm text-gray-800 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;