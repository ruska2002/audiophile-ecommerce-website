interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludeItem {
  quantity: number;
  item: string;
}

interface OtherProduct {
  name: string;
  slug: string;
  image: ImageSet;
}

interface Gallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

export interface ResponsiveMenuProps {
  isOpen: boolean;
  toggleBasket: () => void;
}
interface CategoryPageProps {
  categoryName?: string;
}

interface BasketItem {
  id: number;
  name: string;
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

export interface ProductType {
  id: number;
  slug: string;
  name: string;
  price: number;
  quantity?: number;

  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  new: boolean;
  description: string;
  features: string;

  includes: {
    quantity: number;
    item: string;
  }[];

  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };

  others: {
    category: string;
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];

  home?: string;
  middle?: string;
}
