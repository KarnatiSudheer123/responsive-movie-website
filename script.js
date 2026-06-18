/* ================= Tollywood Movies App ================= */
// ---------- Data ----------

const movies = [
  {
    id:1,
    title:"Baahubali 2: The Conclusion",
    genre:"Action/Fantasy",
    duration:"171 min",
    rating:8.2,
    year:2017,
    poster:"https://www.filmibeat.com/ph-big/2017/01/baahubali-2-conclusion-movie-poster_148542087010.jpg",
    desc:"The conclusion of the epic saga of Baahubali and the kingdom of Mahishmati.",
    trailer:"qD-6d8Wo3do",
    release:"28 April 2017"
  },
  {
    id:2,
    title:"RRR",
    genre:"Action/Adventure",
    duration:"187 min",
    rating:7.8,
    year:2022,
    poster:"https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
    desc:"A tale of two legendary revolutionaries and their journey far away from home.",
    trailer:"NgBoMJy386M",
    release:"25 March 2022"
  },
  {
    id:3,
    title:"Pushpa: The Rise",
    genre:"Action/Thriller",
    duration:"179 min",
    rating:7.6,
    year:2021,
    poster:"https://image.tmdb.org/t/p/original/jFHbrNh6LMnKKSz7nlflFyrwK5T.jpg",
    desc:"A laborer rises through the ranks of a red sandalwood smuggling syndicate.",
    trailer:"Q1NKMPhP8PY",
    release:"17 December 2021"
  },
  {
    id:4,
    title:"Magadheera",
    genre:"Action/Fantasy",
    duration:"160 min",
    rating:7.7,
    year:2009,
    poster:"https://m.media-amazon.com/images/M/MV5BMzQ0YWYyYjEtZTU2Ni00ZGZjLWJlZmQtYzliN2VlNDY0ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc:"A warrior reincarnated to reunite with his lost love and avenge his death.",
    trailer:"NXfhuqDNxg4",
    release:"31 July 2009"
  },
  {
    id:5,
    title:"Eega",
    genre:"Action/Fantasy",
    duration:"134 min",
    rating:7.7,
    year:2012,
    poster:"https://m.media-amazon.com/images/M/MV5BMTA0MDFmMDMtMTE5OC00YWQ0LWIwZTUtOWIwMjk4Yjc3NGY1XkEyXkFqcGc@._V1_.jpg",
    desc:"A murdered man reincarnated as a fly seeks revenge against his killer.",
    trailer:"eNUHPDLB8-g",
    release:"6 July 2012"
  },
  {
    id:6,
    title:"Arjun Reddy",
    genre:"Romance/Action",
    duration:"182 min",
    rating:7.9,
    year:2017,
    poster:"https://livingwithlili.weebly.com/uploads/1/0/9/7/109778451/436871403.jpg",
    desc:"A short-tempered house surgeon goes on a self-destructive path after his girlfriend's marriage.",
    trailer:"aozErj9NqeE",
    release:"25 August 2017"
  },
  {
    id:7,
    title:"Ala Vaikunthapurramuloo",
    genre:"Action/Comedy",
    duration:"165 min",
    rating:7.3,
    year:2020,
    poster:"https://c8.alamy.com/comp/2B1N7HX/ala-vaikunthapurramuloo-indian-poster-in-telugu-and-english-allu-arjun-2020-bluesky-cinemas-courtesy-everett-collection-2B1N7HX.jpg",
    desc:"A young man who is unaware of his real identity faces hurdles in life.",
    trailer:"SkENAjfVoNI",
    release:"12 January 2020"
  },
  {
    id:8,
    title:"Sye Raa Narasimha Reddy",
    genre:"Action/War",
    duration:"171 min",
    rating:7.2,
    year:2019,
    poster:"https://static.moviecrow.com/gallery/20190918/168855-sye%20t.jpg",
    desc:"The story of freedom fighter Uyyalawada Narasimha Reddy.",
    trailer:"tpriCP8dlBY",
    release:"12 October 2019"
  },
  {
    id:9,
    title:"Jersey",
    genre:"Sport/Drama",
    duration:"160 min",
    rating:8.5,
    year:2019,
    poster:"https://m.media-amazon.com/images/M/MV5BMWU0ZTk1ODYtOTk4MS00ZTdmLWJjOWYtMmJiYWQ2ZTcwZjJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc:"A failed cricketer decides to revive his career to fulfill his son's wish.",
    trailer:"AjAe_Q1WZ_8",
    release:"19 April 2019"
  },
  {
    id:10,
    title:"Sarileru Neekevvaru",
    genre:"Action/Comedy",
    duration:"169 min",
    rating:5.8,
    year:2020,
    poster:"https://m.media-amazon.com/images/M/MV5BMzdmMzM5ZjgtZWE2MC00NTVmLWI1ZWItNzBhMTAxY2NlN2Q2XkEyXkFqcGc@._V1_.jpg",
    desc:"An army major arrives in a town to deliver a letter to a martyr's family.",
    trailer:"Pim3CUGCXbY",
    release:"11 January 2020"
  },
  {
    id:11,
    title:"Salaar: Part 1 - Ceasefire",
    genre:"Action/Thriller",
    duration:"175 min",
    rating:6.7,
    year:2023,
    poster:"https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg",
    desc:"A gang leader tries to keep a promise made to his dying friend.",
    trailer:"4GPvYMKtrtI",
    release:"22 December 2023"
  },
  {
    id:12,
    title:"HanuMan",
    genre:"Action/Adventure",
    duration:"158 min",
    rating:7.7,
    year:2024,
    poster:"https://images.filmibeat.com/img/popcorn/movie_posters/hanuman-20240111185049-20158.jpg",
    desc:"A man gets superpowers from Lord Hanuman to save his village.",
    trailer:"Oqvly3MvlXA",
    release:"12 January 2024"
  },
  {
    id:13,
    title:"Devara: Part 1",
    genre:"Action",
    duration:"178 min",
    rating:6.0,
    year:2024,
    poster:"https://m.media-amazon.com/images/M/MV5BZWEwNmYwYTAtMmQxYS00ZTgwLWE0NmUtNGIwZDEyZmYwN2EwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc:"The film was released on 27 September 2024 and is the first installment of a planned two-part story.",
    trailer:"mmKIkTLRZao",
    release:"27 September 2024",
  },
  {
    id:14,
    title:"Kalki 2898 AD ",
    genre:"Sci-fi/Action",
    duration:"181 min",
    rating:7.0,
    year:2024,
    poster:"https://m.media-amazon.com/images/M/MV5BZDU3MDBmMTktOTFiNi00OGUwLWJhNjgtNDhiN2ZhYjkxMjhkXkEyXkFqcGc@._V1_.jpg",
    desc:"The movie blends the ancient world of the Mahabharata with a dystopian future set in the year 2898 AD.",
    trailer:"y1-w1kUGuz8",
    release:"27 June 2024",
  },
  {
    id:15,
    title:"Game Changer 2",
    genre:"Action/Thriller",
    duration:"165 min",
    rating:5.1,
    year:2025,
    poster:"https://images.filmibeat.com/img/popcorn/movie_posters/gamechanger-20250102182633-19911.jpg",
    desc:"An honest IAS officer fights corruption with new challenges ahead.",
    trailer:"6T3m8k3Dyqg",
    release:"10 January 2025",
  },
  {
    id:16,
    title:"M.S. Dhoni: The Untold Story",
    genre:"Historical",
    duration:"190 min",
    rating:8.0,
    year:2016,
    poster:"https://wallpapercave.com/wp/wp6577933.jpg",
    desc:"The film was directed by Neeraj Pandey and released on 30 September 2016. Sushant Singh Rajput plays the lead role.",
    trailer:"SiZbhos1LPA",
    release:"30 September 2016",
  },
 {
    id:17,
    title:"Darling",
    genre:"Romance/Comedy",
    duration:"153 min",
    rating:7.4,
    year:2010,
    poster:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/96/e1/de/96e1def3-edcf-d939-8c4e-637ec260c299/884977600216.jpg/1200x1200bf-60.jpg",
    desc:"When Prabha meets her, he discovers that she is his former childhood love, Nandini.",
    trailer:"ndIlwPeOHNs",
    release:"23 April 2010",
  },
 {
    id:18,
    title:"Mahavatar Narsimha",
    genre:"Action",
    duration:"131 min",
    rating:8.5,
    year:2025,
    poster:"https://m.media-amazon.com/images/M/MV5BYTRkODNhYzYtZGRhNi00MTg4LWI5MmYtN2MyZTQ5MjE2YzMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc:"The film retells the classic tale from Hindu mythology about the battle between righteousness and tyranny.",
    trailer:"VkLl95kA9jk",
    release:"25 July 2025",
  },
 {
    id:19,
    title:"Peddi",
    genre:"Action/Sport",
    duration:"189 min",
    rating:6.0,
    year:2026,
    poster:"https://planetoffilms.com/wp-content/uploads/2025/10/Peddi.png",
    desc:"The film is set in rural Andhra Pradesh during the 1980s and combines sports, village pride, action, and emotional drama.",
    trailer:"sF2dj7ycZvA",
    release:"4 Jme 2026",
  },
 {
    id:20,
    title:"The Raja Saab",
    genre:"Horror/Comedy",
    duration:"183 min",
    rating:3.1,
    year:2026,
    poster:"https://images.filmibeat.com/img/popcorn/movie_posters/therajasaab-20241023153236-22471.jpg",
    desc:"The film combines horror, comedy, romance, and supernatural elements in a commercial entertainer format.",
    trailer:"i-8w5yDwukA",
    release:"9 January 2026",
  },
  {
    id:21,
    title:"Baahubali: The Beginning",
    genre:"Action/Fantasy",
    duration:"158 min",
    rating:8.0,
    year:2015,
    poster:"https://c8.alamy.com/comp/J30B3J/baahubali-the-beginning-aka-bahubali-the-beginning-poster-from-left-J30B3J.jpg",
    desc:"As he uncovers the secrets of his past, he finds himself caught in a battle for justice, power, and the rightful throne.",
    trailer:"3NQRhE772b0",
    release:"10 July 2015",
  },
  {
    id:22,
    title:"Rangasthalam",
    genre:"Action/Drama",
    duration:"174 min",
    rating:8.2,
    year:2018,
    poster:"https://c8.alamy.com/comp/MBEXFC/rangasthalam-indian-poster-with-title-in-telugu-ram-charan-2018-konidela-production-companycourtesy-everett-collection-MBEXFC.jpg",
    desc:"The film combines drama, action, romance, and social themes, showcasing the struggle against oppression and injustice.",
    trailer:"sueMmTm-M4Y",
    release:"30 March 2018",
  },
  {
    id:23,
    title:"Mirai",
    genre:"Action/Adventure",
    duration:"169 min",
    rating:6.9,
    year:2025,
    poster:"https://assetscdn1.paytm.com/images/cinema/Mirai-min-20d074c0-0192-11ef-acfb-c10315978c5f.jpg?format=webp",
    desc:"The story follows Vedha, a young man who discovers that he is destined to protect nine powerful ancient scriptures created by Emperor Ashoka.",
    trailer:"ggJg6CcKtZE",
    release:"12 September 2025",
  },
  {
    id:24,
    title:"Hi Nanna",
    genre:"Romance/Drama",
    duration:"155 min",
    rating:8.3,
    year:2023,
    poster:"https://c.saavncdn.com/253/Hi-Nanna-Telugu-Telugu-2023-20240109191037-500x500.jpg",
    desc:"The story follows a loving father who raises his young daughter alone.",
    trailer:"Iz97_kxHaSc",
    release:"7 December 2023",
  },
  {
    id:25,
    title:"They Call Him OG",
    genre:"Action/Thriller",
    duration:"154 min",
    rating:6.0,
    year:2025,
    poster:"https://m.media-amazon.com/images/M/MV5BOTg2NDNhZTYtNTYxMS00ZjM5LWIyZWEtMjk2MGI2NmMxZmI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc:"The story follows a feared enforcer who returns after a long disappearance and gets pulled back into violent turf wars, betrayal, and unfinished revenge business.",
    trailer:"_8J8LwoVH_0",
    release:"25 September 2025",
  },
  {
    id:26,
    title:"Lucky Baskhar",
    genre:"Action/Drama",
    duration:"151 min",
    rating:8.0,
    year:2024,
    poster:"https://m.media-amazon.com/images/M/MV5BMmI2MTUzOWUtZGZmMC00YjE5LWJiMzQtNmY4M2ZmNGM1YTAwXkEyXkFqcGc@._V1_.jpg",
    desc:"The story follows Bhaskar, a simple man working in a bank who struggles with debt and family responsibilities.",
    trailer:"FonKx5wvuHI",
    release:"31 October 2024",
  },
  {
    id:27,
    title:"Kuberaa",
    genre:"Thriller/Crime",
    duration:"181 min",
    rating:6.4,
    year:2025,
    poster:"https://img.studioflicks.com/wp-content/uploads/2025/02/03195407/Kuberaa-Movie-HQ-Posters-13.jpg",
    desc:"The story is built around money, power, corruption, and how ambition can completely distort human behavior.",
    trailer:"XDodpdxxA_g",
    release:"20 June 2025",
  },
  {
    id:28,
    title:"Sita Ramam",
    genre:"Romance/Action",
    duration:"163 min",
    rating:8.5,
    year:2022,
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sita-ramam-et00329657-1663938878.jpg",
    desc:"The story slowly unfolds through letters, flashbacks, and investigation, revealing a love story that survives distance, war, and misunderstanding.",
    trailer:"Ljk6tGZ1l3A",
    release:"5 August 2022",
  },
  {
    id:29,
    title:"Hit: The Second Case",
    genre:"Thriller/Action",
    duration:"118 min",
    rating:7.2,
    year:2022,
    poster:"https://cdn.123telugu.com/content/wp-content/uploads/2022/12/HIT2-2-1.jpg",
    desc:"He investigates a series of shocking murders that look random at first but slowly connect into a darker pattern involving crime networks and psychological motives.",
    trailer:"4GzAwnjVTqc",
    release:"2 December 2022",
  },
  {
    id:30,
    title:"Vakeel Saab",
    genre:"Action/Thriller",
    duration:"156 min",
    rating:6.9,
    year:2021,
    poster:"https://static.toiimg.com/thumb/imgsize-23456,msid-77883031,width-600,resizemode-4/77883031.jpg",
    desc:"The case goes to court, and everything depends on proving consent and truth in a system that is biased from the start.",
    trailer:"LtDJN3D6GC0",
    release:"9 April 2021",
  },
  {
    id:31,
    title:"Chatrapathi",
    genre:"Action/Drama",
    duration:"165 min",
    rating:7.6,
    year:2005,
    poster:"https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/eb/42/7d/eb427df2-e7c2-38de-e404-b59f4eb0f7a1/cover.jpg/1200x1200bf-60.jpg",
    desc:"The story follows Sivaji, a young man who is separated from his mother and brother during the displacement of Sri Lankan refugees.",
    trailer:"-68xQqnwi9I",
    release:"29 September 2005",
  },
  {
    id:32,
    title:"Kingdom",
    genre:"Action/Drama",
    duration:"160 min",
    rating:5.5,
    year:2025,
    poster:"https://images.filmibeat.com/img/popcorn/movie_posters/kingdom-20250212163707-21527.jpg",
    desc:"The film follows Suri, a troubled police constable who embarks on a dangerous undercover mission to find his long-lost brother.",
    trailer:"EMffEHpJgtY",
    release:"31 July 2025",
  },
  {
    id:33,
    title:"Pushpa 2: The Rule",
    genre:"Action/Thriller",
    duration:"Original Version - 200 min, Reloaded Version - 224 min",
    rating:6.0,
    year:2024,
    poster:"https://juksun.com/wp-content/uploads/2023/02/Pushpa-2-The-Rule-Movie-Poster-1.jpg?x19917",
    desc:"The movie continues the story of Pushpa Raj, a laborer who rises to become a powerful red sandalwood smuggler.",
    trailer:"g3JUbgOHgdw",
    release:"5 December 2024",
  },
  {
    id:34,
    title:"Sankranthiki Vasthunam",
    genre:"Action/Comedy",
    duration:"144 min",
    rating:6.1,
    year:2025,
    poster:"https://imgix.hoyts.com.au/mx/posters/au/sankranthiki-vasthunam-cae219c7.jpg",
    desc:"The film was released on January 14, 2025, during the Sankranti festival season.",
    trailer:"xkTprOVjIUs",
    release:"14 January 2025",
  },
  {
    id:35,
    title:"#Single",
    genre:"Comedy",
    duration:"129 min",
    rating:6.2,
    year:2025,
    poster:"https://m.media-amazon.com/images/M/MV5BZTI1YWE3MDMtZjllYy00MjZhLTlkOTUtMGY0ZWFhYzExOTNjXkEyXkFqcGc@._V1_QL75_UX132_.jpg",
    desc:"A charming bachelor who, despite being adored by two women, is resolute in his decision to remain single.",
    trailer:"q2KdzXF_svA",
    release:"9 May 2025",
  },
  {
    id:36,
    title:"Orange",
    genre:"Romance/Drama",
    duration:"160 min",
    rating:6.7,
    year:2010,
    poster:"https://2.bp.blogspot.com/_a3ZI07KGbwA/TMzrERp4uqI/AAAAAAAAEN4/bhl1OTPO3qM/s1600/tollywoodblog-Orange-Poster-03.jpg",
    desc:"The film follows Ram, a young man who believes that true love cannot last forever.",
    trailer:"q8GcMjkbCjo",
    release:"26 November 2010",
  },
  {
    id:37,
    title:"Nannaku Prematho",
    genre:"Action/Thriller",
    duration:"168 min",
    rating:7.5,
    year:2016,
    poster:"https://static.moviecrow.com/gallery/20160112/79274-CYGKEuZUoAAbAuF.jpg",
    desc:"The story follows Abhiram, a brilliant and determined young man whose father reveals a painful secret before his death",
    trailer:"Om69gF1iiT4",
    release:"13 January 2016",
  },
  {
    id:38,
    title:"Chhaava",
    genre:"Historical",
    duration:"161 min",
    rating:7.3,
    year:2025,
    poster:"https://assetscdn1.paytm.com/images/cinema/2Chaava--Gallery-f91fd350-f7f7-11ef-aecf-15b19aa2669c.jpg?format=webp",
    desc:"The film is based on the life of Chhatrapati Sambhaji Maharaj, the son of Chhatrapati Shivaji Maharaj.",
    trailer:"DJohyFmST08",
    release:"7 March 2025",
  },
  {
    id:39,
    title:"Kishkindhapuri",
    genre:"Horror",
    duration:"125 min",
    rating:6.4,
    year:2025,
    poster:"https://m.media-amazon.com/images/M/MV5BZGZkY2E5MzYtNmQ3YS00MGExLWIwMWMtNmZkNjdiMmE1MTRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc:"The film combines supernatural horror, mystery, suspense, and emotional drama.",
    trailer:"SqHA1SnJO6A",
    release:"12 September 2025",
  },
  {
    id:40,
    title:"Karthikeya 2",
    genre:"Adventure",
    duration:"145 min",
    rating:7.8,
    year:2022,
    poster:"https://preview.redd.it/karthikeya-2-releasing-tomorrow-i-want-this-movie-to-work-v0-9ie7kofkf8h91.jpg?auto=webp&s=d142ff919d63ff88fd4f231fa29826d66c0b9d53",
    desc:"The film follows Dr. Karthikeya, a logical and skeptical young doctor who becomes involved in a thrilling quest to uncover the hidden secrets connected to Lord Krishna's lost anklet.",
    trailer:"d5s_IGuOJEc",
    release:"13 August 2022",
  },
  {
    id:41,
    title:"Rudhramadevi",
    genre:"Historical",
    duration:"157 min",
    rating:5.6,
    year:2015,
    poster:"https://juksun.com/wp-content/uploads/2022/01/Rudhramadevi-Movie-poster.jpg",
    desc:"Rudhramadevi is a historical action-drama based on the life of Queen Rudrama Devi, one of the most powerful rulers of the Kakatiya dynasty.",
    trailer:"Fc0QmDnNy3U",
    release:"9 October 2015",
  },
  {
    id:42,
    title:"Mana Shankara Vara Prasad Garu",
    genre:"Comedy",
    duration:"165 min",
    rating:5.7,
    year:2026,
    poster:"https://muvitimes.com/data/upload/movies/2025/hoy.mana-shankara-vara-prasad-garu-telugu-eng-sub.jpg",
    desc:"Shankara Vara Prasad is a dedicated national security officer who becomes involved in a mission to protect his estranged wife and children from a dangerous threat.",
    trailer:"UtVijamJJcg",
    release:"12 January 2026",
  },
  {
    id:43,
    title:"F2: Fun and Frustration",
    genre:"Comedy",
    duration:"150 min",
    rating:6.1,
    year:2019,
    poster:"https://images.justwatch.com/poster/105434148/s718/f2-fun-and-frustration.jpg",
    desc:"The movie follows the hilarious lives of two married men, Venky and Varun, who struggle to cope with the challenges and frustrations of married life.",
    trailer:"z9-bRpNxGjA",
    release:"12 January 2019",
  },
  {
    id:44,
    title:"Odela 2",
    genre:"Horror",
    duration:"150 min",
    rating:4.6,
    year:2025,
    poster:"https://images.justwatch.com/poster/330055196/s718/odela-2.jpg",
    desc:"Set in the village of Odela, the story begins after the death of the cruel Tirupati.",
    trailer:"76oCSUojxXI",
    release:"17 April 2025",
  },
  {
    id:45,
    title:"Geetha Govindam",
    genre:"Comedy",
    duration:"142 min",
    rating:7.7,
    year:2018,
    poster:"https://c.saavncdn.com/237/Geetha-Govindam-Telugu-2018-20180921-500x500.jpg",
    desc:"Their journey is filled with humorous situations, emotional moments, family drama, and heartwarming romance, eventually leading them to discover their true feelings for each other.",
    trailer:"KaixZAdF5cQ",
    release:"15 August 2018",
  },
  {
    id:46,
    title:"Thandel",
    genre:"Romance",
    duration:"151 min",
    rating:6.4,
    year:2025,
    poster:"https://images.filmibeat.com/ph-big/2024/11/thandel-release-date-announced-cast-crew-plot-and-more-about-naga-chaitanya-sai-pallavis-upcoming-romance-drama1730900865_0.jpg",
    desc:"The film is inspired by a real-life incident involving Indian fishermen who accidentally crossed into Pakistani waters and were imprisoned.",
    trailer:"6jBEzTbanUc",
    release:"7 February 2025",
  },
  {
    id:47,
    title:"Shyam Singha Roy",
    genre:"Romance",
    duration:"157 min",
    rating:7.6,
    year:2021,
    poster:"https://data1.ibtimes.co.in/en/full/757953/shyam-singha-roy-nani-sai-pallavi-krithi-shetty.jpg",
    desc:"The story revolves around reincarnation, love, and social reform.",
    trailer:"QliDRYaknmI",
    release:"24 December 2021",
  },
  {
    id:48,
    title:"Tillu Square",
    genre:"Comedy",
    duration:"123 min",
    rating:6.6,
    year:2024,
    poster:"https://static.moviecrow.com/gallery/20240329/227822-tillu2.jpeg",
    desc:"The film stars Siddhu Jonnalagadda as the witty and carefree DJ Tillu and Anupama Parameswaran as Lilly Joseph.",
    trailer:"roX7EqczsUs",
    release:"29 March 2024",
  },
  {
    id:49,
    title:"DJ: Duvvada Jagannadham",
    genre:"Action",
    duration:"156 min",
    rating:6.0,
    year:2017,
    poster:"https://files.prokerala.com/movies/pics/1920/dj-movie-posters-70232.jpg",
    desc:"The movie combines action, comedy, romance, and thrilling fight sequences with Allu Arjun's energetic performance.",
    trailer:"-zd4h0brF5I",
    release:"23 June 2017",
  },
  {
    id:50,
    title:"Hari Hara Veera Mallu",
    genre:"Adventure",
    duration:"161 min",
    rating:5.4,
    year:2025,
    poster:"https://upload.wikimedia.org/wikipedia/en/0/04/HHVM_-_New_release_date.jpeg",
    desc:"The story is set in 17th-century India and follows Veera Mallu's dangerous mission to challenge the rule of Emperor Aurangzeb and recover the famous Koh-i-Noor diamond.",
    trailer:"Q0L9ZfJkZvo",
    release:"24 July 2025",
  },
  {
    id:51,
    title:"Akhanda 2: Thaandavam",
    genre:"Action",
    duration:"165 min",
    rating:5.4,
    year:2025,
    poster:"https://media.assettype.com/indulgexpress/2025-06-09/ef2vrrxf/Poster-of-Akhanda-2?w=640&auto=format%2Ccompress",
    desc:"The story blends mythology, patriotism, fantasy, and mass-action entertainment on a grand scale.",
    trailer:"qlCBzdZSnlY",
    release:"12 December 2025",
  },
  {
    id:52,
    title:"KGF: Chapter 2",
    genre:"Action",
    duration:"168 min",
    rating:8.2,
    year:2022,
    poster:"https://1.bp.blogspot.com/-l01GIldlZ5g/XpWfOqgZZBI/AAAAAAAAugA/bQ3b6vItB_gIHgOjfIUdv7NKGqzOGgc0ACNcBGAsYHQ/s1600/KGF-Chapter-2-Poster-5.jpg",
    desc:"The story continues after the events of KGF Chapter 1, where Rocky becomes the ruler of the Kolar Gold Fields (KGF).",
    trailer:"bDTUFufX-1s",
    release:"14 April 2022",
  },
  {
    id:53,
    title:"Court: State vs a Nobody",
    genre:"Action",
    duration:"149 min",
    rating:7.9,
    year:2025,
    poster:"https://www.cinejosh.com/newsimg/newsmainimg/court-movie_b_0204250754.jpg",
    desc:"The film explores themes of law, power, social prejudice, and the importance of standing up for what is right.",
    trailer:"urrUjvUFhxE",
    release:"14 March 2025",
  },
  {
    id:54,
    title:"The Girlfriend",
    genre:"Romance",
    duration:"138 min",
    rating:6.4,
    year:2025,
    poster:"https://upload.wikimedia.org/wikipedia/en/0/04/The_Girlfriend_%282025_film%29.jpg",
    desc:"The film blends romance, drama, and suspense, focusing on the emotional depth of its characters and the consequences of their decisions.",
    trailer:"XgLlPN7oxwY",
    release:"7 November 2025",
  },
  {
    id:55,
    title:"Kanchana 2",
    genre:"Horror/Comedy",
    duration:"163 min",
    rating:5.5,
    year:2015,
    poster:"https://m.media-amazon.com/images/M/MV5BZjU0ZWJhYWQtNmRhNi00MTVkLWJkZjctYWJkZjc0MzhiMmQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    desc:"It is the third film in the Muni franchise.",
    trailer:"1EOJ48Hgwmw",
    release:"17 April 2015",
  },
  {
    id:56,
    title:"Bhaagamathie",
    genre:"Horror/Action",
    duration:"135 min",
    rating:6.9,
    year:2018,
    poster:"https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/M2B9JK/bhaagamathie-indian-poster-with-title-in-telugu-anushka-shetty-2018-M2B9JK.jpg",
    desc:"As the investigation unfolds, shocking secrets and political conspiracies are revealed, leading to an unexpected climax that blends horror with suspense.",
    trailer:"Aahj3atxdS4",
    release:"22 January 2018",
  },
  {
    id:57,
    title:"Varsham",
    genre:"Action/Romance",
    duration:"159 min",
    rating:7.3,
    year:2004,
    poster:"https://i.pinimg.com/736x/e8/82/17/e882175324d1d5146529d1739b80705d.jpg",
    desc:"The film combines romance, action, emotional moments, and memorable music, ending with the reunion of the lovers.",
    trailer:"oWUn49GyuPM",
    release:"14 January 2004",
  },
  {
    id:58,
    title:"Guntur Kaaram",
    genre:"Action",
    duration:"159 min",
    rating:5.4,
    year:2024,
    poster:"https://imgix.hoyts.com.au/mx/posters/nz/guntur-kaaram-ff8d11d6.jpg",
    desc:"Despite being pressured to sever all ties with her, Ramana seeks answers about why she abandoned him.",
    trailer:"DYLG65xz55U",
    release:"12 January 2024",
  },
  {
    id:59,
    title:"Saripodhaa Sanivaaram",
    genre:"Action",
    duration:"175 min",
    rating:7.1,
    year:2024,
    poster:"https://images.filmibeat.com/img/popcorn/movie_posters/saripodhaa-sanivaaram-20231025143312-22264.jpg",
    desc:"The film combines action, drama, and emotional moments, with strong performances and an energetic background score by Jakes Bejoy.",
    trailer:"0_f1LzYjFI4",
    release:"29 August 2024",
  },
  {
    id:60,
    title:"War 2",
    genre:"Action",
    duration:"173 min",
    rating:5.2,
    year:2025,
    poster:"https://cdn.zomuvo.com/images/movies/2025/war-2-telugu-poster-noxy1hfd.webp",
    desc:"Major Kabir returns for another high-stakes mission when a dangerous new enemy emerges, threatening national security on a global scale.",
    trailer:"CllWVGWhOEs",
    release:"14 August 2025",
  },
  {
    id:61,
    title:"Seethamma Vakitlo Sirimalle Chettu",
    genre:"Family",
    duration:"159 min",
    rating:7.5,
    year:2013,
    poster:"https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/7a/95/fa/7a95fab4-28c6-79ab-3c43-b402382cdb92/cover.jpg/1200x1200bf-60.jpg",
    desc:"Through emotional conflicts, family values, and the importance of love and togetherness, the story shows how relationships are strengthened by understanding and sacrifice.",
    trailer:"HCLnAPHPMx0",
    release:"11 January 2013",
  },
  {
    id:62,
    title:"DJ Tillu",
    genre:"Comedy",
    duration:"124 min",
    rating:7.2,
    year:2022,
    poster:"https://image.tmdb.org/t/p/original/hjU34jvSYEywGmtpDgi4yELXaaB.jpg",
    desc:"Filled with hilarious dialogues, romance, and suspense, the film became a blockbuster entertainer",
    trailer:"CRFnqrv9pEg",
    release:"12 February 2022",
  },
  {
    id:63,
    title:"Jatadhara",
    genre:"Thriller",
    duration:"135 min",
    rating:3.3,
    year:2025,
    poster:"https://images.filmibeat.com/ph-big/2025/08/jatadhara1754652476_0.jpg",
    desc:"Combining mythology, horror, mystery, and spiritual themes, the film explores the eternal conflict between selflessness and greed.",
    trailer:"uwcb4CnAbgQ",
    release:"7 November 2025",
  },
  {
    id:64,
    title:"KGF: Chapter 1",
    genre:"Action",
    duration:"155 min",
    rating:8.1,
    year:2018,
    poster:"https://c8.alamy.com/comp/RA4G1J/kgf-chapter-1-indian-poster-in-telugu-and-english-yash-2018-weekend-cinema-courtesy-everett-collection-RA4G1J.jpg",
    desc:"The film is known for its intense action, powerful background score, and grand storytelling, ending with Rocky's rise as the new hope of KGF and setting the stage for KGF: Chapter 2.",
    trailer:"MwBsVFvxdYg",
    release:"21 December 2018",
  },
  {
    id:65,
    title:"Adipurush",
    genre:"Historical",
    duration:"179 min",
    rating:2.6,
    year:2023,
    poster:"https://imgix.hoyts.com.au/mx/posters/nz/adipurush-telugu-23dd8216.jpg",
    desc:"The film emphasizes themes of devotion, righteousness, courage, and the triumph of good over evil.",
    trailer:"8tea0uI4d2A",
    release:"16 June 2023",
  },
  {
    id:66,
    title:"Mad",
    genre:"Comedy",
    duration:"127 min",
    rating:7.3,
    year:2023,
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mad-2023-et00370942-1695798072.jpg",
    desc:"Filled with youthful humor, entertaining moments, and lively music, MAD offers a fun and nostalgic look at college life.",
    trailer:"bQRCyrNmhj4",
    release:"6 October 2023",
  },
  {
    id:67,
    title:"Ooru Peru Bhairavakonda",
    genre:"Horror/Comedy",
    duration:"136 min",
    rating:5.7,
    year:2024,
    poster:"https://bingeddata.s3.amazonaws.com/uploads/2024/02/ooru-peru-bhairavakona-2024-telugu-movie-streaming-watch-online.jpg",
    desc:"A thief's escape leads him to the mysterious land of Bhairavakona, where supernatural secrets and forgotten destinies threaten to trap him forever.",
    trailer:"wjZrVEDgfY8",
    release:"16 February 2024",
  },
  {
    id:68,
    title:"King of Kotha",
    genre:"Action",
    duration:"174 min",
    rating:6.1,
    year:2023,
    poster:"https://cdn.123telugu.com/content/wp-content/uploads/2023/06/King-Of-Kotha.jpg",
    desc:"Filled with action, revenge, emotions, and stylish visuals, King of Kotha explores themes of friendship, betrayal, and redemption.",
    trailer:"hJHU9Dfc3HY",
    release:"24 August 2023",
  },
];
const actors = [
  {
    name:"Prabhas",
    img:"https://wallpaperbat.com/img/869334-prabhas-hd-wallpaper-apk-for-android-download.jpg",
    films:"Baahubali, Salaar, Kalki",
    awards:"Filmfare South, SIIMA"
},
  {
    name:"Mahesh Babu",
    img:"https://w0.peakpx.com/wallpaper/933/464/HD-wallpaper-mahesh-babu-handsome-indian-actor-ssmb-maharshi-superstar-tollywood-maheshbabu-prince.jpg",
    films:"Pokiri, Bharat Ane Nenu, Sarkaru Vaari Paata",
    awards:"Nandi Awards, Filmfare"
},
  {
    name:"Allu Arjun",
    img:"https://im.indiatimes.in/content/2023/Apr/Allu-Arjun-rare-photos_6431346e9dd57.jpg",
    films:"Pushpa, Ala Vaikunthapurramuloo, Sarrainodu",
    awards:"National Award, Filmfare"
},
  {
    name:"N. T. Rama Rao Jr.",
    img:"https://img.mensxp.com/media/content/2021/Aug/Expensive-Things-Owned-By-Jr-NTR-3_610bb076ba7c6.jpeg",
    films:"RRR, Janatha Garage, Aravinda Sametha",
    awards:"Filmfare, SIIMA"
},
  {
    name:"Ram Charan",
    img:"https://allwikibiography.in/wp-content/uploads/2020/10/Ram-Charan-Image-1.jpg",
    films:"RRR, Magadheera, Game Changer",
    awards:"Filmfare South, SIIMA"
},
  {
    name:"Pawan Kalyan",
    img:"https://i.pinimg.com/originals/95/ee/97/95ee97eebcec23fd70e380cd81616d82.jpg",
    films:"Gabbar Singh, Attarintiki Daredi, Bheemla Nayak",
    awards:"Nandi Awards, Filmfare"
},
  {
    name:"Nani",
    img:"https://i.pinimg.com/originals/93/05/f6/9305f63af58914fbd1cd7e16c2f1d85d.jpg?nii=t",
    films:"Dasara, Yeto Vellipoyindhi Manasu, Jersey",
    awards:"Filmfare, Nandi Awards, SIIMA Awards"
},
];
const categories = ["Action","Romance","Comedy","Family","Thriller","Horror","Historical","Fantasy","Drama","Adventure"];
const galleryData = {
  posters: movies.slice(0,8).map(m=>m.poster),
  stills: [
    "https://2.bp.blogspot.com/-OG4ca5-xjIU/WYaIHOR-AZI/AAAAAAAArEM/3hPXEI92S38VIjkH5q_bWpDc8O_1o39WgCLcBGAs/s1600/20545580_1486648734760656_8884066151098747186_o.jpg",
    "https://files.prokerala.com/movies/pics/800/baahubali-50-days-wallpaper-70859.jpg",
    "https://www.bollywoodhungama.com/wp-content/uploads/2017/04/Baahubali-2-The-Conclusion-6.jpg",
    "https://files.prokerala.com/movies/pics/800/baahubali-2-new-wallpaper-70511.jpg",
    "https://www.filmibeat.com/fanimg/baahubali-the-conclusion-baahubali-2-photos-images-55884.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjI2MzkwNzg5M15BMl5BanBnXkFtZTgwMDk4MDAwNDE@._V1_.jpg",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600",
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
  ],
  bts: [
    "https://images.unsplash.com/photo-1500210000-3b748a2af1c5?w=600",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600",
    "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=600",
    "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
    "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
  ],
};

