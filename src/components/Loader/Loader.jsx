import { FallingLines } from 'react-loader-spinner';

export const Loader = ({ white }) => {
  const color = white ? '#fafafa' : '#10112d';

  return (
    <FallingLines
      height="100"
      width="100"
      color={color}
      ariaLabel="falling-lines-loading'"
      wrapperStyle={{ padding: '20px 100px' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
