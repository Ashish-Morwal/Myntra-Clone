import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../Store/ItemsSlice";
import { fetchStatusActions } from "../Store/fetchStatusSlice";

const baseURL = "https://myntra-clone-vpdq.onrender.com/items";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStarted());
    fetch(baseURL, { signal }) // Corrected this line
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      })
      .catch((error) => {
        // Handle errors, such as fetch being aborted
        console.error("Fetch error: ", error);
        dispatch(fetchStatusActions.markFetchFinished()); // To ensure the state is updated
      });

    return () => {
      controller.abort(); // This will abort the fetch when the component unmounts
    };
  }, [fetchStatus, dispatch]); // Added `dispatch` to dependencies

  return <></>;
};

export default FetchItems;
