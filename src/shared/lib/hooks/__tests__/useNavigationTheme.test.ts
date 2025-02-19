import { useNavigationTheme } from "../useNavigationTheme";
import { renderHook } from "@testing-library/react-native";


describe("useNavigationTheme", () => {
  test("default", () => {
    const { result } = renderHook(() => useNavigationTheme());

    expect(result).toStrictEqual({
      current: {
        colors: {
          background: "#FFFFFF",
          border: "rgba(21, 28, 44, 0.2)",
          card: "#FFFFFF",
          notification: "#353A45",
          primary: "#20242D",
          text: "#20242D"
        },
        dark: false
      }
    });
  });
});
