import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    paddingTop: 24,
    paddingHorizontal: 24,
  },

  eventName: {
    color: "#fff",
    marginTop: 48,
    fontWeight: "bold",
    fontSize: 24,
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },
  emptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
