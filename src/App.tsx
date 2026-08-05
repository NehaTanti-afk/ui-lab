import { Button } from "@/components/ui/button";

const variants = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const;
const sizes = ["xs", "sm", "default", "lg"] as const;

function App() {
  return (
    <div className="min-h-svh p-8">
      <button
        className="mb-8 underline"
        onClick={() => document.documentElement.classList.toggle("dark")}
      >
        Toggle theme
      </button>

      <div className="space-y-6">
        {variants.map((variant) => (
          <div key={variant}>
            <p className="mb-2 text-sm text-muted-foreground">{variant}</p>
            <div className="flex items-center gap-3">
              {sizes.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
