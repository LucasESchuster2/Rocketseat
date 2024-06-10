'use client'
import { useCart } from '@/context/cart-context'
interface addToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: addToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCard() {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white"
      onClick={handleAddProductToCard}
    >
      Adicionar ao carrinho
    </button>
  )
}
