import React from "react";
import "react-toastify/dist/ReactToastify.css";
const CustomBtn = ({ title, onClickFn }) => {

    return (
        <div className=" bg-white rounded-md flex flex-row items-center text-center justify-center m-auto xl:flex xl:flex-row xl:justify-center  xl:p-2 xl:hover:bg-blue-200 ">
            <button
                type="button"
                className="   xl:rounded-md  xl:flex xl:flex-row xl:justify-center"
                onClick={onClickFn}
            >
                {title}
            </button>
        </div>
    );
};

export default CustomBtn;
