import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <FallingLines
      height="100"
      width="100"
      color="#10112d"
      ariaLabel="falling-lines-loading'"
      wrapperStyle={{ padding: '20px 100px' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
