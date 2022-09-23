import React from "react";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LandscapeIcon from "@mui/icons-material/Landscape";
import MoneyIcon from "@mui/icons-material/Money";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export let categories = [
  "Entrepreneurship",
  "Politics",
  "Marketing & Sales",
  "Science",
  "Health & Nutrition",
  "Propfessional development",
  "Economics",
  "History",
  "Communication Skills",
  "Corporate Culture",
  "Motivation & Inspiration",
  "Money & Investments",
  "Psychology",
  "Productiovity",
  "Sex & Relationship",
  "Nature & Environment",
  "Career & Sucecess",
  "Education",
];

export let categoryIcons = [
  <AddAlertIcon />,
  <AccountBalanceIcon />,
  <TimelineIcon />,
  <ScienceOutlinedIcon />,
  <HealthAndSafetyOutlinedIcon />,
  <SignalCellularAltIcon />,
  <AttachMoneyIcon />,
  <HistoryEduIcon />,
  <LanguageIcon />,
  <CorporateFareIcon />,
  <EmojiObjectsOutlinedIcon />,
  <MoneyIcon />,
  <PsychologyIcon />,
  <HourglassEmptyOutlinedIcon />,
  <FavoriteBorderOutlinedIcon />,
  <LandscapeIcon />,
  <ThumbUpIcon />,
  <SchoolOutlinedIcon />,
];


export let books = [
  {
    id: 1,
    title: "Beyond Entrepreneurship 2.0",
    author: "Jim Collins and Bill Lazier",
    duration: 15,
    reads: "1.9k reads",
    category: "Entrepreneurship",
    image:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    isInMyLibrary: true,
    isFinished: true,
  },
  {
    id: 2,
    title: "Dropshipping",
    author: "James Moore",
    duration: 30,
    reads: "1.9k reads",
    category: "Entrepreneurship",
    image:
      "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
    isInMyLibrary: false,
    isFinished: false,
  },
  {
    id: 3,
    title: "The Bully Pulpit",
    author: "Goodwin",
    duration: 19,
    reads: "1.9k reads",
    category: "Politics",
    image:
      "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
    isInMyLibrary: false,
    isFinished: false,
  },
  {
    id: 4,
    title: "Genesis",
    author: "Guido Tonelli",
    duration: 25,
    reads: "1.9k reads",
    category: "Science",
    image:
      "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
    isInMyLibrary: true,
    isFinished: false,
  },
  {
    id: 5,
    title: "Exercised",
    author: "Daniel E. Lieberman",
    duration: 20,
    reads: "1.9k reads",
    category: "Science",
    image:
      "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
    isInMyLibrary: false,
    isFinished: false,
  },
  {
    id: 6,
    title: "Forest Bathing",
    author: "Qing Li",
    duration: 12,
    reads: "1.9k reads",
    category: "Health",
    image:
      "https://images.blinkist.com/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
    isInMyLibrary: true,
    isFinished: false,
  },
  {
    id: 7,
    title: "The Pegan Diet",
    author: "Dr. Mark Hyman",
    duration: 25,
    reads: "1.9k reads",
    category: "Health",
    image:
      "https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
    isInMyLibrary: false,
    isFinished: false,
  },
  {
    id: 8,
    title: "Hyper-Learning",
    author: "Edward D.Hess",
    duration: 13,
    reads: "1.9k reads",
    category: "Education",
    image:
      "https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
    isInMyLibrary: true,
    isFinished: false,
  }
]