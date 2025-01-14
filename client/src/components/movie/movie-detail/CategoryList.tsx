import { Category } from "../../../interfaces/MoiveDetail";

interface CategoryListProps {
  categories: Category[]; // Mảng các danh mục
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <>
      <ul>
        {categories &&
          categories.map((item, index) => (
            <li className="color-text" key={index}>
              {item.name},
            </li>
          ))}
      </ul>
    </>
  );
};
export default CategoryList;
