import { categoriesName } from "../../../store/categories/categories.type";
import CategoryTab from "./category-tab/CategoryTab";
import styles from "./FiltersCategory.module.scss";

const FiltersCategory = () => {
  return (
    <div className={styles.filter_category}>
      <CategoryTab text={"모두"} categoryName={categoriesName.All} />
      <CategoryTab
        text={"전자기기"}
        categoryName={categoriesName.Electronics}
      />
      <CategoryTab text={"쥬얼리"} categoryName={categoriesName.Jewelry} />
      <CategoryTab
        text={"남성의류"}
        categoryName={categoriesName.MensClothing}
      />
      <CategoryTab
        text={"여성의류"}
        categoryName={categoriesName.WomensClothing}
      />
    </div>
  );
};

export default FiltersCategory;
