import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Preview({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  return (
    <div className="my-6 overflow-hidden rounded-lg border">
      <div className="flex items-center gap-1 border-b px-2 py-1.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTab("preview")}
          className={cn(tab === "preview" && "bg-muted")}
        >
          Preview
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTab("code")}
          className={cn(tab === "code" && "bg-muted")}
        >
          Code
        </Button>
        {tab === "code" && (
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto"
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
        )}
      </div>
      {tab === "preview" ? (
        <div className="flex flex-wrap items-center gap-3 p-6">{children}</div>
      ) : (
        <pre className="overflow-x-auto bg-muted/50 p-4 text-xs">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
