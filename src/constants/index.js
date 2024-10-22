import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  { href: "#news", label: "Newsletter" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: product1,
    name: "Powdred Jelly donut",
    price: "$9.00",
    bg: "#98CFF3",
  },
  {
    imgURL: product2,
    name: "Cold Brow With Coconut",
    price: "$12.00",
    bg: "#FFDBF7",
  },
  {
    imgURL: product3,
    name: "Burnt Orange Dreamsicle",
    price: "$12.00",
    bg: "#BED7FE",
  },
  {
    imgURL: product4,
    name: "Brambleberry Crisp",
    price: "$10.00",
    bg: "#FEC6E9",
  },
];

export const reviews = [
  {
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Pages",
    links: [
      { name: "Home", link: "/" },
      { name: "Products", link: "/" },
      { name: "About Us", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQs", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@meltnice.com", link: "mailto:customer@meltnice.com" },
      { name: "+216999999", link: "tel:+216999999" },
    ],
  },
];
