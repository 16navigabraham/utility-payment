import { AirtimeHistory } from "~~/components/airtime/AirtimeHistory";

export default function AirtimeHistoryPage() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Airtime Purchase History</h1>
      <AirtimeHistory />
    </div>
  );
}
