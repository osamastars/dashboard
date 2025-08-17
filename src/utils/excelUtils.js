import * as XLSX from "xlsx";

export const downloadSampleExcel = () => {
  // Sample data for the Excel template
  const sampleData = [
    {
      "Sale ID": 1,
      "Customer Name": "John Doe",
      Product: "Laptop",
      Quantity: 2,
      "Sale Date": "2025-01-15",
      Message: "Bulk order for office",
    },
    {
      "Sale ID": 2,
      "Customer Name": "Jane Smith",
      Product: "Mouse",
      Quantity: 5,
      "Sale Date": "2025-01-16",
      Message: "Wireless mouse set",
    },
    {
      "Sale ID": 3,
      "Customer Name": "Bob Johnson",
      Product: "Keyboard",
      Quantity: 3,
      "Sale Date": "2025-01-17",
      Message: "Mechanical keyboards",
    },
  ];

  // Create a new workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(sampleData);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Data");

  // Generate and download the file
  XLSX.writeFile(workbook, "sales_data_template.xlsx");
};

export const exportDataToExcel = (data, filename = "sales_data.xlsx") => {
  if (!data || data.length === 0) {
    alert("No data to export");
    return;
  }

  // Convert data to Excel format
  const excelData = data.map((item) => ({
    "Sale ID": item.saleid,
    "Customer Name": item.customername,
    Product: item.product,
    Quantity: item.quantity,
    "Sale Date": item.saledate,
    Message: item.message,
  }));

  // Create workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Data");

  // Download the file
  XLSX.writeFile(workbook, filename);
};
