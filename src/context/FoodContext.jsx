import  {  createContext, useContext, useEffect, useReducer, useState } from 'react'
import {specialOfferFood} from '../Data/branchFoods'
import { foodReduser } from './FoodReduser'
import { useBranchData } from '../Hooks/branchHook'

 const FoodContext = createContext()
 const FoodContextDispatcher = createContext()
 


function FoodProvider({children }) {
  
  const [data , dispatch] = useReducer(foodReduser, specialOfferFood)
 
  return (
    <FoodContext.Provider value={data}>
      <FoodContextDispatcher.Provider value={dispatch}>
        {children}
      </FoodContextDispatcher.Provider>
    </FoodContext.Provider>
  )
}

export default FoodProvider


export const useFood = () => useContext(FoodContext)

export function useFoodAction (){
  return useContext(FoodContextDispatcher)
}