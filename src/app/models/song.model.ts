export interface Song {
  _id: number;
  title?: string;
  titolo?: string;
  album: string;
  artist: string,
  lyrics: string;
  genre: string;
  image: string;
  date: string;
  duration: string;
  video: string;
  published: boolean;
  createdAt?: Date;
}
