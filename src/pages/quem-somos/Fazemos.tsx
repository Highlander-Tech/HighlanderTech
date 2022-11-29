import Image, { StaticImageData } from 'next/image';
import { Subtitle, Title } from 'components';

type Props = {
  base64: string;
  image: StaticImageData['src'];
};

function Fazemos({ base64, image }: Props) {
  return (
    <section className="mx-0 flex w-11/12 flex-col items-center justify-center gap-5 md:max-w-6xl md:flex-row">
      <Image
        src={image}
        priority
        loading="eager"
        alt="Sobre"
        width={400}
        height={375}
        blurDataURL={base64}
        //placeholder="blur"
      />
      <article className="mx-0 flex flex-1 flex-col text-center md:text-left">
        <header>
          <Title text="A Highlander Tech" />
          <Subtitle>O que nós fazemos?</Subtitle>
        </header>
        <p className="my-8 text-lg">
          A Highlander Tech é uma empresa que presta serviços de montagem e
          manutenção de computadores, completo com consultoria, além da criação
          de sites para pequenos negócios que querem entrar entrar no mundo
          digital.
          <br />
          <br />
          Nossa empresa preza o relacionamento pessoal com o cliente, criando
          conteúdo e oferecendo produtos que, ao mesmo tempo que suprem a
          necessidade, manifestam a identidade do cliente.
        </p>
      </article>
    </section>
  );
}

export { Fazemos };
export type { Props as FazemosProps };
