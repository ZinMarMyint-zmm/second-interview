import axios from "axios";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { TableContext } from "../Table/DataTable";

const EditModal = () => {
  const {
    state: { datas },
    setDataList,
  } : any = useStateContext();
  const [
    ,
    setShowEditModal,
    petName,
    setPetName,
    pawRent,
    setPawrent,
    phno,
    setPhno,
    date,
    setDate,
    address,
    setAddress,
    gender,
    setGender,
    status,
    setStatus,
    breed,
    setBreed,
    editId,
  ]: any = useContext(TableContext);

  const handleUpdate = (e : any) => {
    e.preventDefault();
    const newData = {
      id: editId,
      petName,
      pawRent,
      phno,
      date,
      address,
      gender,
      status,
      breed,
    };

    const newList = datas.map((p:any) => {
      if (p.id === editId) {
        p = { ...newData };
        return p;
      }
      return p;
    });
    setDataList([...newList]);
    axios.put(`http://localhost:3000/datas/${editId}`, newData);
    setShowEditModal(false);
  };
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto">
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <button
              onClick={() => setShowEditModal(false)}
              className="mt-5 pr-3 ml-auto bg-transparent border-0 text-black float-right text-lg leading-none font-semibold outline-none focus:outline-none"
            >
              <AiOutlineClose />
            </button>
            <div className="pt-1">
              <h3 className="text-lg text-center text-topbar font-semibold">
                Add new patient
              </h3>
              <p className="text-center text-xs">
                Enter new patient information below
              </p>
            </div>

            <form className="text-xs mx-5">
              <div className="columns-2">
                <div className="mb-3">
                  <label htmlFor="">Pet Name</label>
                  <br />
                  <input
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    type="text"
                    className="border w-[180px] h-6 border-topbar"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="">Pawrent</label>
                  <br />
                  <input
                    value={pawRent}
                    onChange={(e) => setPawrent(e.target.value)}
                    type="text"
                    className="border w-[180px] h-6 border-topbar"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="">Gender</label>
                  <br />
                  <select
                    className="border w-[180px] h-6 border-topbar"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="">Contact Phone No.</label>
                  <br />
                  <input
                    value={phno}
                    onChange={(e) => setPhno(e.target.value)}
                    type="text"
                    className="border w-[180px] h-6 border-topbar"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="">Status</label>
                  <br />
                  <select
                    className="border w-[180px] h-6 border-topbar"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="default">Select choose status</option>
                    <option value="allergy">Allergy</option>
                    <option value="pickyeater">PickyEater</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="">Breed</label>
                  <br />
                  <select
                    className="border w-[180px] h-6 border-topbar"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                  >
                    <option value="default">please choose status</option>
                    <option value="beagle">Beagle</option>
                    <option value="spaniel">Spaniel</option>
                    <option value="goldenretriever">Golden Retriever</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="">Date of Birth</label>
                  <br />
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="border w-[180px] h-6 border-topbar"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="">Address</label>
                  <br />
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="border w-[180px] h-6 border-topbar"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center p-6 rounded-b">
                <button
                  onClick={handleUpdate}
                  className="bg-topbar text-white text-sm px-5 py-2 mr-3 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Update
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="text-sm px-5 py-2 rounded border ease-linear transition-all duration-150"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
