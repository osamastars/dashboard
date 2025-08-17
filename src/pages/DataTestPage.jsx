import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import ApiService from "../services/api";
import { downloadSampleExcel, exportDataToExcel } from "../utils/excelUtils";

const DataTestPage = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [backendConnected, setBackendConnected] = useState(false);

  // Check backend connection
  const checkBackendConnection = async () => {
    try {
      const isConnected = await ApiService.healthCheck();
      setBackendConnected(isConnected);
      return isConnected;
    } catch (error) {
      setBackendConnected(false);
      return false;
    }
  };

  // Fetch data from Django backend
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await ApiService.getSalesData();
      setTableData(Array.isArray(data) ? data : []);
      setSuccess("Data fetched successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(`Failed to fetch data: ${error.message}`);
      setTableData([]);
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    const initializePage = async () => {
      await checkBackendConnection();
      // Only fetch data if backend is connected
      if (backendConnected) {
        fetchData();
      }
    };
    initializePage();
  }, []);

  // Handle Excel file upload
  const handleFileUpload = (event) => {
    setError(null);
    setSuccess(null);
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Map Excel data to match our sales data structure
        const formattedData = jsonData.map((row, index) => ({
          saleid: row["Sale ID"] || row["saleid"] || index + 1,
          customername: row["Customer Name"] || row["customername"] || "",
          product: row["Product"] || row["product"] || "",
          quantity: row["Quantity"] || row["quantity"] || 0,
          saledate: row["Sale Date"] || row["saledate"] || "",
          message: row["Message"] || row["message"] || "",
        }));

        setTableData(formattedData);
        setSuccess(
          `Successfully loaded ${formattedData.length} records from Excel file!`
        );
        setTimeout(() => setSuccess(null), 3000);
      } catch (error) {
        console.error("Error reading Excel file:", error);
        setError("Failed to read Excel file. Please check the file format.");
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // Send data to Django backend
  const sendDataToBackend = async () => {
    if (!backendConnected) {
      setError(
        "Backend is not connected. Please check if the Django server is running."
      );
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await ApiService.bulkUploadSalesData(tableData);
      setSuccess("Data sent successfully to backend!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error("Error sending data:", error);
      setError(`Failed to send data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Clear all data
  const clearData = () => {
    setTableData([]);
    setError(null);
    setSuccess(null);
  };

  // Retry backend connection
  const retryConnection = async () => {
    setLoading(true);
    await checkBackendConnection();
    if (backendConnected) {
      await fetchData();
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Data Test Page</h1>

      {/* Backend Connection Status */}
      <div className="mb-4 p-4 rounded-lg border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${
                backendConnected ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span className="font-medium">
              Backend Status: {backendConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
          {!backendConnected && (
            <button
              onClick={retryConnection}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              disabled={loading}
            >
              Retry Connection
            </button>
          )}
        </div>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Controls */}
      <div className="mb-6 flex gap-4 flex-wrap">
        <button
          onClick={fetchData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading || !backendConnected}
        >
          {loading ? "Loading..." : "Fetch Data"}
        </button>

        <label className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer disabled:bg-gray-400">
          Upload Excel File
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileUpload}
            className="hidden"
            disabled={loading}
          />
        </label>

        <button
          onClick={sendDataToBackend}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-400"
          disabled={tableData.length === 0 || loading || !backendConnected}
        >
          Send to Backend
        </button>

        <button
          onClick={clearData}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
          disabled={loading}
        >
          Clear Data
        </button>

        <button
          onClick={downloadSampleExcel}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Download Template
        </button>

        <button
          onClick={() => exportDataToExcel(tableData)}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:bg-gray-400"
          disabled={tableData.length === 0}
        >
          Export to Excel
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">
            Sales Data ({tableData.length} records)
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sale ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sale Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                tableData.map((row, index) => (
                  <tr key={row.saleid || index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.saleid}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.customername}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.saledate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs truncate">
                      {row.message}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTestPage;
