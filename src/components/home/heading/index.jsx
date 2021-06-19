import { ReactComponent as Location } from '../../../assets/icons/icon-location.svg';
import { ReactComponent as Search } from '../../../assets/icons/icon-search.svg';
import { ReactComponent as Filter } from '../../../assets/icons/icon-filter.svg';
import { ReactComponent as Check } from '../../../assets/icons/icon-check.svg';

const Heading = ({ setshowModal, showModal, checked, handleCheckbox }) => (
  <div className='heading'>
    <div>
      <Search className='search-icon-desktop' fill='#5964E0' />
      <input type='text' placeholder='Filter by title, companies, expertise…' />
      <Filter
        className='filter'
        fill='#6E8098'
        onClick={() => setshowModal(!showModal)}
      />
      <button className='search-icon-mobile'>
        <Search fill='#FFF' />
      </button>
    </div>

    <div>
      <Location />
      <input type='text' placeholder='Filter by location…' />
    </div>

    <div className='checkbox-cont'>
      <div className={`checkbox${checked ? ' checked' : ''}`}>
        <input type='checkbox' checked={checked} onChange={handleCheckbox} />
        <Check
          className='checkmark'
          style={{
            display: checked ? 'block' : 'none',
          }}
        />
      </div>
      <span>full time only</span>
      <button className='btn btn--default'>search</button>
    </div>
  </div>
);

export default Heading;