// ---------- Loader ----------
window.addEventListener("load",()=>{
  setTimeout(()=>document.getElementById("loader").classList.add("hide"),800);
});

// ---------- Header scroll ----------
window.addEventListener("scroll",()=>{
  document.getElementById("header").classList.toggle("scrolled",window.scrollY>50);
  document.getElementById("scrollTop").classList.toggle("show",window.scrollY>500);
});

// ---------- Mobile menu ----------
const hamburger=document.getElementById("hamburger");
const navMenu=document.getElementById("navMenu");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
navMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  hamburger.classList.remove("active");navMenu.classList.remove("active");
}));

// ---------- Theme toggle ----------
const themeBtn=document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");themeBtn.textContent="☀️"}
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  const isLight=document.body.classList.contains("light");
  themeBtn.textContent=isLight?"☀️":"🌙";
  localStorage.setItem("theme",isLight?"light":"dark");
});

// ---------- Hero Slider ----------
const slider=document.getElementById("slider");
const dots=document.getElementById("sliderDots");
const heroMovies=movies.slice(0,5);
let currentSlide=0;
heroMovies.forEach((m,i)=>{
  const div=document.createElement("div");
  div.className="slide"+(i===0?" active":"");
  div.style.backgroundImage=`url(${m.poster.replace('w500','original')})`;
  div.innerHTML=`
    <div class="slide-content">
      <h1>${m.title}</h1>
      <div class="meta">
        <span>⭐ ${m.rating}</span><span>${m.genre}</span>
        <span>${m.duration}</span><span>📅 ${m.release}</span>
      </div>
      <p>${m.desc}</p>
      <div class="hero-buttons">
        <button class="btn-primary" onclick="openTrailer('${m.trailer}')">▶ Watch Trailer</button>
        <button class="btn-secondary" onclick="openTrailer('${m.trailer}')">🎬 Start Watching</button>
        <button class="btn-secondary" onclick="toggleWatchlist(${m.id})">+ Watchlist</button>
      </div>
    </div>`;
  slider.appendChild(div);
  const dot=document.createElement("span");
  if(i===0)dot.classList.add("active");
  dot.addEventListener("click",()=>goToSlide(i));
  dots.appendChild(dot);
});
function goToSlide(n){
  slider.children[currentSlide].classList.remove("active");
  dots.children[currentSlide].classList.remove("active");
  currentSlide=(n+heroMovies.length)%heroMovies.length;
  slider.children[currentSlide].classList.add("active");
  dots.children[currentSlide].classList.add("active");
}
document.getElementById("nextSlide").addEventListener("click",()=>goToSlide(currentSlide+1));
document.getElementById("prevSlide").addEventListener("click",()=>goToSlide(currentSlide-1));
setInterval(()=>goToSlide(currentSlide+1),6000);

