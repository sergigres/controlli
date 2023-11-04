import { Movie } from "./movie";

export interface ApiData {
    Response: boolean;
    Search: Movie[];
    totalResults: number;
  }