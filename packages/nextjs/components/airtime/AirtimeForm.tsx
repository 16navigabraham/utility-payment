import { useState } from "react";
import { useAirtime } from "~~/hooks/useAirtime";

export function AirtimeForm() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState("MTN");
  const { buyAirtime, loading, error, success } = useAirtime();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await buyAirtime({ phone, amount, network });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Phone Number</label>
        <input
          className="input input-bordered w-full"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Network</label>
        <select
          className="select select-bordered w-full"
          value={network}
          onChange={e => setNetwork(e.target.value)}
        >
          <option value="MTN">MTN</option>
          <option value="Airtel">Airtel</option>
          <option value="Glo">Glo</option>
          <option value="9mobile">9mobile</option>
        </select>
      </div>
      <div>
        <label>Amount (NGN)</label>
        <input
          className="input input-bordered w-full"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary w-full" type="submit" disabled={loading}>
        {loading ? "Processing..." : "Buy Airtime"}
      </button>
      {error && <div className="text-error">{error}</div>}
      {success && <div className="text-success">Airtime purchase successful!</div>}
    </form>
  );
}