// ---------- Movie Card ----------
function movieCard(m){
  const inWL=getWatchlist().includes(m.id);
  return `
    <div class="movie-card" data-id="${m.id}">
      <div class="movie-poster">
        <img loading="lazy" src="${m.poster}" alt="${m.title} poster" />
        <span class="movie-rating">⭐ ${m.rating||"N/A"}</span>
        <button class="watch-btn ${inWL?'active':''}" onclick="toggleWatchlist(${m.id})" title="Watchlist">${inWL?'❤️':'🤍'}</button>
        <div class="movie-overlay">
          <div class="overlay-actions">
            <button class="btn-primary" onclick="openTrailer('${m.trailer}')">▶ Trailer</button>
            <button class="btn-primary" onclick="alert('Movie details: ${m.title}')">Details</button>
          </div>
        </div>
      </div>
      <div class="movie-info">
        <h3>${m.title}</h3>
        <p><span>${m.genre}</span><span>${m.year}</span></p>
        <p><span>⏱ ${m.duration}</span></p>
      </div>
    </div>`;
}

// ---------- Render lists ----------
function render(id,list){
  document.getElementById(id).innerHTML=list.map(movieCard).join("");
}
render("trendingGrid",movies.filter(m=>!m.upcoming).slice(0,8));
render("latestGrid",movies.filter(m=>!m.upcoming).slice(4,12));

