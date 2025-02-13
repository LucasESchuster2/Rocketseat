import { render } from '@testing-library/react'

import { OrderStatus } from '@/pages/app/orders/order-status'
describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)
    // Verifica se existe um elemento onde o texto "pendente" esteja no documento
    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })
  it('should display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)
    // Verifica se existe um elemento onde o texto "canceled" esteja no documento
    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)
    // Verifica se existe um elemento onde o texto "canceled" esteja no documento
    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)
    // Verifica se existe um elemento onde o texto "canceled" esteja no documento
    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)
    // Verifica se existe um elemento onde o texto "canceled" esteja no documento
    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
