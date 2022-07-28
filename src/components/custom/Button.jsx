export default function Button({ children, icon, ...props }) { 
  return <button
    icon={icon}
    {...props}
  >
    {children}
  </button>

}