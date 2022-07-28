export default function Alert({ message }) {
  return (
    <div
      className="alert"
      role="alert"
    >
      <span className="alert-msg">{message}</span>
    </div>
  )
}
