import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Recent";

  switch (routeName) {
    case "Recent":
      return "Recent expenses";
    case "All":
      return "All expenses";
    case "Edit":
      return "Edit expenses";
  }
}
