import logoImage from "../../assets/logo.png";

const StarsGroupLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logoImage}
        alt="Stars Group Logo"
        className="max-w-full h-auto object-contain"
      />
    </div>
  );
};

export default StarsGroupLogo;
