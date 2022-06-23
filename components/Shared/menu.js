import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const data = [
  { link: "/", title: "Home" },
  { link: "/gallery", title: "Gallery" },
  { link: "/news", title: "News" },
  { link: "/about", title: "About Us" },
];

const sosmed = [
  {
    name: "Daycare Indonesia",
    icon: FacebookIcon,
    color: "#3b5998",
  },
  {
    name: "Daycare Indonesia",
    icon: InstagramIcon,
    color: "#8a3ab9",
  },
  {
    name: "@daycareindonesia",
    icon: TwitterIcon,
    color: "#00acee",
  },
  {
    name: "Depok, Jawa Barat",
    icon: AddLocationAltIcon,
    color: "#1EA362",
  },
];

export { data, sosmed };
