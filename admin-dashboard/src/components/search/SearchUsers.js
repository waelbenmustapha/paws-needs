import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

function SearchUsers({ keyword, limit, header, setShowSearch }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const context = useAppContext();
  const navigate = useNavigate();

  const filterData = (data) => {
    setFiltered(
      data.filter((val) => {
        if (keyword === "") {
          return null;
        } else if (val.name.toLowerCase().includes(keyword.toLowerCase())) {
          return val;
        }
      })
    );
  };

  const fetchBadges = async () => {
    console.log(" im fetching badges");

    const res = await axios.get(
      "https://mocki.io/v1/e63970a7-53f9-491d-8205-5795f3b5279d"
    );
    setData(res.data);
    filterData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchBadges();
  }, []);

  useEffect(() => {
    filterData(data);
  }, [keyword]);

  return (
    <div>
      <div className="flex flex-nowrap justify-between mb-[10px] px-[10px] items-center">
        <p className="font-bold text-[13px]">{header && "Users"}</p>
        <span
          onClick={() => {
            navigate("/dashboard/users", { state: { data: filtered } });
            setShowSearch(false);
          }}
          className="font-bold hover:cursor-pointer  text-xxs lg:text-tiny underline"
          style={{ color: context.mainColor }}
        >
          {limit && filtered.length > 4 && "See more"}
        </span>
      </div>
      <div className="py-2 px-2 text-center mx-2 text-xs flex gap-[10px] justify-between font-bold whitespace-nowrap">
        <p className="flex-1 min-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden maxSmallPhone:text-[7px] maxPhone:text-[10px]  ">Name</p>
        <p className="flex-1 min-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden maxSmallPhone:text-[7px] maxPhone:text-[10px]  ">Image</p>
        <p className="flex-1 min-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden maxSmallPhone:text-[7px] maxPhone:text-[10px]  ">Email</p>
        <p className="flex-1 min-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden maxSmallPhone:text-[7px] maxPhone:text-[10px]  ">Persona</p>
        <p className="flex-1 min-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden maxSmallPhone:text-[7px] maxPhone:text-[10px]  ">Gender</p>
        <p className="flex-1 min-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden maxSmallPhone:text-[7px] maxPhone:text-[10px] ">Status</p>
      </div>

      {filtered.length === 0 && (
        <p
          style={{ color: context.mainColor }}
          className="text-center p-[10px] font-bold"
        >
          No data to show
        </p>
      )}
      {limit
        ? filtered
            .slice(0, limit)
            .map((el, index) => <ColumnItem key={index} element={el} />)
        : filtered.map((el, index) => <ColumnItem key={index} element={el} />)}
      <div className="w-full h-[3px] my-[10px] border-devider-color border-b-[3px]"></div>
    </div>
  );
}
const ColumnItem = ({ element }) => {
  const context = useAppContext();
  let cc = "";
  if (context.mainColor === "#FFB65E") {
    cc = " hover:bg-primary-two hover:shadow-table-line-hovered-two";
  } else if (context.mainColor === "#6E1946") {
    cc = " hover:bg-primary-three hover:shadow-table-line-hovered-three";
  } else if (context.mainColor === "#0F2837") {
    cc = " hover:bg-primary-four hover:shadow-table-line-hovered-four";
  } else {
    cc = " hover:bg-primary-one hover:shadow-table-line-hovered-one";
  }
  const style =
    "even:bg-table-line-two odd:bg-table-line rounded-[4px] border-none cursor-pointer hover:text-white" +
    cc;
  return (
    <div className={style}>
      <div className="py-2 px-2 text-center mx-2 text-xs flex gap-[10px]  justify-between font-bold whitespace-nowrap">
      <p className="flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden min-w-0 maxPhone:text-[10px] ">
          {element.name}
        </p>
        <div className="flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden min-w-0  maxPhone:text-[10px] flex justify-center ">
          <img src={element.image} className="h-6 w-6 rounded-full" />
        </div>
        <p className="flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden min-w-0 maxPhone:text-[10px] ">
          {element.email}
        </p>
        <p className="flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden min-w-0 maxPhone:text-[10px] ">
          {element.persona}
        </p>
        <p className="flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden min-w-0 maxPhone:text-[10px] ">
          {element.gender}
        </p>
       
        <p className="flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden min-w-0 maxPhone:text-[10px] ">
          {element.status}
        </p>
      </div>
    </div>
  );
};
export default SearchUsers;
