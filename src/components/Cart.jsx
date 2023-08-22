import PropTypes from "prop-types"

function Cart({ cart, note, total, deleteCart, updateCart, setNote, createOrder }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50">操作</th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col" width="90">數量</th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => deleteCart(item)}
                  >
                    x
                  </button>
                </td>
                <td>{item.name}</td>
                <td><small>{item.description}</small></td>
                <td>
                  <select
                    className="form-select"
                    value={item.quanity}
                    onChange={(e) => updateCart(item, e.target.value)}
                  >
                    {[...Array(10).keys()].map((num) => {
                      return <option key={num} value={num + 1}>{num + 1}</option>
                    })}
                  </select>
                </td>
                <td>{item.price}</td>
                <td>{item.price * item.quanity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {cart.length === 0
        ? (
          <div className="alert alert-primary text-center">
            尚未選擇飲品～
          </div>
        ) : (
          <>
            <div className="text-end mb-3">
              <h5>總計: <span>${total}</span></h5>
            </div>
            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="備註"
              value={note}
              onChange={(e) => {setNote(e.target.value)}}
            />
            <div className="text-end">
              <button
                className="btn btn-primary"
                onClick={() => createOrder()}
              >
                送出
              </button>
            </div>
          </>
        )
      }
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
  deleteCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired
}

export default Cart