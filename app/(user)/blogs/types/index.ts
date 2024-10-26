export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  filesize: number;
}

export interface FeaturedMediaObject {
  id: number;
  title: string;
  caption: string;
  description?: string;
  media_details: MediaDetails;
  source_url: string;
}

export interface Blog {
  id: number;
  date: string; 
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  categories: Category[];
  featured_media_object: FeaturedMediaObject;
}
