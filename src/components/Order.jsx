import PropTypes from "prop-types"

function Order({ order }) {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        {order.length === 0
          ? (
            <div className="alert alert-primary text-center">
              尚未建立訂單~
            </div>
          ) : (
            order.map((item) => {
              return (
                <div key={item.id} className="card mb-3">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>訂單</h5>
                      <p>編號: {item.id}</p>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">品項</th>
                            <th scope="col">數量</th>
                            <th scope="col">小計</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.cart.map((cartItem) => {
                            return (
                              <tr key={cartItem.id}>
                                <td>{cartItem.name}</td>
                                <td>{cartItem.quanity}</td>
                                <td>{cartItem.price * cartItem.quanity}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                      <div className="text-end">備註: <span>{item.note}</span></div>
                      <div className="text-end">
                        <h5>總計: <span>${item.total}</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )
        }
      </div>
    </div>
  )
}

Order.propTypes = {
  order: PropTypes.array.isRequired
}

export default Order