// Upcoming with countdown
const upcoming=movies.filter(m=>m.upcoming);
document.getElementById("upcomingGrid").innerHTML=upcoming.map(m=>`
  <div class="movie-card">
    <div class="movie-poster">
      <img loading="lazy" src="${m.poster}" alt="${m.title}"/>
      <span class="movie-rating">📅 ${m.year}</span>
    </div>
    <div class="countdown" data-date="${m.release}">
      <div><span>00</span>Days</div><div><span>00</span>Hrs</div>
      <div><span>00</span>Min</div><div><span>00</span>Sec</div>
    </div>
    <div class="movie-info">
      <h3>${m.title}</h3>
      <p style="margin-bottom:10px">${m.desc}</p>
      <button class="btn-primary" style="width:100%" onclick="openTrailer('${m.trailer}')">▶ Watch Teaser</button>
    </div>
  </div>
`).join("");
function updateCountdowns(){
  document.querySelectorAll(".countdown").forEach(c=>{
    const t=new Date(c.dataset.date).getTime()-Date.now();
    if(t<0){c.innerHTML="<div style='flex:1'>Released!</div>";return}
    const d=Math.floor(t/86400000),h=Math.floor(t/3600000)%24,
      mn=Math.floor(t/60000)%60,s=Math.floor(t/1000)%60;
    const spans=c.querySelectorAll("span");
    spans[0].textContent=d;spans[1].textContent=h;spans[2].textContent=mn;spans[3].textContent=s;
  });
}
setInterval(updateCountdowns,1000);updateCountdowns();

