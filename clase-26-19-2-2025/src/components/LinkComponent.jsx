const LinkComponent = (props) => {
  const { url, text, children, newTag = false } = props
  return <a href={url} target={newTag ? "_blank" : ""}>{text}<span>{children}</span></a>
}

export { LinkComponent }