import clsx from 'clsx'

import { MinusIcon, PlusIcon } from '../../assets/icons'
import { StyledQtyCounter, StyledQtyCounterIconButton } from './styles'

interface QuantityCounterProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <StyledQtyCounter className="quantity-counter">
      <StyledQtyCounterIconButton
        className={`decrement-button ${clsx(quantity <= 1 ? 'disabled' : '')}`}
        type="button"
        onClick={onDecrement}
      >
        <MinusIcon aria-hidden />
      </StyledQtyCounterIconButton>

      <p className="quantity">Quantity: {quantity}</p>

      <StyledQtyCounterIconButton
        className="increment-button"
        type="button"
        onClick={onIncrement}
      >
        <PlusIcon aria-hidden />
      </StyledQtyCounterIconButton>
    </StyledQtyCounter>
  )
}
