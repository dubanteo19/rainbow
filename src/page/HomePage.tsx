import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-2 ">
      <h2 className="">Minh bu</h2>
    </div>
  );
};
