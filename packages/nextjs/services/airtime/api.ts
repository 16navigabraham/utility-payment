export async function buyAirtimeAPI({ phone, amount, network }: { phone: string; amount: string; network: string }) {
  // Call your backend endpoint
  const res = await fetch("/api/airtime", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, amount, network }),
  });
  if (!res.ok) throw new Error("Failed to buy airtime");
  return res.json();
}

export async function getAirtimeHistoryAPI() {
  const res = await fetch("/api/airtime/history");
  if (!res.ok) throw new Error("Failed to fetch history");
  return res.json();
}
