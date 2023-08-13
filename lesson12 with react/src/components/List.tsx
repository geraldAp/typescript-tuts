// generics
import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}
// remember to add the comma after the generic type

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
