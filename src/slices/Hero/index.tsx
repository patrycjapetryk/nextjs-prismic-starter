import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicRichText
        field={slice.primary.description}
        components={{
          paragraph: ({ children }) => <p className='text-m text-center'>{children}</p>,
        }}
      />
    </section>
  );
};

export default Hero;
