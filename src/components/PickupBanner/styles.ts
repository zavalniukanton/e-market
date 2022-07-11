export const styles = {
  banner: (scrolled: boolean) => ({
    display: scrolled ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 32,
    fontSize: 24,
    backgroundColor: "black",
  }),
};
