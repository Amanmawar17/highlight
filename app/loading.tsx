

export default function Loading() {
  return (
    <div className="relative h-[calc(100vh-80px)] grid place-content-center">
      <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-blue animate-up" />
      <div className="absolute top-[calc(50%-40px)] left-[calc(50%-40px)] w-10 h-10 bg-green animate-down" />
    </div>
  )
}
