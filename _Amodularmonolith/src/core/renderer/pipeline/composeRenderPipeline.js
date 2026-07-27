export function composeRenderPipeline(stages) {
  return function (baseRenderer) {
    return stages.reduceRight((next, stage) => stage(next), baseRenderer);
  };
}
