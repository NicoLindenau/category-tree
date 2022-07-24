import { useContext } from "react"
import { CategoryContext } from "../pages/_app"
import CategoryTree from "../components/CategoryTree"
import NewCategory from "../components/NewCategory"

const Home = () => {
  const { categories } = useContext(CategoryContext)

  return (
    <div className="h-screen bg-gray-100 pt-4">
      <NewCategory />
      <CategoryTree categories={categories} />
    </div>
  )
}

export default Home
