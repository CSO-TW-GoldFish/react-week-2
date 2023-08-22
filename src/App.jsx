import { useEffect, useState } from 'react'
import menuData from './data/menuData'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Order from './components/Order'

function App() {

  const [menu] = useState(menuData)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [note, setNote] = useState("")
  const [order, setOrder] = useState([])

  function addToCart(item) {
    // 尋找相同id的商品
    const existedItemIndex = cart.findIndex((cartItem) => item.id === cartItem.id)

    // -1 表示沒有找到相同的，直接新增
    if (existedItemIndex === -1) {
      const newCart = [...cart, {
        ...item,
        quanity: 1
      }]
      setCart(newCart)
    } else {
      // 有相同商品，利用map搜尋相同id的商品並覆蓋和更新數量
      const newCart = cart.map((cartItem) => {
        return item.id === cartItem.id
          ? {
            ...cartItem,
            quanity: cartItem.quanity < 10 ? cartItem.quanity + 1 : cartItem.quanity
          }
          : cartItem
      })
      setCart(newCart)
    }
  }

  function deleteCart(item) {
    setCart(cart.filter((cartItem) => item.id !== cartItem.id))
  }

  function updateCart(item, value) {
    const newCart = cart.map((cartItem) => {
      return item.id === cartItem.id
        ? {
          ...cartItem,
          quanity: Number(value)
        }
        : cartItem
    })
    setCart(newCart)
  }

  function createOrder() {
    const newOrder = [
      ...order,
      {
        id: new Date().getTime(),
        cart,
        note,
        total
      }
    ]
    setOrder(newOrder)
    setCart([])
    setNote("")
    setTotal(0)
  }

  useEffect(() => {
    const newTotal = cart.reduce((pre, curr) => {
      return pre + curr.price * curr.quanity
    }, 0)
    setTotal(newTotal)
  }, [cart])
	
	return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Menu menu={menu} addToCart={addToCart} />
        </div>
        <div className="col-md-8">
          <Cart
            cart={cart}
            note={note}
            total={total}
            deleteCart={deleteCart}
            updateCart={updateCart}
            setNote={setNote}
            createOrder={createOrder}
          />
        </div>
      </div>
      <hr />
      <Order order={order} />
    </div>
	)
}

export default App
