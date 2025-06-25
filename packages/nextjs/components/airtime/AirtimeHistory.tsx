import { useAirtime } from "~~/hooks/useAirtime";
import { useEffect } from "react";

export function AirtimeHistory() {
  const { history, fetchHistory, loading } = useAirtime();

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      <ul className="divide-y">
        {history.map((item, idx) => (
          <li key={idx} className="py-2">
            <div>
              <b>{item.network}</b> - {item.phone} - ₦{item.amount} - {item.status}
            </div>
            <div className="text-xs text-gray-400">{item.date}</div>
          </li>
        ))}
      </ul>
      {!loading && history.length === 0 && <div>No history found.</div>}
    </div>
  );
}
