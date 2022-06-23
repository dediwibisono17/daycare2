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
    name: "Facebook",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
  },
  {
    name: "Maps",
    icon: AddLocationAltIcon,
  },
];

export { data, sosmed };
