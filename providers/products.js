import { v4 as uuid } from 'uuid';

let products = [
    {
        title: "Menstrual Pad Essentials Set: 12 Reusable Cloth Pads for Light, Regular and Heavy or Overnight Flow",
        image: "../images/products/EssentialsSet.png",
        description: "This set makes for a great starter kit or extension to the pads you already own. It's great for postpartum as well!",
        price: 39.99,
        inStock: true,
        categories = ["Menstrual, Complete Sets"],
        brand = "thenco"
    },
    {
        title: "Menstrual Pad Support Set: 4 Large | 8 Regular Reusable Pads",
        image: "../images/products/SupportSet.jpg",
        description: "This set makes for a great starter kit or extension to the pads you already own. It's great for postpartum as well!",
        price: 39.99,
        inStock: true,
        categories = ["Menstrual, Complete Sets"],
        brand = "thenco"
    },
    {
        title: "Menstrual Pad 4 Pack | Normal Flow | Reusable Cloth Pads in Flowers and Butterflies",
        image: "../images/products/Pattern4PackReg.jpg",
        description: "Thenco's Normal Flow set of 4 reusable cloth pads in Flowers and Butterflies pattern are a perfect addition to the Menstrual Pad Essentials Set, Support Set, or as an extension to the pads you already have. With this perfectly sized set, you won't be short a pad when you need it most!",
        price: 14.99,
        inStock: true,
        categories = ["Menstrual, Add-on Packs"],
        brand = "thenco"
    },
    {
        title: "Menstrual Pad 4 Pack | Normal Flow | Reusable Cloth Pads in Pouncing Purple",
        image: "../images/products/Purple4PackReg.jpg",
        description: "Thenco's Normal Flow set of 4 reusable cloth pads in Pouncing Purple pattern are a perfect addition to the Menstrual Pad Essentials Set, Support Set, or as an extension to the pads you already have. With this perfectly sized set, you won't be short a pad when you need it most!",
        price: 14.99,
        inStock: true,
        categories = ["Menstrual, Add-on Packs"],
        brand = "thenco"
    },
    {
        title: "Menstrual Pad 4 Pack | Normal Flow | Reusable Cloth Pads in Unabashed Blue",
        image: "../images/products/Blue4PackReg.jpg",
        description: "Thenco's Normal Flow set of 4 reusable cloth pads in Unabashed Blue pattern are a perfect addition to the Menstrual Pad Essentials Set, Support Set, or as an extension to the pads you already have. With this perfectly sized set, you won't be short a pad when you need it most!",
        price: 14.99,
        inStock: true,
        categories = ["Menstrual, Add-on Packs"],
        brand = "thenco"
    },
    {
        title: "Menstrual Pad 4 Pack | Normal Flow | Reusable Cloth Pads in Real Red",
        image: "../images/products/Reg4PackReg.jpg",
        description: "Thenco's Normal Flow set of 4 reusable cloth pads in Real Red pattern are a perfect addition to the Menstrual Pad Essentials Set, Support Set, or as an extension to the pads you already have. With this perfectly sized set, you won't be short a pad when you need it most!",
        price: 14.99,
        inStock: true,
        categories = ["Menstrual, Add-on Packs"],
        brand = "thenco"
    }
]

products.map(product => {
    product.id = uuid()
    return product
})

export default products