export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
}

export interface RatingType {
  rate: number;
  count: number;
}

export type ProductsApiResponse = ProductType[];

export type ProductsContainerPropsType = {
  data: ProductsApiResponse | undefined;
};

export interface ProductCardProps extends ProductType {
  isListView: Boolean;
}
