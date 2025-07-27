export function GET(context: any) {
  return new Response(JSON.stringify({ message: "Hello from API!" }), {
    headers: { "Content-Type": "application/json" },
  });
}