import { useEffect, useState } from "react";
import { specialOfferFood } from "../Data/branchFoods";

export function useBranchData(id) {
  console.log(id);
  const [value, setValue] = useState([]);
  console.log(value);

  useEffect(() => {
    const filter = specialOfferFood.filter((f) => f.branchID === Number(id));
    setValue(filter);
  }, [id]);


  return {
    value
  }
  
}