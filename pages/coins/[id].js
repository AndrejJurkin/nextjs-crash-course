import CoinDetail from "../../components/CoinDetail";

export default function CoinDetailPage({ id, data }) {
  return (
    <div className="center">
      <CoinDetail data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();

  return {
    props: {
      id,
      data,
    },
  };
}
