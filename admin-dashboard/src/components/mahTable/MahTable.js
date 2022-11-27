import React, { useState } from "react";
import "./mahTable.css";
import Pagination from "../../components/pagination/Pagination";

import Select from "react-select";
import { Oval } from "react-loader-spinner";

function MahTable({
  data,
  page,
  perPage,
  setPerPage,
  setPage,
  isFetching,
  fields,
  values,
}) {
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

  return (
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
          {fields.map((el, i) => (
            <th className="trstyle" key={i}>
              {el}
            </th>
          ))}

          <th className="trstyle">Edit</th>
          <th className="trstyle">Delete</th>
        </tr>
        {data.data.map((el, index) => (
          <tr className="rowtbl" style={rowStyle(index)}>
            {values.map((val, i) => (
              <td key={i} className="tdstyle">
                {!val.nested ? el?.[val.key] : el?.[val.key1]?.[val.key2]}
              </td>
            ))}

            <td className="tdstyle">Edit</td>
            <td className="tdstyle">Delete</td>
          </tr>
        ))}
      </table>

      {(data.total > 5) && (
        <div className="filterpagination">
          <div style={{ width: "100px" }}>
            <Select
              isSearchable={false}
              defaultValue={{ label: perPage, value: perPage }}
              onChange={(el) => {
                if (page > Math.ceil(data.total / el.value) - 1) {
                  setPerPage(el.value);
                  setPage(Math.ceil(data.total / el.value) - 1);
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
            totalCount={data.total}
            pageSize={perPage}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      )}
    </div>
  );
}

export default MahTable;
