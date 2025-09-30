import '@/scss/object/component/_heading.scss';

type HeadingProps = {
  color?: string;
  headingLevel: '1' | '2' | '3' | '4' | '5' | '6';
  type?: 'post' | 'title' | 'related' | 'underline' | 'dotted' | 'dashed' | 'double' |
         'bg-simple' | 'bg-accent' | 'bg-gradient' | 'bg-gradient-gold' |
         'border-simple' | 'border-accent' | 'border-gradient' |
         'shadow' | 'shadow-colored' | 'tag' | 'tag-rounded' |
         'ribbon' | 'speech' | 'checkered' | 'striped' |
         'outline' | 'outline-colored' | '3d' |
         'content-h2' | 'content-h3' | 'content-h4';
  isLink: boolean;
  label: string;
};

export const Heading = ({
  headingLevel,
  type,
  isLink = false,
  label = 'title の見出し',
}: HeadingProps) => {
  const HeadingTag = `h${headingLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  let classProps = '';

  // Map type to CSS class
  const typeToClass: Record<string, string> = {
    'post': 'c-heading__post',
    'title': 'c-heading__title',
    'related': 'c-heading__related',
    'underline': 'c-heading__underline',
    'dotted': 'c-heading__dotted',
    'dashed': 'c-heading__dashed',
    'double': 'c-heading__double',
    'bg-simple': 'c-heading__bg-simple',
    'bg-accent': 'c-heading__bg-accent',
    'bg-gradient': 'c-heading__bg-gradient',
    'bg-gradient-gold': 'c-heading__bg-gradient-gold',
    'border-simple': 'c-heading__border-simple',
    'border-accent': 'c-heading__border-accent',
    'border-gradient': 'c-heading__border-gradient',
    'shadow': 'c-heading__shadow',
    'shadow-colored': 'c-heading__shadow-colored',
    'tag': 'c-heading__tag',
    'tag-rounded': 'c-heading__tag-rounded',
    'ribbon': 'c-heading__ribbon',
    'speech': 'c-heading__speech',
    'checkered': 'c-heading__checkered',
    'striped': 'c-heading__striped',
    'outline': 'c-heading__outline',
    'outline-colored': 'c-heading__outline-colored',
    '3d': 'c-heading__3d',
    'content-h2': 'c-heading__content-h2',
    'content-h3': 'c-heading__content-h3',
    'content-h4': 'c-heading__content-h4'
  };

  classProps = typeToClass[type || ''] || 'c-heading';

  return (
    <>
      {isLink ? (
        <HeadingTag className={classProps}>
          <a href='#'>{label}</a>
        </HeadingTag>
      ) : (
        <HeadingTag className={classProps}>{label}</HeadingTag>
      )}
    </>
  );
};