// ---------- Trailers ----------
const trailerMovies=movies.slice(0,6);
document.getElementById("trailerGrid").innerHTML=trailerMovies.map(m=>`
  <div class="trailer-card">
    <div class="trailer-thumb" onclick="openTrailer('${m.trailer}')">
      <img loading="lazy" src="https://img.youtube.com/vi/${m.trailer}/hqdefault.jpg" alt="${m.title} trailer"/>
      <div class="play-icon">▶</div>
    </div>
    <div class="trailer-info">
      <h3>${m.title}</h3>
      <p style="color:var(--muted);font-size:13px">${m.desc.slice(0,80)}...</p>
      <div class="trailer-actions">
        <button onclick="this.classList.toggle('liked');this.textContent=this.classList.contains('liked')?'❤️ Liked':'🤍 Like'">🤍 Like</button>
        <button onclick="navigator.share?navigator.share({title:'${m.title}',url:'https://youtu.be/${m.trailer}'}):alert('Share link copied!')">📤 Share</button>
        <button onclick="openTrailer('${m.trailer}')">⛶ Fullscreen</button>
      </div>
    </div>
  </div>
`).join("");

// ---------- Top rated ----------
const topRated=[...movies].filter(m=>!m.upcoming).sort((a,b)=>b.rating-a.rating).slice(0,10);
document.getElementById("topRatedList").innerHTML=topRated.map((m,i)=>`
  <div class="tr-item">
    <div class="tr-rank">${i+1}</div>
    <div class="tr-poster"><img loading="lazy" src="${m.poster}" alt="${m.title}"/></div>
    <div class="tr-info">
      <h3>${m.title}</h3>
      <p>⭐ ${m.rating} • ${m.genre} • ${m.year} • Popularity: ${(100-i*3).toFixed(0)}</p>
      <p style="font-size:12px;color:var(--muted)">🏆 ${i<3?'Multiple Awards':'Critically Acclaimed'}</p>
    </div>
    <button class="btn-primary" onclick="openTrailer('${m.trailer}')">▶ Trailer</button>
  </div>
`).join("");

