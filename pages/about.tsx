import React from "react";
import RootLayout from "../app/layout";

const AboutPage: React.FC = () => {
  return (
    <RootLayout>
      <div className="container mx-auto mt-10">
        <br />
        <br />
        <h1 className="text-3xl font-bold mb-5" style={{ direction: "rtl" }}>من نحن؟</h1>

        <div className="about-container">
          <div className="about-text">
            <div style={{ display: "flex" }}>
              <p className="black-text" style={{ fontSize: "20px", lineHeight: "2", marginTop: 0  }}>
                انطلقنا بدءًا من شرارة هاكاثون الاستثمار، ورأينا احتياج الناس لمنصة تسهل عليهم العثور على جميع منصات وتطبيقات الاستثمار الواعدة، إن لبنة وأساس فريق استثمر هي كل شركة وتطبيق تعاونت معنا لنكون تسهيلًا
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          display: flex;
          justify-content: flex-end; /* Align to the right */
          align-items: center;
          height: 300px; /* Adjust the height as needed */
          padding: 20px;
          background-color: #f5f5f5; /* Set your desired background color */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
          border-radius: 10px; /* Adjust the border radius as needed */
          margin-top: 20px;
        }

        .about-text {
          text-align: right; /* Align text to the right */
        }

        .black-text {
          color: black; /* Set text color to black */
        }
      `}</style>
    </RootLayout>
  );
};

export default AboutPage;
