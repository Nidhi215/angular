export interface Item {
    index?: number;
    title?: string;
    price?: number;
    description?: string;
    isDiscount?: boolean;
    discount?: number;
  }
  
  export interface ItemPosts {
    body?: string;
    id?: number;
    title?: string;
    userId?: number;
  }
  