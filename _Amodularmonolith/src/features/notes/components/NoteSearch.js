import { element } from "@core/renderer";
import { component } from "@core/components";
import { Input } from "../../../shared/components";

export function NoteSearch({ controller }) {
  return component(Input, {
    value: controller.search,

    placeholder: "Search notes...",

    onInput: (e) => controller.setSearch(e.target.value),
  });
}
