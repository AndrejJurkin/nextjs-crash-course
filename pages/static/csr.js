import { useState } from "react";
import CoinDetail from "../../components/CoinDetail";

export default function Csr() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
    const data = await res.json();
    setData(data);
  };

  return (
    <section className="center">
      <h1>This Page Fetches Data Client-Side</h1>
      <button onClick={fetchData}>Fetch Bitcoin Data!</button>
      {data && <CoinDetail data={data} />}
    </section>
  );
}
