import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-col space-y-4 max-w-xs mx-auto p-6">
      <Button variant="default">Submit</Button>
      <Button variant="cancel">Cancel</Button>
      <Button variant="white">Help</Button>

      <div className="pt-6">
        <h3 className="text-lg font-medium mb-4">Other Button Styles</h3>
        <div className="space-y-4">
          <Button variant="primary">Primary (Blue)</Button>
          <Button variant="secondary">Secondary (Teal)</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </div>
  )
}
