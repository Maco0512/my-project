// component's config object.
const components = {
  // admin: {
  //   component: "AdminOnly",
  //   url: "/admin-only",
  //   title: "Admin Only",
  //   icon: "menu",
  //   module: 1,
  // },
  users: {
    component: "Users",
    url: "/users",
    title: "Хэрэглэгч",
    icon: "menu",
    module: 1,
  },
  // list: {
  //   component: "List",
  //   url: "/list",
  //   title: "Жагсаал",
  //   icon: "menu",
  //   module: 1,
  // },
  collection: {
    component: "CollectionRegistration",
    url: "/collection-registration",
    title: "Цуглууга бүртгэл",
    icon: "menu",
    module: 1,
  },
  treasury: {
    component: "TreasuryRegistration",
    url: "/treasury-registration",
    title: "Сан хөмрөг бүртгэл",
    icon: "menu",
    module: 1,
  },
  registration: {
    component: "FossilRegistration",
    url: "/fossil-registration",
    title: "Олдвор бүртгэл",
    icon: "menu",
    module: 1,
  },
  // request: {
  //   component: "Request",
  //   url: "/request",
  //   title: "Бүртгэл хүсэлт",
  //   icon: "menu",
  //   module: 1,
  // },
  requestList: {
    component: "RequestList",
    url: "/request-list",
    title: "Ирсэн хүсэлт",
    icon: "menu",
    module: 1,
  },
};

// modules for grouping.
const modules = {
  0: {
    title: "Dashboard",
    icon: "home",
    isExpendable: true,
  },
};

// component's access to roles.
const rolesConfig = {
  admin: {
    routes: [...Object.values(components)],
  },
  expert: {
    routes: [components.users],
  },
  researcher: {
    routes: [components.registration],
  },
  treasurer: {
    routes: [components.treasury],
  },
  registrar: {
    routes: [components.collection],
  },
  common: {
    routes: [
      {
        component: "Dashboard",
        url: "",
        title: "Самбар",
        icon: "menu",
        module: 1,
      },
      {
        component: "Profile",
        url: "/profile",
        title: "Профайл",
        icon: "menu",
        module: 1,
      },
    ],
  },
};

export { modules, rolesConfig };
