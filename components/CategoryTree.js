import CategoryNode from "./CategoryNode"

const CategoryTree = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="pl-5">
          <CategoryNode category={category} />
        </div>
      ))}
    </>
  )
}

export default CategoryTree
