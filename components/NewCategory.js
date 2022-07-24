import { useState, useContext } from "react"
import { CategoryContext } from "../pages/_app"
import { createCategory } from "../lib/CRUD"

const NewCategory = ({ id, setOpenNewCategory }) => {
  const { setCategories } = useContext(CategoryContext)
  const [newCategoryInput, setNewCategoryInput] = useState("")

  const createCategoryHandler = () => {
    const newCategory = {
      id: Date.now(),
      name: newCategoryInput,
      subCategories: []
    }
    if (id === undefined) {
      setCategories((prevCategories) =>
        createCategory(prevCategories, newCategory, "root")
      )
      setNewCategoryInput("")
    } else {
      setCategories((prevCategories) =>
        createCategory(prevCategories, newCategory, id)
      )
      setOpenNewCategory(false)
    }
  }

  return (
    <div className="flex">
      <div className="pl-5 ml-5 my-1 p-2 shadow-md rounded-lg flex items-center bg-white">
        <div className="text-gray-600 mx-1 text-xl font-medium">
          Neue Kategorie:
        </div>
        <input
          className="border-2 border-gray-600 mx-1 p-1 rounded-lg outline-none text-gray-600 focus:bg-gray-100"
          value={newCategoryInput}
          onChange={(e) => setNewCategoryInput(e.target.value)}
        />
        <button
          className="p-1 px-2 mx-1 rounded-lg border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
          onClick={createCategoryHandler}
        >
          Speichern
        </button>
      </div>
    </div>
  )
}

export default NewCategory
