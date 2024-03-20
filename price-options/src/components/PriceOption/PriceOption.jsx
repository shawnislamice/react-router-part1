import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    
    const {name,price,features}=option
    return (
      <div className="bg-blue-500 rounded-xl p-6 text-white font-semibold space-y-2 flex flex-col gap-3">
        <h4 className="text-4xl text-center">{name}</h4>
        <h2 className="text-center">
          <span className="text-3xl text-center">Price: {price}</span>
        </h2>
        <div className='flex-grow'>
          {features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </div>
        <button className="bg-green-500 btn w-full border-none outline-none text-black font-semibold">
          Buy Now
        </button>
      </div>
    );
};

PriceOption.propTypes={
    option:PropTypes.object,
}
export default PriceOption;