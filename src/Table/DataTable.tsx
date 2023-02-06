import { createContext, useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import { useStateContext } from "../context/StateContext";
type TableContextType = any;
export const TableContext = createContext<TableContextType>(null);
import MoreModal from "../components/MoreModal";
import EditModal from "../components/EditModal";
import { format } from "date-fns";
import Heading from "../components/Heading";

const DataTable = () => {
  const {
    state: { datas },
  } : any = useStateContext();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const [petName, setPetName] = useState<string>("");
  const [pawRent, setPawrent] = useState<string>("");
  const [phno, setPhno] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [gender, setGender] = useState<string>("default");
  const [status, setStatus] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [editId, setEditId] = useState(null);

  const COLUMNS:any = [
    {
      Header: "#",
      accessor: "",
    },
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Pet Name",
      accessor: "petName",
    },
    {
      Header: "Pawrent",
      accessor: "pawRent",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Breed",
      accessor: "breed",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Date",
      accessor: "date",
      Cell: ({ value } : any) => {
        return format(new Date(value), "dd/MM/yyyy");
      },
    },
    {
      Header: "Phone",
      accessor: "phno",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "actions",
      Cell: ({ row }: any) => <MoreModal id={row.original.id} />,
    },
  ];

  const columns = useMemo(() => COLUMNS, [datas]);
  const data = useMemo(() => {
    return [...datas];
  }, [datas]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters
  );

  const {
    state,
    setGlobalFilter,
    setFilter,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } : any = tableInstance;

  const { globalFilter } = state;


  return (
    <div>
      <Heading
        search={globalFilter}
        setSearch={setGlobalFilter}
        setFilterValue={setFilter}
      />
      <TableContext.Provider
          value={[
              showEditModal,
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
              setEditId
  ]}
      >
        <table
          {...getTableProps()}
          className="table-auto w-full text-sm text-left px-3"
        >
          <thead className="text-sm font-semibold text-topbar">
            {headerGroups.map((headerGroup : any) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="border-y">
                {headerGroup.headers.map((column : any) => (
                  <th {...column.getHeaderProps()} className="px-2 py-3">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-sm text-black">
            {rows.map((row : any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-b">
                  {row.cells.map((cell : any) => {
                    return (
                      <td {...cell.getCellProps()} className="px-1 py-3">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                  {showEditModal && <EditModal />}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContext.Provider>
    </div>
  );
};

export default DataTable;
