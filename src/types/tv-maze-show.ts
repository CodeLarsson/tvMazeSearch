export type TvMazeShow = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string | null;
  schedule: TvMazeShowSchedule;
  rating: TvMazeShowRating;
  weight: number;
  network: TvMazeShowNetwork;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: TvMazeShowExternal;
  image: TvMazeShowImage;
  summary: string;
  updated: number;
  _links: TvMazeShowLinks;
};

export type TvMazeShowResponse = {
  score: number;
  show: TvMazeShow;
};

type TvMazeShowRating = {
  average?: number;
};

type TvMazeShowExternal = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
};

type TvMazeShowLinks = {
  self: {href: string};
  previousepisode: {href: string};
  nextepisode?: {href: string};
};

type TvMazeShowSchedule = {
  time: string;
  days: string[];
};

type TvMazeShowNetwork = {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  officialSite: string;
};

type TvMazeShowImage = {
  medium?: string;
  original?: string;
};
