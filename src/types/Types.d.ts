interface Product {
  id: number;
  name: string;
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface ResponsiveMenuProps {
  isOpen: boolean;
}
