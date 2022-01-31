/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image src={image} alt="dotfi logo" width={90} height={70} />
    </Link>
  );
}
