import { component } from "@core/components";

import { Badge } from "../../../shared/components";

export function CategoryBadge({ category }) {
  return component(Badge, {
    text: category,
    variant: category,
  });
}
