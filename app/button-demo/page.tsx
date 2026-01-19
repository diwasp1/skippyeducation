import Link from "next/link"

export default function ButtonDemoPage() {
  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Button Styles</h1>

      <div className="max-w-md mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Hero Buttons</h2>
          <Link
            href="#"
            className="inline-flex justify-center items-center rounded-lg bg-secondary text-white px-6 py-3 text-sm font-medium hover:bg-secondary/90 transition-colors w-full"
          >
            Get Started Today
          </Link>
          <Link
            href="#"
            className="inline-flex justify-center items-center rounded-lg bg-white text-gray-800 border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors w-full"
          >
            Explore Our Services
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Form Buttons</h2>
          <button className="inline-flex justify-center items-center rounded-lg bg-secondary text-white px-6 py-3 text-sm font-medium hover:bg-secondary/90 transition-colors w-full">
            Submit
          </button>
          <button className="inline-flex justify-center items-center rounded-lg bg-gray-200 text-gray-800 px-6 py-3 text-sm font-medium hover:bg-gray-300 transition-colors w-full">
            Cancel
          </button>
          <button className="inline-flex justify-center items-center rounded-lg bg-white text-gray-800 border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors w-full">
            Help
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Other Button Colors</h2>
          <button className="inline-flex justify-center items-center rounded-lg bg-primary text-white px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors w-full">
            Primary (Blue)
          </button>
          <button className="inline-flex justify-center items-center rounded-lg bg-secondary text-white px-6 py-3 text-sm font-medium hover:bg-secondary/90 transition-colors w-full">
            Secondary (Teal)
          </button>
        </div>
      </div>
    </div>
  )
}
