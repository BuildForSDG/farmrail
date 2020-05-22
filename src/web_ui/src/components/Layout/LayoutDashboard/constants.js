export const AUTH_TOKEN_KEY = "__demo__eva__token";
export const AUTH_USER_KEY = "__demo__eva__user";

export const appRoles = {
  roleCrmView: "CRM_VIEW",
  roleCrmEdit: "CRM_EDIT",

  roleAuthUserView: "AUTH_USER_VIEW",
  roleAuthUserEdit: "AUTH_USER_EDIT",

  roleAuthGroupView: "AUTH_GROUP_VIEW",
  roleAuthGroupEdit: "AUTH_GROUP_EDIT",

  roleTagView: "AUTH_TAG_VIEW",
  roleTagEdit: "AUTH_TAG_EDIT",

  roleGroupView: "GROUP_VIEW",
  roleGroupEdit: "GROUP_EDIT",
};

export const redux = {
  doLogin: "DO_LOGIN",
  doLogout: "DO_LOGOUT",
  doSearch: "DO_SEARCH",
};

export const localRoutes = {
  dashboard: "/dashboard",
  contacts: "/people/contacts",
  contactsDetails: "/people/contacts/:contactId",
  groups: "/people/groups",

  users: "/admin/users",
  usersGroups: "/admin/user-groups",
  tags: "/admin/tags",
  settings: "/admin/settings",
  help: "/help", 
};


    



