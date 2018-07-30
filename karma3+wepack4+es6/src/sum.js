const realSum = (...args) => {
  let result = 0
  for (let i = 0; i < args.length; i++) {
    result += args[i]
  }
  return result
}

export default (...args) => {
  return realSum.apply(null, args)
}
