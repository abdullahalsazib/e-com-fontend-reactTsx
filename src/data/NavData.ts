
 export const navLinks = [
    { hrefTo: "/", title: "Home" },
    { hrefTo: "/shop", title: "Shop" },
    { hrefTo: "/blog", title: "Blog" },
    { hrefTo: "/contact", title: "Contact Us" },
  ];
 export const helpOption = [
    { hrefTo: "/", title: "Payment Option" },
    { hrefTo: "/", title: "Retruns" },
    { hrefTo: "/", title: "Privacy Policies" },
  ];

export const LinkNavbar = [
    {hrefTo:"/", title: "home"},
    {hrefTo:"/", title: "blog"},
    {hrefTo:"/", title: "page"},
    {hrefTo:"/", title: "shop"},
    {hrefTo:"/", title: "contact us"},
    {hrefTo:"/", title: "about"},
  ]

export interface ProductProps {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  image_url?: string;
}
