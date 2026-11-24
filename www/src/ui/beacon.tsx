/*
The pulsing red dot that marks something live.
*/
const Beacon: React.FC = () => {
  return (
    <div aria-hidden className="flex items-center justify-center relative">
      <div className="beacon-dot absolute bg-brand/90 text-brand w-[5px] h-[5px] rounded-full"></div>
      <div className="beacon-ring-inner absolute border border-brand/50 w-[11px] h-[11px] rounded-full"></div>
      <div className="beacon-ring-outer border border-brand/30 w-[17px] h-[17px] rounded-full"></div>
    </div>
  );
};

export default Beacon;
