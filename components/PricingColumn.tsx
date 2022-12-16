import React from "react";

type Props = {
  header: string;
  cells: string[];
  price: number;
};

export default function PricingColumn({ header, cells, price }: Props) {
  return (
    <div className="flex flex-col gap-5 items-center px-10 lg: px-0">
      <h3 className=" text-center lg:h-20 text-lg">{header}</h3>
	  <div className="w-full h-0.5 bg-yellow"></div>
	  <div className="h-10"></div>
      <h4 className="text-sm h-5">Desde ${price.toLocaleString('en-us')} MXN</h4>
	  {cells.map((cell) => (
        <div className="font-sourceCode rounded-md shadow-sm px-2 grid place-content-center w-full border-2 text-center font-light text-xs h-24 hover:bg-orange cursor-pointer hover:text-white transition-all" key={cells.indexOf(cell)}>{cell}</div>
      ))}
    </div>
  );
}
