import { useEffect } from "react";

export default function Child() {
  useEffect(() => {
    console.log("Child component mounted");

    return () => {
      console.log("Child component unmounted");
    };
  }, []);

  return (
    <div style={{ width: '300px', height: "300px", border: "2px solid black" }}></div>
  );
}
