import React from 'react'

const CustomBtn = ({title,onClickFn}) => {
  return (
    <div className='xl:flex xl:flex-row xl:justify-center'>
    <button
      type="button"
      className="xl:bg-white xl:p-2 xl:m-2 xl:rounded-md xl:hover:bg-blue-200 xl:w-24 xl:flex xl:flex-row xl:justify-center"
      onClick={onClickFn}
    >
      {title}
    </button>
  </div>  )
}

export default CustomBtn