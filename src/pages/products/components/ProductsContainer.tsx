import { useMemo, useState } from "react";
import { ProductsContainerPropsType } from "@src/types";
import ProductCard from "./ProductCard";
import ProductRow from "./ProductRow";
import GridIcon from "@assets/grid_view_blue.svg";
import ListIcon from "@assets/list_blue.svg";
import ArrowIcon from "@assets/arrow_downward_blue.svg";
import ArrowIconUp from "@assets/arrow_upward_blue.svg";

export default function ProductsContainer({
  data,
}: ProductsContainerPropsType) {
  const [isListView, setIsListView] = useState<Boolean>(false);
  const [isAsc, setIsAsc] = useState<Boolean>(false);

  const sortedData = useMemo(() => {
    if (!data) return undefined;
    return [...data].sort((a, b) =>
      isAsc ? a.price - b.price : b.price - a.price
    );
  }, [data, isAsc]);

  if (!data || data?.length === 0) {
    return (
      <div className="flex items-center justify-around h-full">
        <div>No Data to Show</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-2 justify-end pb-8 items-center">
        <button
          className="cursor-pointer"
          onClick={() => setIsListView(!isListView)}
          title="Toggle View"
        >
          {isListView ? (
            <img src={ListIcon} alt="ListIcon" width={16} />
          ) : (
            <img src={GridIcon} alt="GridIcon" width={16} />
          )}
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setIsAsc(!isAsc)}
          title="Sort by Price"
        >
          {isAsc ? (
            <img src={ArrowIconUp} alt="ArrowIconUp" width={16} />
          ) : (
            <img src={ArrowIcon} alt="ArrowIcon" width={16} />
          )}
        </button>
      </div>

      {isListView && (
        <ul className="flex flex-wrap pb-8 flex-col gap-8">
          {sortedData?.map((row) => (
            <ProductRow {...row} key={row.id} />
          ))}
        </ul>
      )}

      {!isListView && (
        <ul className="grid gap-y-12 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedData?.map((row) => (
            <ProductCard {...row} key={row.id} />
          ))}
        </ul>
      )}
    </>
  );
}
