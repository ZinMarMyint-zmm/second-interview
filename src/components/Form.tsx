import Swal from "sweetalert2";
import axios from "axios";
import React, { useContext } from "react";
import {v4} from "uuid";
import { useState } from "react";
import { useStateContext } from "../context/StateContext";

const Form = ({ onClose } : any) => {
  const [petName, setPetName] = useState("");
  const [pawRent, setPawrent] = useState("");
  const [phno, setPhno] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("default");
  const [status, setStatus] = useState("default");
  const [breed, setBreed] = useState("default");
  const {
    state: { datas },
    setDataList,
  }: any = useStateContext();

  const handleSave = (e : React.SyntheticEvent) => {
    e.preventDefault();
    const data : any = {};
    data.id = v4().substring(0, 2);
    console.log(data.id);
    data.petName = petName;
    data.pawRent = pawRent;
    data.phno = phno;
    data.date = date;
    data.address = address;
    data.gender = gender;
    data.status = status;
    data.breed = breed;
    setDataList((datas : any) =>[...datas, data]);
    axios.post("http://localhost:3000/datas", data);
    Swal.fire("Inserted Successfully", onClose());
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className="relative p-6 flex-auto">
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
                <option value="default"></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                <option value="">Select choose status</option>
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
                <option value="">please choose status</option>
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
              className="bg-topbar text-white text-sm px-5 py-2 mr-3 ease-linear transition-all duration-150"
              type="submit"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              onClick={handleClose}
              className="text-sm px-5 py-2 rounded border ease-linear transition-all duration-150"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
