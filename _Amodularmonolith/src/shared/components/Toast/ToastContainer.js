export function ToastContainer({ children }) {
  return {
    type: "element",
    tag: "div",
    props: {
      className: "toast-host",
    },
    children,
  };
}
