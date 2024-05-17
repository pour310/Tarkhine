
import Input from '../elements/Input'
import { CiSearch } from "react-icons/ci";


function Search({className}) {
  return (
    <div className={className}>
      <Input type="text" className="w-full h-9 outline-none text-[13px] " placeholder="جستجو" />
      <span className='text-[24px] mr-2 cursor-pointer  '><CiSearch /></span>
    </div>
  )
}

export default Search