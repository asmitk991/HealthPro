interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm mb-8">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <span className="mx-2 text-gray-400">/</span>}
          {item.href ? (
            <a href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}