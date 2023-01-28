type Props = {
  color: string;
};
const Background = ({ color }: Props): JSX.Element => {
  return (
    <>
      <div className={`blurred1 shadow-${color}`}></div>
      <div className={`blurred2 shadow-${color}`}></div>
      <div className={`blurred3 shadow-${color}`}></div>
      <div className={`blurred4 shadow-${color}`}></div>
    </>
  );
};
export default Background;
