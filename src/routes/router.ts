export const ROUTE = {
  NOT_FOUND: "*",
  DEFAULT: "/",
  LOGIN: "/login",
  ACCOUNTS: "/accounts",
  FOODS: "/foods",
  FOOD_DETAILS: (id: string) => `/foods/${id}`,
  CATEGORIES: "/categories"
};