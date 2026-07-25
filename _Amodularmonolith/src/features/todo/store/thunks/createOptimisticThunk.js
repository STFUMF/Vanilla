export function createOptimisticThunk({
  optimistic,
  request,
  rollback,
  onError,
}) {
  return async function (dispatch) {
    console.log("Dispatch optimistic");
    dispatch(optimistic());
    console.log("Calling request");
    const result = await request();

    console.log("Request finished", result);
    try {
      await request();
    } catch (error) {
      if (rollback) {
        dispatch(rollback());
      }

      dispatch(onError(error));
    }
  };
}
