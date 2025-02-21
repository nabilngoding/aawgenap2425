import axios from "axios";

export const getTenantService = async (token: string, tenant_id: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8001/api/tenant/${tenant_id}`, // API untuk validasi token
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data; // Harus mengembalikan payload user jika valid
  } catch (error: any) {
    console.error("Failed to validate token:", error.message);
    return { status: 401, message: "Invalid token" };
  }
};