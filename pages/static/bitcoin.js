import CoinDetail from "../../components/CoinDetail";

export default function Bitcoin({ data }) {
  return (
    <section className="center">
      <CoinDetail data={data} />
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
