import fav1 from "../../../assets/images/favorite/01.jpg";
import fav2 from "../../../assets/images/favorite/02.jpg";
import fav3 from "../../../assets/images/favorite/03.jpg";
import fav4 from "../../../assets/images/favorite/04.jpg";
import fav5 from "../../../assets/images/favorite/05.jpg";

// upcoming img
import upcoming1 from "../../../assets/images/upcoming/01.jpg";
import upcoming2 from "../../../assets/images/upcoming/02.jpg";
import upcoming3 from "../../../assets/images/upcoming/03.jpg";
import upcoming4 from "../../../assets/images/upcoming/04.jpg";
import upcoming5 from "../../../assets/images/upcoming/05.jpg";

// suggested
import suggested1 from "../../../assets/images/suggested/01.jpg";
import suggested2 from "../../../assets/images/suggested/02.jpg";
import suggested3 from "../../../assets/images/suggested/03.jpg";
import suggested4 from "../../../assets/images/suggested/04.jpg";
import suggested5 from "../../../assets/images/suggested/05.jpg";


import tvthrillers1 from "../../../assets/images/tvthrillers/01.jpg";
import tvthrillers2 from "../../../assets/images/tvthrillers/02.jpg";
import tvthrillers3 from "../../../assets/images/tvthrillers/03.jpg";
import tvthrillers4 from "../../../assets/images/tvthrillers/04.jpg";
import tvthrillers5 from "../../../assets/images/tvthrillers/05.jpg";



export const options1 = [
    { value: "season 1", label: "Season 1" },
    { value: "season 2", label: "Season 2" },
    { value: "season 3", label: "Season 3" },
  ];

  export const options2 = [
    { value: "season 1", label: "Season 1" },
    { value: "season 2", label: "Season 2" },
  ];

  export const LatestMovies = [
    {
      title: "Sand Dust",
      imageUrl: fav1,  
      ageRating: "13+",
      duration: "2h 30m",
    },
    {
      title: "Last Race",
      imageUrl: fav2,   
      ageRating: "7+",
      duration: "2 Seasons",
    },
    {
      title: "Boop Bitty",
      imageUrl: fav3,   
      ageRating: "15+",
      duration: "2h 30m",
    },
    {
      title: "Dino Land",
      imageUrl: fav4,   
      ageRating: "18+",
      duration: "3 Seasons",
    },
    {
      title: "Jaction action",
      imageUrl: fav5,   
      ageRating: "10+",
      duration: "1 Season",
    },
  ];

  export  const upcomingData = [
    {
      title: "The Last Breath",
      imageUrl:  upcoming2,  
      ageRating: "5+",
      duration: "2h 30m",
    },
    {
      title: "Shadow",
      imageUrl: upcoming4,
      ageRating: "22+",
      duration: "2h 15m",
    },
    {
      title: "Another Danger",
      imageUrl: upcoming3,  
      ageRating: "25+",
      duration: "3h",
    },
    {
      title: "1980",
      imageUrl: upcoming1, 
      ageRating: "11+",
      duration: "2h 45m",
    },
    {
      title: "Vugotronic",
      imageUrl: upcoming5, 
      ageRating: "9+",
      duration: "2h 30m",
    },
  ];

  export  const familiarFavorites = [
    {
      title: "The Last Breath",
      imageUrl: upcoming1,  
      ageRating: "5+",
      duration: "2h 30m",
    },
    {
      title: "Shadow",
      imageUrl: upcoming2,   
      ageRating: "22+",
      duration: "2h 15m",
    },
    {
      title: "Another Danger",
      imageUrl: upcoming3,  
      ageRating: "25+",
      duration: "3h",
    },
    {
      title: "1980",
      imageUrl: upcoming4,  
      ageRating: "11+",
      duration: "2h 45m",
    },
    {
      title: "Vugotronic",
      imageUrl: upcoming5, 
      ageRating: "9+",
      duration: "2h 30m",
    },
  ];

  export  const Suggested = [
    {
      title: "Inside the Sea",
      image: suggested1,
      ageRating: "11+",
      duration: "2h 30m",
      link: "/show-details",
      description: "An exciting adventure under the sea.",
      likes: 19,
    },
    {
      title: "Jumbo Queen",
      image: suggested2,
      ageRating: "9+",
      duration: "2 Seasons",
      link: "/show-details",
      description: "Join Jumbo Queen for amazing journeys.",
      likes: 19,
    },
    {
      title: "Unknown Land",
      image: suggested3,
      ageRating: "17+",
      duration: "2h 30m",
      link: "/show-details",
      description: "Explore a mysterious and uncharted land.",
      likes: 19,
    },
    {
      title: "Friends",
      image: suggested4,
      ageRating: "14+",
      duration: "10 Seasons",
      link: "/show-details",
      description: "Join the gang in this classic sitcom.",
      likes: 19,
    },
    {
      title: "Blood Block",
      image: suggested5,
      ageRating: "13+",
      duration: "2h 40m",
      link: "/show-details",
      description: "A thrilling and action-packed series.",
      likes: 19,
    },
  ];

  export const sliderContent = [
   {
     title: "bushland",
  

     rating: "4.7(lmdb)",
     ageRating: "18+",
     duration: "2 Seasons",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
     starring: "Karen Gilchrist, James Earl Jones",
     genres: "Action",
     tag: "Action, Adventure, Horror",
     buttonLinks: [
       { text: "Play Now", link: "/show-details" },
       { text: "More details", link: "/show-details" },
     ],
   },
   {
     title: "sail coaster",
     rating: "4.7(lmdb)",
     ageRating: "16+",
     duration: "2h 40m",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
     starring: "Karen Gilchrist, James Earl Jones",
     genres: "Action",
     tag: "Action, Adventure, Horror",
     buttonLinks: [
       { text: "Play Now", link: "/show-details" },
       { text: "More details", link: "/show-details" },
     ],
   },
   {
     title: "the army",
     rating: "4.7(lmdb)",
     ageRating: "20+",
     duration: "3h",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
     starring: "Karen Gilchrist, James Earl Jones",
     genres: "Action",
     tag: "Action, Adventure, Horror",
     buttonLinks: [
       { text: "Play Now", link: "/show-details" },
       { text: "More details", link: "/show-details" },
     ],
   },
 ];




 export const Recommended = [
   {
     imgSrc: tvthrillers1,
     title: "Day of Darkness",
     ageRating: "15+",
     seasons: "2 Seasons",
     link: "/show-details",
   },
   {
     imgSrc: tvthrillers2,
     title: "My True Friends",
     ageRating: "7+",
     seasons: "2 Seasons",
     link: "/show-details",
   },
   {
     imgSrc: tvthrillers3,
     title: "Arrival 1999",
     ageRating: "11+",
     seasons: "3 Seasons",
     link: "/show-details",
   },
   {
     imgSrc: tvthrillers4,
     title: "Night Mare",
     ageRating: "18+",
     seasons: "3 Seasons",
     link: "/show-details",
   },
   {
     imgSrc: tvthrillers5,
     title: "The Marshal King",
     ageRating: "17+",
     seasons: "1 Season",
     link: "/show-details",
   },
 ];
 