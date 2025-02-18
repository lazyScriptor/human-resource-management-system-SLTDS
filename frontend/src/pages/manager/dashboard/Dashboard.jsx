import React from "react";
import { useNavigate } from "react-router-dom";
import TiltedCard from "../../../reusableComponents/TiltedCard";
import Aurora from "../../../reusableComponents/Aurora";
import documentImage from "../../../assets/documents.jpg";
import dashboardImage from "../../../assets/dashboard.jpg";
import hrImage from "../../../assets/hr.jpg";
import heroBackground from "../../../assets/heroBackground.png";
import ShinyText from "../../../reusableComponents/ShinyText";
import GradientText from "../../../reusableComponents/GradientText";
import sltLogo from "../../../assets/sltlogo.png";
import { useRef } from "react";
import { Button } from "@mui/material";

const Dashboard = () => {
  const targetRef = useRef(null);
  const navigation = useNavigate();
  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ComponentStrip1 handleScroll={handleScroll} />
      <ComponentStrip2 targetRef={targetRef} />
    </>
  );
};

export default Dashboard;

const ComponentStrip2 = ({ targetRef }) => {
  return (
    <>
      {/* <Aurora colorStops={["#06d4f9", "#22ff00", "#00d9ff"]} speed={0.5} /> */}

      <div className="bg-sky-200 py-12" ref={targetRef}>
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 ">
          <TiltedCard
            imageSrc={documentImage}
            altText="Document Album Cover"
            captionText="Document"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text">Document</p>}
          />
          <TiltedCard
            imageSrc={dashboardImage}
            altText="MGT Dashboard Album Cover"
            captionText="MGT Dashboard"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">MGT Dashboard</p>
            }
          />
          <TiltedCard
            imageSrc={hrImage}
            altText="HR System Album Cover"
            captionText="HR System"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text">HR System</p>}
          />

          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Print Ad MGT "
            captionText="Print Ad MGT"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Print Ad MGT </p>
            }
          />
        </div>
      </div>
    </>
  );
};

const ComponentStrip1 = ({ handleScroll }) => {
  return (
    <>
      <div className="h-screen   grid grid-cols-1 md:grid-cols-2 bg-[#eaeef1]">
        <div className="flex custom-container flex-col justify-center items-start gap-8">
          {/* <ShinyText
            text="Just some shiny text!"
            disabled={false}
            speed={3}
            className="custom-class"
          /> */}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={6}
            showBorder={false}
            className="custom-class"
          >
            Empowering People, Elevating Performance
          </GradientText>
          <div className="text-5xl font-semibold space-y-4">
            <h3>Welcome to the </h3>
            <h3>SLTDS </h3>
            {/* <img className="w-40" src={sltLogo} alt="" /> */}
            <h3>Human Resource Management System </h3>
          </div>
          <p className="text-lg font-normal text-gray-500">
            Streamline your HR operations with efficiency and precision. From
            recruitment to payroll, our system ensures seamless management of
            your workforce, enabling growth and innovation." Let me know if you
            need adjustments or a different tone!
          </p>
          <Button onClick={handleScroll}>Get Started</Button>
        </div>
        <div>
          <img src={heroBackground} alt="" />
        </div>
      </div>
    </>
  );
};
