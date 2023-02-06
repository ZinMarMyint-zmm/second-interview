import greenDown from "../assets/green_down.png";
import searchImg from "../assets/search.png";
import "../index.css";
import Modal from "./Modal";
import { useStateContext } from "../context/StateContext";

const Heading = ({ search, setSearch, filterValue, setFilterValue } : any) => {
  const {
    state:  datas ,
  }: any = useStateContext();

  

  return (
    <div className=" container mx-auto my-5">
      <p className="text-topbar font-semibold">Patient List</p>

      <div className="flex justify-between">
        <div className="">
          <div className="border rounded-full flex items-center justify-between px-4 py-1 mt-5">
            <input
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm text-search outline-none"
              type="text"
              placeholder="Search table"
            />
            <img src={searchImg} className="w-4 h-4" alt="" />
          </div>
          <div className="my-5">
            <select
              className="px-2 border rounded-full text-sm mr-3"
              value={filterValue}
              onChange={(e) => setFilterValue("status", e.target.value)}
            >
              <option value="">Status All</option>
              <option value="allergy">Allergy</option>
              <option value="pickyeater">Picky Eater</option>
            </select>
            <select
              className="px-2 border rounded-full text-sm"
              value={filterValue}
              onChange={(e) => setFilterValue("breed", e.target.value)}
            >
              <option value="">Breed All</option>
              <option value="beagle">Beagle</option>
              <option value="spaniel">Spaniel</option>
              <option value="goldenretriever">Golden Retriever</option>
            </select>
          </div>
        </div>
        <div>
          <Modal/>

          <div className="flex items-center mt-5">
            <p className="mr-2 text-sm">Rows per pages:</p>
            <div className="flex items-center px-2 py-1 border rounded-xl">
              <p className="text-topbar mr-1 text-sm">{datas.length}</p>
              <img src={greenDown} className="w-2 h-2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
