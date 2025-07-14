
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero"
import Navbar from "./Navbar"
import Newsletter from "./Newsletter";
import Places from "./Places";
import PopularDestination from "./PopularDestination";
import RecentTrips from "./RecentTrips";


function App() {
  const navcontent = [
    { logo: "/Images/illustration/logo.png", url: "/" },
    { label: "Home", url: "#" },
    { label: "About", url: "#" },
    { label: "Destination", url: "#" },
    { label: "Pages", url: "#" },
    { label: "Blog", url: "#" },
    { label: "Contact", url: "#" }
];

const socialIcons = [
    { icon: "instagram", url: "#" },
    { icon: "linkedin", url: "#" },
    { icon: "facebook", url: "#" },
    { icon: "google", url: "#" }
];
  const heroBg = [
    {
    bg1: "/Images/illustration/banner.png",
    bg2: "/Images/illustration/banner2.png",
    bg3: "/Images/illustration/banner3.png"
  } 
  ]
  const destinations = [
    {
      name: "Italy",
      places: "07 Places",
      img: "Images/illustration/1.png",
    },
    {
      name: "Brazil",
      places: "03 Places",
      img: "Images/illustration/2.png",
    },
    {
      name: "America",
      places: "10 Places",
      img: "Images/illustration/3.png",
    },
    {
      name: "Nepal",
      places: "02 Places",
      img: "Images/illustration/5.png",
    },
    {
      name: "Maldives",
      places: "02 Places",
      img: "Images/illustration/5.png",
    },
    {
      name: "Indonesia",
      places: "05 Places",
      img: "Images/illustration/6.png",
    },
  ];
  const newsletterData = [
    {
      title: "Subscribe Our Newsletter",
      description: "Subscribe newsletter to get offers and about new places to discover.",
      placeholder: "Your mail",
      buttonText: "Subscribe"
    }
  ];
  const placeData = [
    {
      title: "California",
      country: "United State of America",
      price: "$500",
      image: "/Images/illustration/place1.png", 
      reviews: "20 Review",
      duration: "5 Days"
    },
    {
      title: "Korola Megna",
      country: "United State of America",
      price: "$500",
      image: "/Images/illustration/place2.png",
      reviews: "20 Review",
      duration: "5 Days"
    },
    {
      title: "London",
      country: "United State of America",
      price: "$500",
      image: "/Images/illustration/place3.png",
      reviews: "20 Review",
      duration: "5 Days"
    },
    {
      title: "Miami Beach",
      country: "United State of America",
      price: "$500",
      image: "/Images/illustration/place4.png",
      reviews: "20 Review",
      duration: "5 Days"
    },
    {
      title: "California",
      country: "United State of America",
      price: "$500",
      image: "/Images/illustration/place5.png",
      reviews: "20 Review",
      duration: "5 Days"
    },
    {
      title: "Saintmartine Iceland",
      country: "United State of America",
      price: "$500",
      image: "/Images/illustration/place6.png",
      reviews: "20 Review",
      duration: "5 Days"
    }
  ];
   const features = [
    {
      title: "Comfortable Journey",
      description: "A wonderful serenity has taken to the possession of my entire soul.",
      image: "/Images/illustration/feature1.svg",
    },
    {
      title: "Luxuries Hotel",
      description: "A wonderful serenity has taken to the possession of my entire soul.",
      image: "/Images/illustration/feature2.svg",
    },
    {
      title: "Travel Guide",
      description: "A wonderful serenity has taken to the possession of my entire soul.",
      image: "/Images/illustration/feature3.svg",
    }
  ];
  const tripData = [
  {
    image: '/Images/illustration/Trip1.png',
    date: 'Oct 12, 2019',
    title: 'Journeys Are Best Measured In New Friends',
  },
  {
    image: '/Images/illustration/Trip2.png',
    date: 'Oct 12, 2019',
    title: 'Journeys Are Best Measured In New Friends',
  },
  {
    image: '/Images/illustration/Trip3.png',
    date: 'Oct 12, 2019',
    title: 'Journeys Are Best Measured In New Friends',
  },
];
const footerData = {
    logo: "/Images/illustration/footerlogo.png",
    address: [
      "5th flora, 700/D kings road, green lane New York-1782",
      "+10 367 826 2567",
      "contact@carpenter.com",
    ],
    socialIcons: [
      "bi bi-facebook",
      "bi bi-twitter",
      "bi bi-instagram",
      "bi bi-pinterest",
      "bi bi-youtube",
    ],
    companyLinks: ["Pricing", "About", "Gallery", "Contact"],
    destinations: {
      col1: ["Indonesia", "India", "Italy", "Franch"],
      col2: ["America", "Switzerland", "Canada", "England"],
    },
    instagramImages: [
      "/Images/illustration/insta1.png",
      "/Images/illustration/insta2.png",
      "/Images/illustration/insta3.png",
      "/Images/illustration/insta4.png",
      "/Images/illustration/insta5.png",
      "/Images/illustration/insta6.png",
    ],
  };
  
 


  return (
    <>
      <Navbar navcontent={navcontent} socialIcons={socialIcons}/>
      <Hero herocontent={heroBg} />
      <PopularDestination dest={destinations} />
      <Newsletter data={newsletterData} />
      <Places data={placeData} />
      <Features items={features} />
      <RecentTrips trips={tripData} />
      <Footer data={footerData} />
      
      
    </>
  )
}

export default App;
