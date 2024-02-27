// airtableConfig.ts

import axios, { AxiosError } from "axios";

interface ErrorResponse {
  message?: string;
  error?: {
    message?: string;
  };
}

const airtableConfig = {
  baseId: "appatKkikW2wRvNNT", // Replace with your actual base ID
  personalAccessToken:
    "patKYDT77ypyuphtW.3188c8d2330ccbb5cefcd9eb640799825e2fac978d268dd684030b54ede98e97", // Replace with your actual personal access token
  tableName: "Subscribers",
};

export const submitFormData = async (
  name: string,
  email: string
): Promise<void> => {
  try {
    await axios.post(
      `https://api.airtable.com/v0/${airtableConfig.baseId}/${airtableConfig.tableName}`,
      {
        fields: {
          Name: name,
          Email: email,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${airtableConfig.personalAccessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating record:", error);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response?.data) {
        console.error("Airtable API Response:", axiosError.response.data);
        const errorMessage =
          axiosError.response.data.error?.message ||
          axiosError.response.data.message;
        throw new Error(errorMessage || "Unknown error");
      } else {
        throw new Error("Error adding information. Please try again.");
      }
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export default airtableConfig;
