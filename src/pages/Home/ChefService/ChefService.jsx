import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img src={chefService} alt="" className="" />
      <div className="absolute grid justify-center items-center bg-white p-4 w-[1000px] h-36">
        <h2 className="text-center">BISTRO BOSS</h2>
        <p className="text-black text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque sed cupiditate possimus, recusandae molestias inventore ad. Reiciendis unde ab soluta dolore sed deserunt doloremque repellendus assumenda aliquid, quis voluptas. In quibusdam rerum dolor deserunt excepturi! Laboriosam assumenda repellat qui odit!
        </p>
      </div>
    </div>
  );
};

export default ChefService;
