

function Button({className, onclick,  children, text } ) {
  return (
    <button className={className} onClick={onclick}>
      {text}
      {children}
    </button>
   )
}

export default Button