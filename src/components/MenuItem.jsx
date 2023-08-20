import PropTypes from 'prop-types'

function MenuItem({ name, description, price }) {
	return (
		<div className="list-group">
			<a href="#" className="list-group-item list-group-item-action">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">{name}</h5>
				<small>${price}</small>
				</div>
				<p className="mb-1">{description}</p>
			</a>
		</div>
	)
}

MenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}

export default MenuItem