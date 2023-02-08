import React, { Fragment, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiCategoryAlt, BiChevronDown, BiShowAlt } from "react-icons/bi";
import { MdOutlineCreate } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSidebar,
  setSubMenuIndex,
} from "../../redux/features/sidebar/sidebarSlice";
const SidebarComponent = () => {
  // const [open, setOpen] = useState(true);

  // const [subMenuIndex, setSubMenuIndex] = useState(null);
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar.sidebarOpen);
  const subMenuValue = useSelector((state) => state.sidebar.subMenuIndex);

  const menus = [
    {
      name: "Dashboard",
      icon: MdOutlineDashboard,
      link: "/",
    },
    {
      name: "User",
      icon: AiOutlineUser,
      link: "/user",
    },
    {
      name: "Category",
      icon: BiCategoryAlt,
      link: "/category",
      /* submenu */
      submenu: [
        {
          name: "Create Category",
          link: "/create-category",
          icon: MdOutlineCreate,
        },
        {
          name: "Show Category",
          link: "/show-category",
          icon: BiShowAlt,
        },
      ],
    },
    {
      name: "Transaction",
      icon: AiOutlineTransaction,
      link: "/analytics",
      margin: true,
      submenu: [
        {
          name: "Create Transaction",
          link: "/create-transaction",
          icon: MdOutlineCreate,
        },
        {
          name: "Show Transaction",
          link: "/show-transaction",
          icon: BiShowAlt,
        },
      ],
    },
  ];
  const { pathname } = useLocation();

  return (
    <Fragment>
      <div
        className={`bg-gray-600 min-h-screen text-gray-100 px-4 duration-500 ${
          sidebar ? "w-72" : "w-16"
        } duration-500`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, index) =>
            /* if menu has submenu */
            menu.submenu ? (
              <div key={index}>
                <div
                  className={`flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer ${
                    pathname === menu.link ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={() =>
                    dispatch(
                      setSubMenuIndex(index === subMenuValue ? null : index)
                    )
                  }
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <span
                    className={`whitespace-pre duration-500 ${
                      !sidebar && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu.name}
                  </span>
                  <BiChevronDown
                    size={20}
                    className={`${
                      subMenuValue === index ? "transform rotate-180" : ""
                    } cursor-pointer ml-auto duration-300`}
                    // onClick={rotate}
                  />
                </div>
                {/* open specific menu click submenu */}
                {subMenuValue === index && (
                  <div className="flex flex-col gap-2 pl-8">
                    {menu.submenu?.map((sub, index) => (
                      /* open specific menu click submenu */
                      <NavLink
                        key={index}
                        to={sub.link}
                        className={`flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer block ${
                          pathname === sub.link
                            ? "bg-gray-700"
                            : "hover:bg-gray-700"
                        }`}
                      >
                        <div>
                          {React.createElement(sub?.icon, { size: "15" })}
                        </div>
                        <span
                          className={`whitespace-pre duration-500 ${
                            !sidebar &&
                            "opacity-0 translate-x-28 overflow-hidden"
                          }`}
                        >
                          {sub.name}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* if menu has no submenu */
              <NavLink
                key={index}
                to={menu.link}
                className={`flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer ${
                  pathname === menu.link ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <span
                  className={`whitespace-pre duration-500 ${
                    !sidebar && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </span>
              </NavLink>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarComponent;
