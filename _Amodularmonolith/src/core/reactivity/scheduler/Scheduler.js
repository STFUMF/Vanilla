const queue = new Set();

let pending = false;

function flush() {
  pending = false;

  for (const job of queue) {
    job();
  }
  //  console.log("Flushing", queue.size, "job(s)");
  queue.clear();
}

export const Scheduler = {
  enqueue(job) {
    queue.add(job);
    //  console.log("Queued:", job.name || "anonymous");
    if (pending) {
      return;
    }

    pending = true;

    queueMicrotask(flush);
  },
};
