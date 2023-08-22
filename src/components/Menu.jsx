import PropTypes from "prop-types"

function Menu({ menu,  addToCart }) {
  return (
    <div className="list-group">
      {menu.map((item) => {
        return (
          <button
            key={item.id}
            href="#"
            className="list-group-item list-group-item-action"
            onClick={() => addToCart(item)}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.name}</h5>
              <small>${item.price}</small>
            </div>
            <p className="mb-1">{item.description}</p>
          </button>
        )
      })}
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default Menu