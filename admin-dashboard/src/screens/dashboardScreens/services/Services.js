import React, { useState } from "react";
import "./services.css";
import MahTable from "../../../components/mahTable/MahTable";
import { Oval } from "react-loader-spinner";
import { ReactComponent as Add } from "../../../assets/svg/add.svg";

import { Link } from "react-router-dom";
import { useGetAllServices } from "../../../apis/services/useGetAllServices";
function Services() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const fields = ["#ID", "Name", "Image", "Category"];
  const values = [
    { nested: false, key: "_id" },
    { nested: false, key: "name" },
    { nested: false, key: "image" },
    { nested: true, key1: "serviceCategory", key2: "name" },
  ];
  
  const { isLoading, isError, data, refetch, isFetching } = useGetAllServices(page,perPage);

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
        <MahTable
          page={page}
          isFetching={isFetching}
          setPage={setPage}
          fields={fields}
          values={values}
          perPage={perPage}
          setPerPage={setPerPage}
          data={data.data}
        />
      </div>
    </div>
  );
}

export default Services;
