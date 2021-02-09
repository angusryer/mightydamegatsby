import React, { useContext } from "react"
import { CartContext } from "../context/mainContext"
import { FaTimes, FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "gatsby"
import CartLink from "../components/common/CartLink"
import QuantityPicker from "../components/common/QuantityPicker"
import { DENOMINATION } from "../libs/constants"

export default function Cart() {
  const {
    quantityOfItems,
    items,
    removeFromCart,
    total,
    setItemQty,
  } = useContext(CartContext)

  const cartEmpty = quantityOfItems === Number(0)

  function increment(item) {
    item.quantity = item.quantity + 1
    setItemQty(item)
  }

  function decrement(item) {
    if (item.quantity === 1) return
    item.quantity = item.quantity - 1
    setItemQty(item)
  }

  return (
    <>
      <CartLink />
      <div className="flex flex-col items-center pb-10 px-5">
        <div
          className="
          flex flex-col w-full
          max-w-5xl
        "
        >
          <div className="pt-10 pb-8">
            <h1 className="text-5xl font-light text-primary">Your cart</h1>
          </div>

          {cartEmpty ? (
            <h3 className="text-primary m-5">
              You haven't added anything to your cart yet.
            </h3>
          ) : (
            <div className="flex flex-col p-5">
              <div className="">
                {items &&
                  items.map((item) => {
                    return (
                      <div className="border-b border-accentsPrimary py-10" key={item.id}>
                        {/* Responsive - Desktop */}
                        <div className="items-center hidden md:flex">
                          <img
                            className="w-32 m-0"
                            src={item.image}
                            alt={item.name}
                          />
                          <p
                            className="
                              m-0 pl-10 text-primary text-opacity-75 text-sm w-56
                              "
                          >
                            {item.name}
                          </p>
                          <div className="ml-4">
                            {item.offerType === "PRODUCT" && (
                              <QuantityPicker
                                numberOfitems={item.quantity}
                                increment={() => increment(item)}
                                decrement={() => decrement(item)}
                              />
                            )}
                          </div>
                          <div className="flex flex-1 justify-end items-center">
                            <p className="m-0 pl-10 text-primary text-opacity-90 tracking-tighter font-semibold text-center">
                              {DENOMINATION + item.price}
                            </p>
                          </div>
                          <div
                            role="button"
                            tabIndex="0"
                            onKeyDown={() => removeFromCart(item)}
                            onClick={() => removeFromCart(item)}
                            className="
                            m-0 ml-10 text-primary text-opacity-90 text-s cursor-pointer
                            "
                          >
                            <FaTimes />
                          </div>
                        </div>

                        {/* Responsive - Mobile */}
                        <div className="relative flex flex-col sm:flex-row items-center md:hidden">
                          <div
                            role="button"
                            tabIndex="0"
                            onKeyDown={() => removeFromCart(item)}
                            onClick={() => removeFromCart(item)}
                            className="
                            absolute top-1 right-1 flex items-center justify-center m-0 nav:ml-auto text-primary text-opacity-90 text-s cursor-pointer nav:mr-2
                            "
                          >
                            <FaTimes />
                          </div>
                          <img
                            className="w-24 sm:w-32 m-0"
                            src={item.image}
                            alt={item.name}
                          />

                          <div>
                            <p
                              className="
                                mt-2 sm:pl-6 text-primary text-opacity-75 text-base text-center
                                "
                            >
                              {item.name}
                            </p>
                            <div className="sm:ml-6 mt-4 mb-2 flex self-center">
                              {item.offerType === "PRODUCT" && (
                                <QuantityPicker
                                  hideQuantityLabel
                                  numberOfitems={item.quantity}
                                  increment={() => increment(item)}
                                  decrement={() => decrement(item)}
                                />
                              )}
                            </div>
                            <p className="text-lg m-0 pt-2 text-center sm:text-left sm:ml-6 text-primary text-opacity-90 tracking-tighter font-semibold">
                              {DENOMINATION + item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}
          <div className="flex flex-1 justify-end py-8 px-5">
            <p className="text-sm pr-10 text-primary">Total</p>
            <p className="font-semibold text-primary tracking-tighter">
              {DENOMINATION + total}
            </p>
          </div>
          {!cartEmpty && (
            <Link to="/checkout" className="flex flex-1 justify-end px-5">
              <div className="cursor-pointer flex items-center">
                <p className="text-primary text-opacity-75 text-sm mr-2">
                  Proceed to check out
                </p>
                <FaLongArrowAltRight className="text-primary text-opacity-75" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
