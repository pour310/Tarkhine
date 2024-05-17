import {
  UserIcon,
  AboutUsIcon,
  BranchIcon,
  CallIcon,
  DrapDownIcon,
  FavoritesIcon,
  HomeIcon,
  LocationIcon,
  LogoutIcon,
  MenuIcon,
  TrackOrdersIcon,
} from "../../public/assets/icons/SVG";


export const branchName = [
  {
    title: "شعبه اکباتان",
    path:"/Branch",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    id: 1,
    image: "/assets/image/b-Ecbatan.png",
  },
  {
    title: "شعبه چالوس",
    path:"/Branch",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    id: 2,
    image: "/assets/image/b-Chalos.png",
  },
  {
    title: "شعبه ونک",
    path:"/Branch",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    id: 3,
    image: "/assets/image/b-Vanak.png",
  },
  {
    title: "شعبه اقدسیه",
    path:"/Branch",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    id: 4,
    image: "/assets/image/b-Aghdasie.png",
  },
];

export const navbarItem = [
  { link: "صفحه اصلی", to: "/", icon:<HomeIcon />, id: 1 },
  {
    link: " شعبه",
    to: "/Branch",
    icon: <BranchIcon />,
    leftIcon: <DrapDownIcon />,
    id: 2,
    
  },
  {
    link: " منو",
    to: "/Menu",
    icon: <MenuIcon color="#353535" width="12px" height="12px" />,
    leftIcon: <DrapDownIcon />,
    id: 3,
  },
  { link: " اعطای نمایندگی", to: "/Deputize", icon: <CallIcon />, id: 4 },
  { link: " درباره ما", to: "/AboutUs", icon: <AboutUsIcon />, id: 5 },
  { link: " تماس با ما", to: "/ContactUs", icon: <CallIcon />, id: 6 },
];

export const menuItem = [
{title:"غذا ی اصلی", img:"/assets/image/food.png", id:1},
{title:" پیش غذا ", img:"/assets/image/bFood.png", id:2},
{title:"غذا ی اصلی", img:"/assets/image/deser.png", id:3},
]


export const accountItem = [
  {title:"پروفایل",        path:"/Profile",   icon:<UserIcon />, id:1},
  {title:"پیگیری سفارش",   path:"/Profile",  icon:<TrackOrdersIcon />, id:2},
  {title:" علاقه مندی ها", path:"/Profile",   icon:<FavoritesIcon />, id:3},
  {title:"آدرس های من",    path:"/Profile",  icon:<LocationIcon />, id:4},
  {title:"خروج از حساب",   path:"/Profile",  icon:<LogoutIcon />, id:5},
]