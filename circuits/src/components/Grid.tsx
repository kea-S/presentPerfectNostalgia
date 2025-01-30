import Box from "./box"

function Grid() {

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3 gap-x-2.5 gap-y-12.5 mx-12.5 my-10 border">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  )
}

export default Grid
