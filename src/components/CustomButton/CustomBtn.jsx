import React from 'react'

const CustomBtn = ({title,onClickFn}) => {
  return (
    <div className=' bg-white rounded-md mt-2  flex flex-row items-center text-center justify-center p-2 w-28 m-auto  xl:flex xl:flex-row xl:justify-center'>
    <button
      type="button"
      className="  xl:bg-white xl:p-2 xl:m-2 xl:rounded-md xl:hover:bg-blue-200 xl:w-24 xl:flex xl:flex-row xl:justify-center"
      onClick={onClickFn}
    >
      {title}
    </button>
  </div>  )
}

export default CustomBtn