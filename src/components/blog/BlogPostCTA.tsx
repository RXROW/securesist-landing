import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export function BlogPostCTA() {
  return (
    <div className="mt-16 p-8 rounded-xl bg-blue-50 border">
      <h3 className="text-2xl font-bold mb-4">
        Ready to Transform Your Security Training?
      </h3>
      <Button asChild>
        <Link href="/contact">Request a Demo</Link>
      </Button>
    </div>
  );
}
