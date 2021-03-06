import {
  thrillerBookOne,
  thrillerBookTwo,
  thrillerBookThree,
  thrillerBookFour,
  thrillerBookFive,
  thrillerBookSix,
  romanceBookOne,
  romanceBookTwo,
  romanceBookThree,
  romanceBookFour,
  romanceBookFive,
  romanceBookSix,
  dramaBookOne,
  dramaBookTwo,
  dramaBookThree,
  dramaBookFour,
  dramaBookFive,
  dramaBookSix,
  scifiBookOne,
  scifiBookTwo,
  scifiBookThree,
  scifiBookFour,
  scifiBookFive,
  scifiBookSix,
} from "./images.js";

const productsArray = [
  {
    id: 1,
    bookCover: thrillerBookOne,
    bookTitle: "Murder On The Orient Express",
    bookAuthor: "Agatha Christie",
    bookPrice: 249,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Thriller",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 2,
    bookCover: thrillerBookTwo,
    bookTitle: "400 Days",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 149,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Thriller",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 3,
    bookCover: thrillerBookThree,
    bookTitle: "The Murder of Roger Ackroyd",
    bookAuthor: "Agatha Christie",
    bookPrice: 449,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Thriller",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 4,
    bookCover: thrillerBookFour,
    bookTitle: "One Arranged Murder",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 299,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Thriller",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 5,
    bookCover: thrillerBookFive,
    bookTitle: "The ABC Murders",
    bookAuthor: "Agatha Christie",
    bookPrice: 399,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Thriller",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 6,
    bookCover: thrillerBookSix,
    bookTitle: "And Then There Were None",
    bookAuthor: "Agatha Christie",
    bookPrice: 249,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Thriller",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 7,
    bookCover: dramaBookOne,
    bookTitle: "The Legend of Suheldev",
    bookAuthor: "Amish Tripathi",
    bookPrice: 449,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Drama",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 8,
    bookCover: dramaBookTwo,
    bookTitle: "Five Point Someone",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 149,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Drama",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 9,
    bookCover: dramaBookThree,
    bookTitle: "The 3 Mistakes Of My Life",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 299,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Drama",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 10,
    bookCover: dramaBookFour,
    bookTitle: "The White Tiger",
    bookAuthor: "Aravind Adiga",
    bookPrice: 249,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Drama",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 11,
    bookCover: dramaBookFive,
    bookTitle: "One Night At The Call Center",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 199,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Drama",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 12,
    bookCover: dramaBookSix,
    bookTitle: "The Girl Who Knew Too Much",
    bookAuthor: "Vikrant Khanna",
    bookPrice: 399,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Drama",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 13,
    bookCover: scifiBookOne,
    bookTitle: "Foundation And Empire",
    bookAuthor: "Isaac Asimov",
    bookPrice: 199,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Scifi",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 14,
    bookCover: scifiBookTwo,
    bookTitle: "Beyond Infinity",
    bookAuthor: "Akash Siddharth",
    bookPrice: 149,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Scifi",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 15,
    bookCover: scifiBookThree,
    bookTitle: "Artemis",
    bookAuthor: "Andy Weir",
    bookPrice: 449,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Scifi",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 16,
    bookCover: scifiBookFour,
    bookTitle: "Dark Matter",
    bookAuthor: "Blake Crouch",
    bookPrice: 299,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Scifi",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 17,
    bookCover: scifiBookFive,
    bookTitle: "A Wrinkle In Time",
    bookAuthor: "Madeleine Lengle",
    bookPrice: 249,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Scifi",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 18,
    bookCover: scifiBookSix,
    bookTitle: "Kid Who Came From Space",
    bookAuthor: "Ross Welford",
    bookPrice: 349,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Scifi",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 19,
    bookCover: romanceBookOne,
    bookTitle: "Half Girlfriend",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 349,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Romance",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 20,
    bookCover: romanceBookTwo,
    bookTitle: "2 States",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 149,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Romance",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 21,
    bookCover: romanceBookThree,
    bookTitle: "Revolution 2020",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 249,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Romance",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 22,
    bookCover: romanceBookFour,
    bookTitle: "One Indian Girl",
    bookAuthor: "Chetan Bhagat",
    bookPrice: 199,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Romance",
    bookRating: 4,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 23,
    bookCover: romanceBookFive,
    bookTitle: "The Fault In Our Stars",
    bookAuthor: "John Green",
    bookPrice: 449,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Romance",
    bookRating: 3,
    bookQuantity: 1,
    show: true,
  },
  {
    id: 24,
    bookCover: romanceBookSix,
    bookTitle: "The Perfect Us",
    bookAuthor: "Durjoy Dutta",
    bookPrice: 299,
    actionOne: "Add To Cart",
    actionTwo: "Add To Wishlist",
    bookCategory: "Romance",
    bookRating: 2,
    bookQuantity: 1,
    show: true,
  },
];

export default productsArray;
