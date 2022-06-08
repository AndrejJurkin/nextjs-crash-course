export default function CoinDetail({ data }) {
  return (
    <>
      <h1>
        Name: {data.localization["en"]}, {data.symbol}
      </h1>
      <h2>Price ${data.market_data.current_price.usd}</h2>
      <p>Description {data.description["en"]}</p>
    </>
  );
}
