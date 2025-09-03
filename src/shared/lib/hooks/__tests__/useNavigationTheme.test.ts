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
        dark: false,
        fonts: {
          bold: {
            fontFamily: 'System',
            fontWeight: '600',
          },
          heavy: {
            fontFamily: 'System',
            fontWeight: '700',
          },
          medium: {
            fontFamily: 'System',
            fontWeight: '500',
          },
          regular: {
            fontFamily: 'System',
            fontWeight: '400',
          },
        }
      }
    });
  });
});
