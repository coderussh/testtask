export interface IMovie {
  id: number;
  title: string;
  genre: string;
  year: number;
  maker: string;
  rating: number;
}
export const movies: IMovie[] = [
  {
    id: 1,
    title: 'Now Where Did the Seventh Company Get to? (Mais où est donc passée la 7ème compagnie)',
    genre: 'Action|Comedy|War',
    year: 1993,
    maker: 'Schumm-Murray',
    rating: 4.9,
  },
  { id: 2, title: 'Murder in Coweta County', genre: 'Crime|Drama', year: 1995, maker: 'Streich Inc', rating: 5.4 },
  { id: 3, title: 'Like Father, Like Son', genre: 'Comedy', year: 2006, maker: 'Orn-Rohan', rating: 6.0 },
  { id: 4, title: 'Adulthood', genre: 'Drama', year: 1996, maker: 'Hamill, Schmeler and McGlynn', rating: 6.6 },
  { id: 5, title: 'Will', genre: 'Children|Drama', year: 1999, maker: 'Hahn and Sons', rating: 5.1 },
  { id: 6, title: 'Toolbox Murders', genre: 'Horror|Mystery', year: 2005, maker: 'Stroman-Leannon', rating: 4.9 },
  { id: 7, title: 'Soloalbum', genre: 'Comedy|Romance', year: 2003, maker: 'Daugherty LLC', rating: 2.4 },
  {
    id: 8,
    title: 'Fulltime Killer (Chuen jik sat sau)',
    genre: 'Action|Thriller',
    year: 2012,
    maker: 'Barton, Thiel and Zulauf',
    rating: 1.0,
  },
  { id: 9, title: 'Phil Spector', genre: 'Drama', year: 1996, maker: 'Baumbach, Mann and Feest', rating: 1.7 },
  { id: 10, title: 'Chasing Papi (a.k.a. Papi Chulo)', genre: 'Comedy', year: 2003, maker: 'Bogan-Rowe', rating: 7.9 },
  {
    id: 11,
    title: 'Bonjour Monsieur Shlomi (Ha-Kochavim Shel Shlomi)',
    genre: 'Comedy|Drama',
    year: 1995,
    maker: 'Barton, Cole and Hagenes',
    rating: 9.5,
  },
  {
    id: 12,
    title: 'What Have I Done to Deserve This? (¿Qué he hecho yo para merecer esto!!)',
    genre: 'Comedy|Drama',
    year: 1999,
    maker: 'Jacobi Group',
    rating: 6.4,
  },
  {
    id: 13,
    title: 'State of Play',
    genre: 'Crime|Drama|Mystery',
    year: 2003,
    maker: 'Johnston, Hills and Fritsch',
    rating: 2.1,
  },
  { id: 14, title: 'Landscape Suicide', genre: 'Crime|Drama', year: 1998, maker: 'Brekke-Kirlin', rating: 2.9 },
  { id: 15, title: 'Faust', genre: 'Animation|Comedy|Thriller', year: 1998, maker: 'Russel-Nolan', rating: 3.8 },
  {
    id: 16,
    title: 'Librarian, The: The Curse of the Judas Chalice',
    genre: 'Action|Adventure|Fantasy',
    year: 1993,
    maker: "D'Amore-Wolff",
    rating: 9.1,
  },
  {
    id: 17,
    title: 'Bad Boys',
    genre: 'Crime|Drama|Thriller',
    year: 1990,
    maker: 'Bosco, Cummerata and Langosh',
    rating: 7.6,
  },
  { id: 18, title: 'Nobody Walks', genre: 'Drama', year: 2000, maker: 'Kunze, Zemlak and Bosco', rating: 8.6 },
  { id: 19, title: 'Violin, El', genre: 'Drama', year: 1993, maker: 'Towne-Grant', rating: 7.4 },
  { id: 20, title: 'Hunger', genre: 'Drama', year: 2008, maker: 'Kunze, Grimes and Klocko', rating: 8.4 },
  { id: 21, title: 'Chariots of Fire', genre: 'Drama', year: 1988, maker: 'Roob LLC', rating: 9.4 },
  {
    id: 22,
    title: 'Jour se lève, Le (Daybreak)',
    genre: 'Crime|Drama|Romance|Thriller',
    year: 1993,
    maker: 'Stracke-Moen',
    rating: 8.8,
  },
  { id: 23, title: 'The Other Side of the Mountain', genre: 'Drama', year: 2007, maker: 'Kreiger Group', rating: 9.1 },
  { id: 24, title: 'Amnèsia', genre: 'Comedy|Crime|Drama', year: 2009, maker: 'Batz, Schuster and Mann', rating: 8.7 },
  {
    id: 25,
    title: 'Most Dangerous Game, The',
    genre: 'Adventure|Mystery|Thriller',
    year: 2001,
    maker: 'Schaden, Gleichner and Gibson',
    rating: 8.5,
  },
  { id: 26, title: 'Family Way', genre: 'Comedy|Romance', year: 2001, maker: "D'Amore LLC", rating: 8.9 },
  {
    id: 27,
    title: 'Tale of Zatoichi Continues, The (Zoku Zatôichi monogatari) (Zatôichi 2)',
    genre: 'Action|Drama',
    year: 1986,
    maker: "Johnson, Schmeler and O'Kon",
    rating: 3.9,
  },
  { id: 28, title: 'Space Station 76', genre: 'Comedy|Drama|Sci-Fi', year: 2012, maker: 'Dibbert-Upton', rating: 3.5 },
  {
    id: 29,
    title: 'Return of the Street Fighter (Satsujin ken 2)',
    genre: 'Action|Crime|Drama',
    year: 1989,
    maker: 'Kirlin-Crooks',
    rating: 7.3,
  },
  {
    id: 30,
    title: 'Love Letter, The',
    genre: 'Comedy|Romance',
    year: 2008,
    maker: 'Daugherty, Weimann and Gislason',
    rating: 4.1,
  },
  { id: 31, title: 'Inserts', genre: 'Comedy|Drama', year: 1995, maker: 'Torphy Inc', rating: 5.5 },
  {
    id: 32,
    title: 'United States of Secrets (Part One): The Program',
    genre: 'Documentary',
    year: 1995,
    maker: 'Schumm, Ruecker and Goldner',
    rating: 3.4,
  },
  { id: 33, title: 'Crystal Ball, The', genre: 'Comedy', year: 1996, maker: "O'Connell and Sons", rating: 2.2 },
  {
    id: 34,
    title: 'The Cyclone',
    genre: 'Comedy|Romance',
    year: 2006,
    maker: 'Stoltenberg, Weimann and Spinka',
    rating: 6.6,
  },
  {
    id: 35,
    title: 'Bedevilled (Kim Bok-nam salinsageonui jeonmal)',
    genre: 'Crime|Drama|Horror',
    year: 2004,
    maker: 'Volkman, Corwin and Kris',
    rating: 5.7,
  },
  {
    id: 36,
    title: 'Return of the Living Dead 3',
    genre: 'Horror|Romance|Sci-Fi',
    year: 1998,
    maker: 'Christiansen Inc',
    rating: 3.3,
  },
  {
    id: 37,
    title: 'Three Times (Zui hao de shi guang)',
    genre: 'Drama|Romance',
    year: 2009,
    maker: 'Cassin LLC',
    rating: 9.9,
  },
  {
    id: 38,
    title: 'My Wife is an Actress (Ma Femme est une Actrice)',
    genre: 'Comedy|Drama|Romance',
    year: 2005,
    maker: 'Reichert and Sons',
    rating: 1.6,
  },
  { id: 39, title: 'Tempest, The', genre: 'Comedy|Drama|Fantasy', year: 2009, maker: 'Hickle-Barrows', rating: 4.8 },
  { id: 40, title: 'Den, The', genre: 'Horror|Thriller', year: 2008, maker: 'Kihn-Effertz', rating: 3.7 },
  { id: 41, title: 'Yes Men, The', genre: 'Documentary', year: 1994, maker: 'McDermott-Shanahan', rating: 1.1 },
  { id: 42, title: 'Barefoot', genre: 'Comedy|Drama|Romance', year: 2008, maker: "O'Keefe and Sons", rating: 1.5 },
  {
    id: 43,
    title: 'Killing of a Chinese Bookie, The',
    genre: 'Comedy|Crime|Drama|Film-Noir|Musical',
    year: 2000,
    maker: 'Ward LLC',
    rating: 1.7,
  },
  { id: 44, title: 'Fireflies in the Garden', genre: 'Drama', year: 2007, maker: 'Dare and Sons', rating: 4.7 },
  {
    id: 45,
    title: 'Three Stooges Meet Hercules, The',
    genre: 'Comedy|Fantasy',
    year: 2011,
    maker: 'Leannon-Bahringer',
    rating: 4.4,
  },
  {
    id: 46,
    title: '180° South (180 Degrees South) (180° South: Conquerors of the Useless)',
    genre: 'Documentary|Drama',
    year: 1993,
    maker: 'Kovacek Inc',
    rating: 5.1,
  },
  { id: 47, title: 'Bloody Sunday', genre: 'Drama', year: 1985, maker: 'King Group', rating: 4.0 },
  { id: 48, title: 'About Time', genre: 'Drama|Fantasy|Romance', year: 2003, maker: 'Terry-Rosenbaum', rating: 3.2 },
  { id: 49, title: 'Marseillaise, La', genre: 'Drama|War', year: 2002, maker: 'Fadel LLC', rating: 9.1 },
  { id: 50, title: 'Winter Sleep (Kis Uykusu)', genre: 'Drama', year: 2008, maker: "O'Reilly Group", rating: 4.1 },
  {
    id: 51,
    title: 'Benny Goodman Story, The',
    genre: 'Drama|Musical',
    year: 2012,
    maker: 'Beahan, Schowalter and Nicolas',
    rating: 9.4,
  },
  {
    id: 52,
    title: 'Steel Dawn',
    genre: 'Action|Sci-Fi',
    year: 1996,
    maker: 'Wiegand, Wolff and Turcotte',
    rating: 1.4,
  },
  {
    id: 53,
    title: "Kira's Reason: A Love Story (En Kærlighedshistorie)",
    genre: 'Drama',
    year: 1993,
    maker: 'Predovic-Ratke',
    rating: 9.7,
  },
  { id: 54, title: 'Peepli Live', genre: 'Comedy|Drama', year: 2004, maker: 'Wintheiser-Mosciski', rating: 8.5 },
  {
    id: 55,
    title: 'Almost Heroes',
    genre: 'Adventure|Comedy|Western',
    year: 1990,
    maker: 'Schaefer, Dibbert and Stamm',
    rating: 2.1,
  },
  { id: 56, title: 'Windfall', genre: 'Documentary', year: 1979, maker: 'Toy, Rutherford and Kiehn', rating: 2.5 },
  { id: 57, title: 'Slam', genre: 'Drama', year: 2003, maker: 'Jakubowski and Sons', rating: 3.2 },
  {
    id: 58,
    title: 'Pirates! Band of Misfits, The',
    genre: 'Adventure|Animation|Children|Comedy',
    year: 2010,
    maker: 'Prosacco-King',
    rating: 5.0,
  },
  {
    id: 59,
    title: 'Wolf Children (Okami kodomo no ame to yuki)',
    genre: 'Animation|Fantasy',
    year: 1985,
    maker: 'Ritchie, Moore and Breitenberg',
    rating: 3.1,
  },
  { id: 60, title: 'Love and Honor', genre: 'Drama|Romance', year: 1969, maker: 'Hand-Bernhard', rating: 9.6 },
  { id: 61, title: "Smilla's Sense of Snow", genre: 'Drama|Thriller', year: 1988, maker: 'Shields Inc', rating: 3.3 },
  {
    id: 62,
    title: 'Modern Times',
    genre: 'Comedy|Drama|Romance',
    year: 2013,
    maker: 'Murray, Fahey and Koch',
    rating: 8.6,
  },
  {
    id: 63,
    title: 'My Bollywood Bride',
    genre: 'Comedy|Drama|Romance',
    year: 1999,
    maker: 'Schoen and Sons',
    rating: 9.9,
  },
  { id: 64, title: 'Homicidal', genre: 'Horror|Mystery|Thriller', year: 2011, maker: 'Kassulke and Sons', rating: 6.0 },
  { id: 65, title: 'Get Hard', genre: 'Comedy', year: 1996, maker: 'Kilback and Sons', rating: 8.0 },
  { id: 66, title: 'Prowl', genre: 'Horror', year: 2008, maker: 'Schoen, Schuster and Auer', rating: 4.9 },
  { id: 67, title: "They Won't Believe Me", genre: 'Drama|Film-Noir', year: 2001, maker: 'Ebert-Quigley', rating: 8.6 },
  { id: 68, title: 'Illuminata', genre: 'Comedy', year: 1998, maker: 'Breitenberg Group', rating: 1.6 },
  { id: 69, title: 'Road Trip', genre: 'Comedy', year: 1987, maker: 'Moen, Rolfson and Osinski', rating: 8.5 },
  { id: 70, title: 'Wild', genre: 'Drama', year: 1997, maker: 'Farrell Group', rating: 4.2 },
  {
    id: 71,
    title: 'Thing, The',
    genre: 'Horror|Mystery|Sci-Fi|Thriller',
    year: 2003,
    maker: "O'Connell-Welch",
    rating: 9.3,
  },
  {
    id: 72,
    title: 'Future Cops (Chao ji xue xiao ba wang)',
    genre: 'Action',
    year: 2013,
    maker: 'Zemlak LLC',
    rating: 7.6,
  },
  { id: 73, title: 'Macbeth', genre: 'Drama', year: 2009, maker: 'Mohr Inc', rating: 8.6 },
  { id: 74, title: 'Saint (Sint)', genre: 'Horror', year: 2010, maker: 'Bradtke Inc', rating: 4.4 },
  {
    id: 75,
    title: 'Holes',
    genre: 'Adventure|Children|Comedy|Mystery',
    year: 2010,
    maker: 'Koelpin, Douglas and Brekke',
    rating: 5.7,
  },
  {
    id: 76,
    title: 'Thieves by Law (Ganavim Ba Hok)',
    genre: 'Documentary',
    year: 2012,
    maker: 'Gutkowski, Tremblay and Luettgen',
    rating: 8.8,
  },
  {
    id: 77,
    title: 'Impulse',
    genre: 'Mystery|Thriller',
    year: 1993,
    maker: 'McLaughlin, Effertz and Feeney',
    rating: 9.5,
  },
  {
    id: 78,
    title: 'Planet of the Apes',
    genre: 'Action|Drama|Sci-Fi',
    year: 2003,
    maker: 'Bosco, Greenholt and Jerde',
    rating: 3.2,
  },
  { id: 79, title: 'I Thank a Fool', genre: 'Drama', year: 1992, maker: 'Tromp, Witting and Auer', rating: 3.9 },
  { id: 80, title: 'Wanted', genre: 'Action|Thriller', year: 2007, maker: 'Goyette Group', rating: 3.6 },
  { id: 81, title: 'Zapped!', genre: 'Comedy|Sci-Fi', year: 1985, maker: "D'Amore, Mohr and Bahringer", rating: 5.5 },
  { id: 82, title: 'There Goes My Baby', genre: 'Comedy|Drama', year: 2007, maker: 'Cormier LLC', rating: 2.8 },
  {
    id: 83,
    title: 'Paradise Now',
    genre: 'Crime|Drama|Thriller|War',
    year: 2001,
    maker: 'Hoeger, Fisher and Altenwerth',
    rating: 1.6,
  },
  { id: 84, title: 'Mean Girls', genre: 'Comedy', year: 2002, maker: 'Wiegand, Jenkins and Flatley', rating: 3.2 },
  { id: 85, title: 'Transamerica', genre: 'Adventure|Comedy|Drama', year: 2008, maker: 'Wolff-Willms', rating: 7.0 },
  {
    id: 86,
    title: 'Reivers, The',
    genre: 'Comedy|Drama',
    year: 1994,
    maker: 'Goyette, Padberg and Renner',
    rating: 2.5,
  },
  {
    id: 87,
    title: 'Gorgon, The',
    genre: 'Fantasy|Horror|Mystery',
    year: 1990,
    maker: 'Brekke, Marquardt and Rau',
    rating: 8.6,
  },
  {
    id: 88,
    title: 'Elvis on Tour',
    genre: 'Documentary|Musical',
    year: 2009,
    maker: 'Grimes, Cormier and Hettinger',
    rating: 2.0,
  },
  { id: 89, title: 'Frost/Nixon', genre: 'Drama', year: 1987, maker: 'Torp and Sons', rating: 7.8 },
  { id: 90, title: 'Strapped', genre: 'Action|Drama', year: 2006, maker: "O'Reilly and Sons", rating: 3.2 },
  { id: 91, title: 'Mr. Pip', genre: 'Drama|War', year: 2011, maker: 'Marks Inc', rating: 8.1 },
  { id: 92, title: 'Book of Love', genre: 'Comedy|Drama', year: 2002, maker: 'Yost-Effertz', rating: 5.5 },
  {
    id: 93,
    title: 'Ring Two, The',
    genre: 'Drama|Horror|Mystery|Thriller',
    year: 2008,
    maker: 'Miller, Kozey and Rippin',
    rating: 9.0,
  },
  { id: 94, title: 'Gone with the Wind', genre: 'Drama|Romance|War', year: 2005, maker: 'Durgan Group', rating: 9.9 },
  { id: 95, title: 'Seven Pounds', genre: 'Drama', year: 2007, maker: 'Pagac, Schaefer and Prohaska', rating: 2.4 },
  { id: 96, title: 'The Key', genre: 'Drama', year: 2002, maker: 'Schamberger-Borer', rating: 5.7 },
  {
    id: 97,
    title: 'Killer Joe',
    genre: 'Crime|Thriller',
    year: 2007,
    maker: 'Balistreri, Effertz and Waters',
    rating: 3.4,
  },
  { id: 98, title: 'Body/Cialo', genre: 'Comedy|Drama|Mystery', year: 2010, maker: 'Sanford Group', rating: 6.2 },
  { id: 99, title: 'La Belle équipe', genre: '(no genres listed)', year: 1995, maker: 'Grady Group', rating: 6.2 },
  {
    id: 100,
    title: 'Murderous Maids (Blessures assassines, Les)',
    genre: 'Drama',
    year: 1995,
    maker: 'Nader, Borer and Feil',
    rating: 2.5,
  },
];