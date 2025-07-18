import Service1 from "@/components/Service1/Service1";
import Head from "next/head";

export default function Page() {

  return (
    <>
      <Head>
        <title>Услуги грузчиков | Профессиональные грузчики от 14 р/час</title>
        <meta name="description" content="Профессиональные услуги грузчиков для вашего бизнеса и дома"/>
      </Head>
      <div className="container">
        <Service1/>
      </div>
    </>
  );
}
