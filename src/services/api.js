// API service for handling backend communication
const API_BASE_URL = "http://localhost:8000/api";

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic fetch method with error handling
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Sales data methods
  async getSalesData() {
    return this.request("/sales/");
  }

  async createSalesData(data) {
    return this.request("/sales/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async updateSalesData(id, data) {
    return this.request(`/sales/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async deleteSalesData(id) {
    return this.request(`/sales/${id}/`, {
      method: "DELETE",
    });
  }

  // Bulk upload method for Excel data
  async bulkUploadSalesData(dataArray) {
    return this.request("/sales/bulk/", {
      method: "POST",
      body: JSON.stringify({ data: dataArray }),
    });
  }

  // Health check method
  async healthCheck() {
    try {
      const response = await fetch(`${this.baseURL}/health/`);
      return response.ok;
    } catch (error) {
      return false;
    }
  }
}

export default new ApiService();
