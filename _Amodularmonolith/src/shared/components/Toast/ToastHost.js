import { component } from "@core/components";
import { Toast } from "./Toast.js";

import { ToastContainer } from "./ToastContainer.js";
import { Stack } from "../LayoutComponent/Stack/Stack.js";
import { Container } from "../LayoutComponent/Container/Container.js";

export function ToastHost({ controller }) {
  console.log("ToastHost controller:", controller);
  const toasts = controller.getToasts();

  return component(Container, {
    className: "toast-host",
    children: toasts.map((toast) =>
      component(Toast, {
        ...toast,

        onClose: () => {
          controller.remove(toast.id);
        },
      }),
    ),
  });
}
