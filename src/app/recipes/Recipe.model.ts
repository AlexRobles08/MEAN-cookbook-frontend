export interface Recipe {
  _id: string;
  name: string;
  slug: String;
  description: string;
  serves: string;
  categories: string[];
  prep: { hours: number; minutes: number };
  cook: { hours: number; minutes: number };
  readyIn: { hours: number; minutes: number };
  notes: string;
  directions: string[];
  source: string;
  author: string;
  ingredients: { name: string; measurement: string; note: string }[];
  rating: number;
  photo: string;
  createdAt: Date;
}
