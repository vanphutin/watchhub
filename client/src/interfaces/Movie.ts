interface SeoOnPage {
  og_type: string;
  titleHead: string;
  descriptionHead: string;
  og_image: string[];
  og_url: string;
}

interface Breadcrumb {
  name: string;
  slug?: string;
  isCurrent: boolean;
  position: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Country {
  id: string;
  name: string;
  slug: string;
}

interface Item {
  modified: {
    time: string;
  };
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  type: string;
  poster_url: string;
  thumb_url: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: string;
  lang: string;
  year: number;
  category: Category[];
  country: Country[];
}

interface MovieData {
  seoOnPage: SeoOnPage;
  breadCrumb: Breadcrumb[];
  titlePage: string;
  items: Item[];
}

export interface ApiResponseMovie extends MovieData {
  status: string;
  msg: string;
}
