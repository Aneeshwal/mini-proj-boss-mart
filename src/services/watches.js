import product1 from "../images/SubBan1.jpg";
import product2 from "../images/SubBan2.jpg";
import product3 from "../images/SubBan3.jpg";
import product4 from "../images/SubBan4.jpg";
import product5 from "../images/SubBan5.jpg";
import product6 from "../images/SubBan6.jpg";
//import { apiKey } from "../config";
//const url = `https://watchmode.p.rapidapi.com/sources/?apiKey=${apiKey}&limit=${limit}`;
// return fetch(url);

const allProducts = [
  {
    id: 1,
    src: product1,
    name: "Tomato",
    price: 47,
    rating: 5,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 2,
    src: product2,
    name: "Potato",
    price: 33,
    rating: 2,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 3,
    src: product3,
    name: "Onion",
    price: 26,
    rating: 3.5,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 4,
    src: product4,
    name: "Garlic",
    price: 121,
    rating: 5,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 5,
    src: product5,
    name: "Cauliflower",
    price: 29,
    rating: 4,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 6,
    src: product6,
    name: "Carrot",
    price: 52,
    rating: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
];

export default allProducts;
