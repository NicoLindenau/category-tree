import "/styles.css"
import { createContext, useState } from "react"

export const CategoryContext = createContext()

export default function MyApp({ Component, pageProps }) {
  const [categories, setCategories] = useState([])

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      <Component {...pageProps} />
    </CategoryContext.Provider>
  )
}