// ---------- Actors ----------
document.getElementById("actorGrid").innerHTML=actors.map(a=>`
  <div class="actor-card">
    <div class="actor-photo"><img loading="lazy" src="${a.img}" alt="${a.name}"/></div>
    <h3>${a.name}</h3>
    <p><strong>Films:</strong> ${a.films}</p>
    <p><strong>🏆</strong> ${a.awards}</p>
    <div class="actor-socials">
      <a href="#" aria-label="Instagram">📷</a>
      <a href="#" aria-label="Twitter">🐦</a>
      <a href="#" aria-label="Facebook">📘</a>
    </div>
  </div>
`).join("");

// ---------- Gallery ----------
const galleryGrid=document.getElementById("galleryGrid");
function renderGallery(tab){
  galleryGrid.innerHTML=galleryData[tab].map(src=>
    `<img loading="lazy" src="${src}" alt="Gallery image" onclick="openLightbox('${src}')"/>`
  ).join("");
}
renderGallery("posters");
document.querySelectorAll(".gtab").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".gtab").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  renderGallery(b.dataset.tab);
}));

// ---------- Lightbox ----------
const lightbox=document.getElementById("lightbox");
function openLightbox(src){
  document.getElementById("lightboxImg").src=src;
  lightbox.classList.add("show");
}
document.getElementById("lightboxClose").addEventListener("click",()=>lightbox.classList.remove("show"));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)lightbox.classList.remove("show")});

