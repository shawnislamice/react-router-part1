import PropTypes from 'prop-types'
import { MdVerified } from "react-icons/md";
const Feature = ({feature}) => {
    return (
      <div className=''>
        <p className='flex items-center gap-2'>
          <MdVerified className='text-green-500' />
          {feature}
        </p>
      </div>
    );
};

Feature.propTypes={
    feature: PropTypes.object.isRequired
}
export default Feature;