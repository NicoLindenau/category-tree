import { useState, useContext } from "react"
import { deleteCategory, updateCategory } from "../lib/CRUD"
import CategoryTree from "./CategoryTree"
import NewCatgeory from "./NewCategory"
import { CategoryContext } from "../pages/_app"

const CategoryNode = ({ category }) => {
  const [subCategoryVisible, setSubCategoryVisible] = useState(true)
  const [openNewCategory, setOpenNewCategory] = useState(false)
  const [updateInputVisibility, setUpdateInputVisiblity] = useState(false)
  const [updateCategoryInput, setUpdateCategoryInput] = useState(category.name)
  const { setCategories } = useContext(CategoryContext)

  const deleteCategoryHandler = () => {
    setCategories((prev) => deleteCategory(category.id, prev))
  }

  const updateCategoryHandler = () => {
    setCategories((prev) =>
      updateCategory(category.id, prev, updateCategoryInput)
    )
    setUpdateInputVisiblity(false)
  }

  return (
    <div>
      <div className="flex">
        <div className="shadow-md rounded-lg flex items-center my-1 p-2 bg-white">
          {category.subCategories.length !== 0 && (
            <button
              className="border-2 border-gray-600 text-gray-600 rounded-lg px-1 mx-1 hover:text-white hover:bg-gray-600"
              onClick={() => setSubCategoryVisible((prev) => !prev)}
            >
              {subCategoryVisible ? "▲" : "▼"}
            </button>
          )}
          {updateInputVisibility ? (
            <>
              <input
                className="border-2 border-gray-600 mx-1 p-1 rounded-lg outline-none focus:bg-gray-200"
                value={updateCategoryInput}
                onChange={(e) => {
                  setUpdateCategoryInput(e.target.value)
                }}
              />
              <button
                className="border-2 border-gray-600 rounded-lg text-gray-600 hover:bg-gray-600 hover:text-white p-1 mx-1"
                onClick={updateCategoryHandler}
              >
                Speichern
              </button>
            </>
          ) : (
            <div className="mx-1 text-gray-600  text-xl font-medium">
              {category.name}
            </div>
          )}
          {!updateInputVisibility && (
            <button
              className="p-1 px-2 mx-1 rounded-lg border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
              onClick={() => setUpdateInputVisiblity((prev) => !prev)}
            >
              Aktualisieren
            </button>
          )}
          <button
            className="p-1 px-2 mx-1 rounded-lg border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
            onClick={() => setOpenNewCategory((prev) => !prev)}
          >
            Neu
          </button>
          <button
            className="p-1 px-2 mx-1 rounded-lg border-2 text-white border-red-500 bg-red-500 hover:bg-red-700 hover:border-red-700"
            onClick={deleteCategoryHandler}
          >
            Löschen
          </button>
        </div>
      </div>
      {openNewCategory && (
        <NewCatgeory id={category.id} setOpenNewCategory={setOpenNewCategory} />
      )}
      {subCategoryVisible && (
        <CategoryTree categories={category.subCategories} />
      )}
    </div>
  )
}

export default CategoryNode