// ---------- Trailer Modal ----------
const modal=document.getElementById("trailerModal");
const modalIframe=document.getElementById("modalIframe");
function openTrailer(id){
  modalIframe.src=`https://www.youtube.com/embed/${id}?autoplay=1`;
  modal.classList.add("show");
}
document.getElementById("modalClose").addEventListener("click",()=>{
  modal.classList.remove("show");modalIframe.src="";
});
modal.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("show");modalIframe.src=""}});

// ---------- Search & Filters ----------
const searchInput=document.getElementById("searchInput");
const suggestions=document.getElementById("suggestions");
const filterGenre=document.getElementById("filterGenre");
const filterYear=document.getElementById("filterYear");
const filterRating=document.getElementById("filterRating");
const categoryPills=document.getElementById("categoryPills");

// populate filters
categories.forEach(c=>filterGenre.innerHTML+=`<option value="${c}">${c}</option>`);
[...new Set(movies.map(m=>m.year))].sort((a,b)=>b-a).forEach(y=>filterYear.innerHTML+=`<option>${y}</option>`);

// category pills
categoryPills.innerHTML=`<button class="pill active" data-cat="">All</button>`+
  categories.map(c=>`<button class="pill" data-cat="${c}">${c}</button>`).join("");
let activeCat="";
categoryPills.addEventListener("click",e=>{
  if(!e.target.classList.contains("pill"))return;
  categoryPills.querySelectorAll(".pill").forEach(p=>p.classList.remove("active"));
  e.target.classList.add("active");activeCat=e.target.dataset.cat;
  applyFilters();
});
function applyFilters(){
  const q=searchInput.value.toLowerCase();
  const g=filterGenre.value||activeCat;
  const r=parseFloat(filterRating.value)||0;
  const y=filterYear.value;
  const filtered=movies.filter(m=>
    (!q||m.title.toLowerCase().includes(q))&&
    (!g||m.genre===g)&&(m.rating>=r)&&(!y||m.year==y)
  );
  document.getElementById("searchResults").innerHTML=
    filtered.length?filtered.map(movieCard).join(""):"<p style='text-align:center;grid-column:1/-1;padding:30px'>No movies found.</p>";
}
[searchInput,filterGenre,filterRating,filterYear].forEach(el=>el.addEventListener("input",applyFilters));
searchInput.addEventListener("input",()=>{
  const q=searchInput.value.toLowerCase();
  if(!q){suggestions.classList.remove("show");return}
  const matches=movies.filter(m=>m.title.toLowerCase().includes(q)).slice(0,5);
  suggestions.innerHTML=matches.map(m=>`<div onclick="selectSuggestion('${m.title.replace(/'/g,"\\'")}')">${m.title}</div>`).join("");
  suggestions.classList.toggle("show",matches.length>0);
});
function selectSuggestion(t){searchInput.value=t;suggestions.classList.remove("show");applyFilters()}
document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))suggestions.classList.remove("show")});
applyFilters();

