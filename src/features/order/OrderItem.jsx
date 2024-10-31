import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

// eslint-disable-next-line no-unused-vars
function OrderItem({ item, _isLoadingIngredients, _ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  _isLoadingIngredients: PropTypes.bool,
  _ingredients: PropTypes.array,
};
