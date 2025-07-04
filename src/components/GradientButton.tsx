const GradientBtn = ({ children, onClick }) => (
  <button
    className="bg-gradient px-4 py-2 rounded-xl backdrop-blur-md text-purple-100 ring-1 ring-purple-300/30 hover:scale-[1.04] shadow-md  cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
);

export default GradientBtn;
