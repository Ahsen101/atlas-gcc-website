export interface DetailItem {
  name: string;
  name_ar: string;
  slug: string;
  desc_en: string;
  desc_ar: string;
  photo_file: string | null;
  photo_width?: number;
  photo_height?: number;
  photo_alt_en?: string | null;
  photo_alt_ar?: string | null;
  photo_source_url?: string | null;
  photo_author?: string | null;
  photo_licence?: string | null;
  attribution?: string | null;
}

export interface DetailCard {
  card_heading: string;
  card_heading_ar: string;
  card_slug: string;
  items: DetailItem[];
}
