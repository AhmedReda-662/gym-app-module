import { useState } from "react";

function useControllers() {
  const [micOpen, setMicOpen] = useState(true);
  const [camOpen, setCamOpen] = useState(true);

  return { micOpen, setMicOpen, camOpen, setCamOpen };
}

export default useControllers;