// ---------- Watchlist ----------
function getWatchlist(){return JSON.parse(localStorage.getItem("watchlist")||"[]")}
function setWatchlist(w){localStorage.setItem("watchlist",JSON.stringify(w))}
function toggleWatchlist(id){
  let w=getWatchlist();
  w=w.includes(id)?w.filter(x=>x!==id):[...w,id];
  setWatchlist(w);
  renderWatchlist();

  // re-render grids to update heart icons
  render("trendingGrid",movies.filter(m=>!m.upcoming).slice(0,8));
  render("latestGrid",movies.filter(m=>!m.upcoming).slice(4,12));
  applyFilters();
}
function renderWatchlist(){
  const w=getWatchlist();
  const items=movies.filter(m=>w.includes(m.id));
  document.getElementById("watchlistGrid").innerHTML=
    items.length?items.map(movieCard).join(""):"<p style='text-align:center;grid-column:1/-1;padding:30px;color:var(--muted)'>Your watchlist is empty. Add some movies!</p>";
}
renderWatchlist();

// ---------- Reviews ----------
let selectedStars=0;
const starInput=document.getElementById("starInput");
starInput.addEventListener("click",e=>{
  if(e.target.tagName!=="SPAN")return;
  selectedStars=parseInt(e.target.dataset.v);
  [...starInput.children].forEach(s=>s.classList.toggle("active",parseInt(s.dataset.v)<=selectedStars));
});
function getReviews(){return JSON.parse(localStorage.getItem("reviews")||"[]")}
function renderReviews(){
  const r=getReviews();
  const list=document.getElementById("reviewList");
  if(!r.length){list.innerHTML="<p style='color:var(--muted)'>No reviews yet. Be the first!</p>";return}
  const avg=(r.reduce((s,x)=>s+x.stars,0)/r.length).toFixed(1);
  list.innerHTML=`<p style="margin-bottom:14px"><strong>Average Rating: ⭐ ${avg}/5</strong> (${r.length} reviews)</p>`+
    r.map(x=>`
      <div class="review-item">
        <h4>${x.name} <span style="color:var(--muted);font-size:12px;font-weight:400">— ${x.movie}</span></h4>
        <div class="stars">${'★'.repeat(x.stars)}${'☆'.repeat(5-x.stars)}</div>
        <p>${x.text}</p>
      </div>`).join("");
}
document.getElementById("reviewForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(!selectedStars){alert("Please select a star rating");return}
  const r=getReviews();
  r.unshift({
    name:document.getElementById("reviewName").value,
    movie:document.getElementById("reviewMovie").value,
    stars:selectedStars,
    text:document.getElementById("reviewText").value,
  });
  localStorage.setItem("reviews",JSON.stringify(r));
  e.target.reset();selectedStars=0;
  [...starInput.children].forEach(s=>s.classList.remove("active"));
  renderReviews();
});
renderReviews();

// ---------- Newsletter & Contact ----------
document.getElementById("newsletterForm").addEventListener("submit",e=>{
  e.preventDefault();
  const email=document.getElementById("newsletterEmail").value;
  if(!/^\S+@\S+\.\S+$/.test(email)){alert("Enter a valid email");return}
  alert("🎉 Subscribed! Welcome to Tollywood updates.");
  e.target.reset();
});
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  alert("✅ Message sent successfully! We'll be in touch.");
  e.target.reset();
});

// ---------- Scroll Top ----------
document.getElementById("scrollTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));