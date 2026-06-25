

import { registerRoute, startRouter } from "./router.js";
import { Skeleton, TodosSkeleton, UserSkeleton } from "./skeleton.js";


const app = document.getElementById('app');

registerRoute("/", async () => ({
  render(container){
    container.innerHTML = `
      <h1>Shell Home</h1>


    `
  }
}));

registerRoute("/todos", () => import("../mfe-todos/todoPage.js"), {
  skeleton: TodosSkeleton
});

registerRoute("/user", () => import("../mfe-user/userPage.js"), {
  skeleton: UserSkeleton
});

startRouter(app);