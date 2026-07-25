import "./TextArea.css";
import { element } from "@core/renderer";

/**
 * Shared input component.
 *
 * @param {object} props
 * @returns {object}
 */
export function TextArea({
  value = "",
  placeholder = "",
  rows = 6,
  disabled = false,
  onInput,
}) {
  return element("textarea", {
    class: "-textarea",
    value,
    rows,
    placeholder,
    disabled,
    onInput,
  });
}
