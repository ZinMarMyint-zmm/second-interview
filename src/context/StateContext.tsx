import {
  useState,
  createContext,
  useEffect,
  useReducer,
  useContext,
} from "react";
import axios from "axios";
const StateContext = createContext<unknown>(null);

export const StateContextProvider = ({ children } : any) => {
  const [dataList, setDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const initialState = {
    datas: [],
  };

  const reducer = (state :typeof initialState, action : any) => {
    switch (action.type) {
      case "GET_DATAS":
        return { ...state, datas: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getDatas = async () => {
    const { data } = await axios.get("http://localhost:3000/datas");
    setDataList(data);
  };
  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_DATAS", payload: dataList });
  }, [dataList]);

  const data = {
    state,
    dataList,
    setDataList,
    showModal,
    setShowModal,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
