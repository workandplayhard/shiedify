export const notEmpty = <TValue>(
  value: TValue | null | undefined,
): value is TValue => {
  return value !== null && value !== undefined
}

export const isHTMLNode = (node: unknown): node is HTMLElement => {
  return (
    typeof node === 'object' && notEmpty(node) && node instanceof HTMLElement
  )
}

export const mergeRef = (...refs: any[]) => {
  return (el: any) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(el)
      } else {
        ref.current = el
      }
    })
  }
}
