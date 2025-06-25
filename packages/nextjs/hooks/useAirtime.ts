import { useState } from "react";
import { buyAirtimeAPI, getAirtimeHistoryAPI } from "~~/services/airtime/api";

export function useAirtime() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  const buyAirtime = async ({ phone, amount, network }: { phone: string; amount: string; network: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await buyAirtimeAPI({ phone, amount, network });
      setSuccess(true);
    } catch (e: any) {
      setError(e.message || "Failed to buy airtime");
    }
    setLoading(false);
  };

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const data = await getAirtimeHistoryAPI();
      setHistory(data);
    } catch {
      setHistory([]);
    }
    setLoading(false);
  };

  return { buyAirtime, loading, error, success, history, fetchHistory };
}
