import { Equipe, Fazemos } from 'components/organisms';
import { GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';

type Props = { base64: string };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { base64 } = await getPlaiceholder('/quem-somos/about.png');

  return {
    props: {
      base64,
    },
  };
};

export default function QuemSomos({ base64 }: Props) {
  return (
    <>
      <Fazemos base64={base64} />
      <Equipe />
    </>
  );
}
