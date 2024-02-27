// SubmitPage.tsx

import React, { useState } from "react";
import RootLayout from "../app/layout";
import { submitFormData } from "../pages/api/airtableConfig";

const SubmitPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("أدخل إيميل صحيح من فضلك");
      return;
    }

    try {
      await submitFormData(name, email);
      setSuccessMessage("قمت بالاشتراك في النشرة! مبروك");
      setErrorMessage(null);
    } catch (error) {
      console.error("Error creating record:", error);
      setErrorMessage("حدث خطأ، من فضلك حاول مجددًا");
      setSuccessMessage(null);
    }

    setName("");
    setEmail("");
  };

  return (
    <RootLayout>
      <div className="container mx-auto mt-10 text-right">
        <br />
        <br />
        <h1 className="text-3xl font-bold mb-5 text-right">سجل بياناتك لتصلك آخر الفرص والأخبار</h1>

       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2">
        <span style={{ color: "#0d9488" }}>الاسم (غير ضروري):</span>
       </label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full text-right"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
            <span style={{ color: "#0d9488" }}>الإيميل:</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full text-right"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="bg-green-600 text-white p-2 rounded-md hover:bg-green-800 text-right"
          onClick={handleSubmit}
        >
          تسجيل
        </button>

        {successMessage && <div className="text-green-600 mt-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
      </div>
    </RootLayout>
  );
};

export default SubmitPage;
