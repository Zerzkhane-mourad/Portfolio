import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Coder',
        1500, 
        'Web Developer',
        1500,
        'designer',
        1500,
        'Progrmmer',
        1500
      ]}
      speed={70}
      className='text-[2rem] md:text-[3rem] text-white font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextAnimation