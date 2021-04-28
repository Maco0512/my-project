// component's config object.
const components = {
  admin: {
    component: "AdminOnly",
    url: "/admin-only",
    title: "Admin Only",
    icon: "menu",
    module: 1,
  },
  users: {
    component: "Users",
    url: "/users",
    title: "Users",
    icon: "menu",
    module: 1,
  },
  list: {
    component: "List",
    url: "/list",
    title: "List",
    icon: "menu",
    module: 1,
  },
  // customers: {
  // 	component: 'Customers',
  // 	url: '/customers',
  // 	title: 'Customers',
  // 	icon: 'menu',
  // 	module: 1
  // },
  registration: {
    component: "Registration",
    url: "/registration",
    title: "Registration",
    icon: "menu",
    module: 1,
  },
  approval: {
    component: "Approval",
    url: "/approval",
    title: "Approval",
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
  branchExpert: {
    routes: [components.approval, components.registration, components.list],
  },
  researcher: {
    routes: [components.registration, components.list],
  },
  common: {
    routes: [
      {
        component: "Dashboard",
        url: "/",
        title: "Dashboard",
        icon: "menu",
        module: 1,
      },
      {
        component: "Profile",
        url: "/profile",
        title: "Profile",
        icon: "menu",
        module: 1,
      },
    ],
  },
};

export { modules, rolesConfig };
