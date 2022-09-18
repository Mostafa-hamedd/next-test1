import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';

function ProductSearch({productsData , setSelectedProduct,categoryData}) {
  const [categoriesOptions, setCategoriesOptions] = useState()
  const [categoriesSelect, setCategoriesSelect] = useState("")
  const [productsSelect, setProductsSelect] = useState("")
  const [categoryProducts, setCategoryProducts] = useState()
  const [productsOptions, setProductsOptions] = useState()
  const [search, setSearch] = useState('')
  // const [recipesOptions, setRecipesOptions] = useState()
  const [search, setSearch] = useState("")
 
  const productRef = useRef() 

//to fill category options
useEffect(() => {
  let categories = []
  categoryData?.map((category, index) => {
      categories.push({
          label: category.name,
          value: category.slug,
      })
  })
  setCategoriesOptions(categories)
}, [categoryData])

  //category function
  const categoryHandler = (categoryOption) => {
    productRef.current.clearValue()
    setCategoriesSelect(categoryOption)
    // setCategoryError(false)
    let products = []
    categoryData?.map((category, index) => {
        if (categoryOption == category.slug) {
            products.push(category.products)
        }
    })
    setCategoryProducts(...products)
    setSelectedProduct(...products)
}


  //to fill products options
  useEffect(() => {
    let productsSelect = [];
    categoryProducts?.map((pro, index) => {
        productsSelect.push({
            label: pro.name,
            value: pro.slug,
        })
    })
    setProductsOptions(productsSelect)
}, [categoryProducts])
 
  // }, [productsSelect,productsData])

  const searchProducts = (option) => {
    setProductsSelect(option) 
    const selectedProduct=productsData.find(pro=>pro.slug==option)
    console.log(selectedProduct)
    setSelectedProduct([selectedProduct])
  }

  //search input

  const searchInput = (e) => {
    setSearch(e.target.value)
    console.log(search);
    productsData.find(item => {
      if(search === ""){
        return item;
      }else{
        item.name.toLowerCase().includes(search.toLowerCase())
        return item;
      }
    })
  }

  return ( 
    <>
      <div className="search-box product-search"> 
        <div className="search-input-group">
          <Select
            options={categoriesOptions}
            onChange={(e) => {categoryHandler(e.value) }}
            placeholder="select category" 
          />
        </div>

        <div className="search-input-group">
          <Select
            ref={productRef}
            options={productsOptions}
            onChange={(e) =>
              //  { setProductsSelect(e?.value)  }
              searchProducts(e?.value)
              }
            placeholder="select product" 
          />
        </div>  
      </div>
    </> 
  );
}

export default ProductSearch;

// import { useEffect, useRef, useState } from 'react';
// import Select from 'react-select';

// function ProductSearch({productsData , setSelectedProduct,categoryData}) {
//   const [categoriesOptions, setCategoriesOptions] = useState()
//   const [categoriesSelect, setCategoriesSelect] = useState("")
//   const [productsSelect, setProductsSelect] = useState("")
//   const [categoryProducts, setCategoryProducts] = useState()
//   const [productsOptions, setProductsOptions] = useState()
//   const [recipesOptions, setRecipesOptions] = useState()
 
//   const productRef = useRef() 

// //to fill category options
// useEffect(() => {
//   let categories = []
//   categoryData?.map((category, index) => {
//       categories.push({
//           label: category.name,
//           value: category.slug,
//       })
//   })
//   setCategoriesOptions(categories)
// }, [categoryData])

//   //category function
//   const categoryHandler = (categoryOption) => {
//     productRef.current.clearValue()
//     setCategoriesSelect(categoryOption)
//     // setCategoryError(false)
//     let products = []
//     categoryData?.map((category, index) => {
//         if (categoryOption == category.slug) {
//             products.push(category.products)
//         }
//     })
//     setCategoryProducts(...products)
// }


//   //to fill products options
//   useEffect(() => {
//     let productsSelect = [];
//     categoryProducts?.map((pro, index) => {
//         productsSelect.push({
//             label: pro.name,
//             value: pro.slug,
//         })
//     })
//     setProductsOptions(productsSelect)
// }, [categoryProducts])

//   //to fill recipe options
//   // useEffect(() => {
//   //     let recipesSelect = [];
//   //     productsData?.map((pro, index) => {
//   //     pro.slug == productsSelect &&
//   //         pro.recipes.map(recipe => {
//   //             recipesSelect.push({
//   //                 label: recipe.name,
//   //                 value: recipe.slug,
//   //             })
//   //         }) 
//   //     })
//   //     setRecipesOptions(recipesSelect)
//   // }, [productsSelect,productsData])

//   const searchProducts = () => {
//     const selectedProduct=productsData.find(pro=>pro.slug==productsSelect)
//     console.log(selectedProduct)
//     setSelectedProduct([selectedProduct])
//   }

//   return ( 
//     <>
//       <div className="search-box product-search">

//         <div className="search-input-group">
//           <Select
//             options={categoriesOptions}
//             onChange={(e) => {categoryHandler(e.value) }}
//             placeholder="select category" 
//           />
//         </div>

//         <div className="search-input-group">
//           <Select
//             ref={productRef}
//             options={productsOptions}
//             onChange={(e) =>
//                { setProductsSelect(e?.value) }
               
//               }
//             placeholder="select product" 
//           />
//         </div>

//         <button  onClick={()=> searchProducts()} type="submit">search</button>
//       </div>
//     </> 
//   );
// }

// export default ProductSearch;