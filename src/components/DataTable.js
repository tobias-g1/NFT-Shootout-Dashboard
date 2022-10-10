import { useEffect } from "react";
import DataTable from "datatables.net-responsive-dt";

export const ResponsiveDataTable = ({ children, notSortableColumns = [], lengthChange=false }) => {
  useEffect(() => {
    let table = new DataTable("#dataTable", {
      columnDefs: [
        {
          targets: notSortableColumns,
          orderable: false,
          orderData: notSortableColumns,
        },
      ],
      responsive: true,
      searching: false,
      lengthChange: lengthChange,
      dom: "rtip",
      paging: true,
    });
    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div>
      <table id="dataTable" className="nowrap collapsed" width="100%">
        {children}
      </table>
    </div>
  );
};
