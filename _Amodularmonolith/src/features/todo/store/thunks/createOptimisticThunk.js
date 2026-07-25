export function createOptimisticThunk({
  optimistic,
  request,
  rollback,
  onError,
}) {
  return async function (dispatch) {
    dispatch(optimistic());

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
