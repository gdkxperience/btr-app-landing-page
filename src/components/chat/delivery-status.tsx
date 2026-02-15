interface DeliveryStatusProps {
  status: 'delivered' | 'read'
}

export function DeliveryStatus({ status }: DeliveryStatusProps) {
  return (
    <div className={`delivery-status ${status === 'read' ? 'is-read' : 'is-delivered'}`}>
      {status === 'read' ? 'Read' : 'Delivered'}
    </div>
  )
}
