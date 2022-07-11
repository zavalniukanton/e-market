export const styles = {
  banner: (scrolled: boolean) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: scrolled ? 0 : 32,
    backgroundColor: "#000000",
    transition: "all .3s ease-in-out",
    overflow: "hidden",
  }),
};
