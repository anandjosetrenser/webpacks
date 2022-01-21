export default function CategoryTags(props: {
  Items: {
    id: string;
    name: string;
  }[];
  selectedItems: string[];
  catType: string;
  handleTagClick: (a: string, b: number | string, c: string[]) => void;
}) {
  return (
    <div className="item-tag-disply">
      {props.Items.map((tagItem: { id: string; name: string }) => (
        <span
          key={tagItem.id}
          onClick={(e) => {
            props.handleTagClick(
              props.catType,
              tagItem.id,
              props.selectedItems
            );
          }}
          className={
            "tag" +
            (props.selectedItems.find((id: string) => {
              return id === tagItem.id;
            })
              ? " active"
              : "")
          }
        >
          {tagItem.name}
        </span>
      ))}
    </div>
  );
}
