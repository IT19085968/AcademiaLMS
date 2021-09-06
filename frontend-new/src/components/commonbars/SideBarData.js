import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardFill />,
    cName: "nav-text",
  },
  {
    title: "Pages",
    path: "/category",
    // icon: <IoIcons.IoIosPaper />,
    icon: <RiIcons.RiPagesLine />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/course",
    // icon: <FaIcons.FaCartPlus />,
    icon: <BsIcons.BsBook />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    // icon: <RiIcons.RiPagesLine />,
    cName: "nav-text",
  },
  {
    title: "User Management",
    path: "/one",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  // {
  //   title: "Settings",
  //   path: "/settings",
  //   icon: <MdIcons.MdSettings />,
  //   cName: "nav-text",
  // },
  {
    title: "Quizes",
    path: "/quizMain",
    icon: <MdIcons.MdSettings />,
    cName: "nav-text",
  },
  {
    title: "Exams",
    path: "/exams",
    icon: <BsIcons.BsNewspaper />,
    cName: "nav-text",
  },
  {
    title: "Syllabus",
    path: "/syllabus",
    icon: <BsIcons.BsNewspaper />,
    cName: "nav-text",
  },
  // {
  //   title: "Login",
  //   path: "/login",
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: "nav-text",
  // },
  //   {
  //     title: "Support",
  //     path: "/support",
  //     icon: <IoIcons.IoMdHelpCircle />,
  //     cName: "nav-text",
  //   },
];
