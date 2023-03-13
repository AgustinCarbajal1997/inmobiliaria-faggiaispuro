import React, { useMemo, useRef } from "react";
import { useTable, usePagination } from "react-table";
import styles from "./Table.module.scss";
const Table = ({ classname, columnsFields, dataFields }) => {
  const columns = useMemo(() => columnsFields, [columnsFields]);
  const data = useMemo(() => dataFields, [dataFields]);
  const tableRef = useRef();
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <div className={classname.divTableContainer} ref={tableRef}>
      <table {...getTableProps()} className={classname.table}>
        <thead className={classname.headerTable}>
          {headerGroups.map((headerGroup, idx) => (
            <tr
              key={idx}
              {...headerGroup.getHeaderGroupProps()}
              className={classname.tr}
            >
              {headerGroup.headers.map((column, idx) => (
                <th
                  key={idx}
                  {...column.getHeaderProps()}
                  className={classname.th}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={classname.tbody}>
          {page.map((row, idx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={idx} className={classname.tr}>
                {row.cells.map((cell, idx) => {
                  return (
                    <td
                      key={idx}
                      {...cell.getCellProps()}
                      className={classname.td}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.buttonsContainer}>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Anterior
        </button>
        <span>
          Página{" "}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Table;
