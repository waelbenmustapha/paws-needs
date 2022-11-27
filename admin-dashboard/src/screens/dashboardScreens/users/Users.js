import React, { useState } from "react";
import "./users.css";
import { Oval } from "react-loader-spinner";
import { ReactComponent as Add } from "../../../assets/svg/add.svg";
import Select from "react-select";
import { ReactComponent as Edit } from "../../../assets/svg/edit.svg";
import { ReactComponent as Delete } from "../../../assets/svg/bin.svg";
import { Link } from "react-router-dom";
import { useGetAllUsers } from "../../../apis/users/useGetAllUsers";
import Pagination from "../../../components/pagination/Pagination";
function Users() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const rowStyle = (index) => {
    return {
      backgroundColor: index % 2 == 0 ? "#f2f2f2" : "white",
    };
  };

  const options = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 25, label: 25 },
  ];

  const { isLoading, isError, data, refetch, isFetching } = useGetAllUsers(
    page,
    perPage
  );

  if (isLoading) {
    return (
      <div style={{ position: "relative", height: "70vh", flex: 1 }}>
        <div className="centered">
          <Oval
            heigth="120"
            strokeWidth={6}
            width="120"
            color={"#EB5A3C"}
            secondaryColor={"#FFB65E"}
            ariaLabel="loading"
          />
        </div>
      </div>
    );
  }
  if (isError) {
    return <h2>error happend</h2>;
  }
  return (
    <div className="w-full min-h-screen p-6 2lg:p-14">
      <p className="text-xs mb-2">
        <Link to={"/dashboard/users"}>Users</Link> &gt;
      </p>
      <div className="mb-10 flex flex-row justify-between items-center">
        <p className="font-bold text-tiny lg:text-2xl">All Users</p>
        <div className="flex flex-row flex-nowrap justify-center items-center">
          <Link
            to={"/dashboard/users-add"}
            style={{
              border: `2px solid #EB5A3C`,
              backgroundColor: "#EB5A3C",
            }}
            className="flex h-[44px] p-[7px] flex-row flex-nowrap justify-center items-center rounded-[4px] ml-3 text-white font-bold text-center outline-none"
          >
            <Add className="h-[20px] w-[20px] mr-[10px]" />
            <span className="text-[12px]">Add New User</span>
          </Link>
        </div>
      </div>
      <div className="mt-7">
        <div style={{ position: "relative" }}>
          {isFetching && (
            <div className="centered">
              <Oval
                heigth="120"
                strokeWidth={6}
                width="120"
                color={"#EB5A3C"}
                secondaryColor={"#FFB65E"}
                ariaLabel="loading"
              />
            </div>
          )}
          <table className="tablecontainer">
            <tr
              style={{
                backgroundColor: "#EB5A3C",
                color: "white",
              }}
            >
              <th className="trstyle">#ID </th>
              <th className="trstyle">Name</th>
              <th className="trstyle">Email</th>
              <th className="trstyle">Address</th>
              <th className="trstyle">Picture</th>
              <th className="trstyle">createdAt</th>
              <th className="trstyle">updatedAt</th>
              <th className="trstyle">Edit</th>
              <th className="trstyle">Delete</th>
            </tr>
            {data.data.data.map((el, index) => (
              <tr className="rowtbl" index={index} style={rowStyle(index)}>
                <td  className="tdstyle">{el._id}</td>
                <td className="tdstyle">{el.fullname}</td>
                <td className="tdstyle">{el.email}</td>
                <td className="tdstyle">{el.address.name}</td>
                <td className="tdstyle">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                  />
                </td>
                <td className="tdstyle">
                  {new Date(el.createdAt).toDateString()}
                </td>
                <td className="tdstyle">
                  {new Date(el.updatedAt).toDateString()}
                </td>
                <td className="tdstyle" align="center">
                  <Edit  className="iconhover"/>
                </td>
                <td className="tdstyle" align="center">
                  <Delete  className="iconhover" />
                </td>
              </tr>
            ))}
          </table>

          {data.data.total > 5 && (
            <div className="filterpagination">
              <div style={{ width: "100px" }}>
                <Select
                  isSearchable={false}
                  defaultValue={{ label: perPage, value: perPage }}
                  onChange={(el) => {
                    if (page > Math.ceil(data.data.total / el.value) - 1) {
                      setPerPage(el.value);
                      setPage(Math.ceil(data.data.total / el.value) - 1);
                    } else {
                      setPerPage(el.value);
                    }
                  }}
                  options={options}
                />
              </div>
              <Pagination
                className="pagination-bar"
                currentPage={page}
                totalCount={data.data.total}
                pageSize={perPage}
                onPageChange={(page) => setPage(page)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
