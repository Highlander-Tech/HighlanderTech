import { useCallback } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useSelect } from 'hooks/useSelect';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import { Subtitle, Title } from 'components';

type Props = {
  title: string;
  subTitle: string;
  image: StaticImageData['src'];
  description: string;
  base64: string;
  type: Select;
  isRight?: boolean;
  isFirst?: boolean;
};

function Card({
  title,
  subTitle,
  image,
  description,
  type,
  isRight = false,
  isFirst = false,
  base64,
}: Props) {
  const { setSelect } = useSelect();
  const router = useRouter();

  const handleClick = useCallback(() => {
    setSelect(type);
    router.push('/contato');
  }, [router, setSelect, type]);

  return (
    <section
      className={`mx-0 flex w-11/12 flex-col items-center justify-between gap-2 md:max-w-6xl md:flex-row ${
        !isRight && 'md:flex-row-reverse'
      }`}
    >
      <article
        className={`relative flex w-11/12 flex-col items-center text-center md:-mt-20 md:block md:w-[560px] md:p-10 ${
          isRight ? 'md:text-right' : 'md:text-left'
        }`}
      >
        <header>
          <Title text={title} isRight={isRight} />
          <Subtitle isRight={isRight}>{subTitle}</Subtitle>
        </header>
        <p className={'my-8 text-lg md:mb-0'}>{description}</p>
        <button
          type="button"
          role="link"
          className={`mb-8 mt-2 flex items-center justify-center text-lg font-semibold text-purple-500 transition-all hover:cursor-pointer hover:opacity-70 md:absolute md:mb-0 ${
            isRight
              ? 'right-0 text-left md:pr-10'
              : 'left-0 text-right md:pl-10'
          }`}
          onClick={handleClick}
        >
          <p>Solicite seu orçamento</p>{' '}
          <BsArrowRight size={22} className="mx-1 mt-1" />
        </button>
      </article>
      <Image
        priority={isFirst}
        src={image}
        alt={title}
        height={540}
        width={540}
        blurDataURL={base64}
        // placeholder="blur"
      />
    </section>
  );
}

export { Card };
export type { Props as FeatureProps };
