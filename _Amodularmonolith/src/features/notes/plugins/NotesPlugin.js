import { createPlugin } from "@core/plugin/createPlugin";
import { NoteRepository } from "../repository/NoteRepository.js";
import { NoteService } from "../services/NoteService.js";
import { createNoteThunks } from "../thunks/createNoteThunks.js";
import { NoteController } from "../controllers/NoteController.js";
import { NotesRoutesPlugin } from "./NotesRoutesPlugin.js";
import { FakeNoteApi } from "../api/FakeNoteApi.js";

export const NotesPlugin = createPlugin({
  name: "notes",

  install({ resolve, register, use }) {
    const storage = resolve("storage");
    const store = resolve("store");
    const events = resolve("events");

    const api = FakeNoteApi(storage);
    const repository = new NoteRepository(api);
    const service = new NoteService(repository);
    const thunks = createNoteThunks(service);

    const controller = new NoteController(store, thunks, service, events);

    register("noteService", service);
    register("noteController", controller);

    controller.loadNotes();

    use(NotesRoutesPlugin);
  },
});
