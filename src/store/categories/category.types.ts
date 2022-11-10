export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCESS = "category/FETCH_CATEGORIES_SUCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}
export type CategoryItemSizeUnit = {
  inch: string;
};

export type CategoryItemSizeInch = {
  length: Array<string>;
  chest: Array<string>;
  sleeve: Array<string>;
};

export type CategoryItemSize = {
  type: Array<string>;
  name: Array<string>;
  inch: CategoryItemSizeInch[];
  unit: CategoryItemSizeUnit[];
};

export type CategoryItemImage = {
  img1: string;
  img2: string;
  img3?: string;
  img4?: string;
};

export type CategoryItemDescription = {
  desc1: string;
  desc2?: string;
};

export type CategoryItem = {
  id: number;
  name: string;
  price: number;
  isOnSale: boolean;
  images: CategoryItemImage[];
  description: CategoryItemDescription[];
  size: CategoryItemSize[];
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
