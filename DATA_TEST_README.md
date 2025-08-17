# Data Test Page - Frontend Setup

## Overview

The Data Test Page is designed to test the connection between the frontend and backend, allowing users to:

- View backend connection status
- Fetch data from the Django backend
- Upload Excel files and parse them
- Send data to the backend
- Export data to Excel format
- Download a sample Excel template

## Features

### 1. Backend Connection Status

- Real-time connection indicator (green = connected, red = disconnected)
- Retry connection button when disconnected
- Automatic connection check on page load

### 2. Data Operations

- **Fetch Data**: Retrieves sales data from the Django backend
- **Upload Excel**: Parse Excel files (.xlsx, .xls) and load data into the table
- **Send to Backend**: Upload current table data to the Django backend
- **Clear Data**: Remove all data from the current table
- **Download Template**: Download a sample Excel file with the correct format
- **Export to Excel**: Export current table data to an Excel file

### 3. Error Handling

- Success/error message display
- Loading states for all operations
- Graceful handling of backend connection issues

## File Structure

```
frontend/src/
├── pages/
│   └── DataTestPage.jsx          # Main data test page component
├── services/
│   └── api.js                    # API service for backend communication
└── utils/
    └── excelUtils.js            # Excel import/export utilities
```

## Expected Excel Format

The Excel file should have the following columns:

- Sale ID
- Customer Name
- Product
- Quantity
- Sale Date
- Message

## API Endpoints Expected

The frontend expects these Django backend endpoints:

- `GET /api/sales/` - Fetch all sales data
- `POST /api/sales/bulk/` - Bulk upload sales data
- `GET /api/health/` - Health check endpoint

## Usage Instructions

1. **Start the Frontend Server**:

   ```bash
   cd frontend
   npm run dev
   ```

   The server will run on `http://localhost:5173/`

2. **Access the Data Test Page**:
   Navigate to `http://localhost:5173/data-test`

3. **Test the Connection**:

   - Check the backend status indicator
   - Use "Retry Connection" if needed

4. **Upload Excel Data**:

   - Click "Download Template" to get a sample file
   - Modify the template with your data
   - Use "Upload Excel File" to load the data

5. **Send Data to Backend**:
   - Ensure backend is connected
   - Click "Send to Backend" to upload data

## Next Steps

When the Django backend is ready:

1. Ensure CORS is configured properly
2. Create the required API endpoints
3. Test the full integration
4. Add authentication if needed

## Dependencies

- React
- XLSX library for Excel handling
- Tailwind CSS for styling
- Custom API service for backend communication
