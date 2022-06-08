import Image from 'next/image';

export default function Images() {
  return (
    <div>
      <h1>Images Page</h1>
      <Image src={"/4-min.jpg"} width={400} height={400} objectFit="contain" />
    </div>
  )
}