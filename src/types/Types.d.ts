interface Product {
  id: number;
  name: string;
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  feature: string;
  image: { mobile: string; tablet: string; desktop: string };
}

interface ResponsiveMenuProps {
  isOpen: boolean;
}

interface CategoryPageProps {
  categoryName?: string;
}
interface ImageSet {
  desktop: string;
  tablet: string;
  mobile: string;
}
