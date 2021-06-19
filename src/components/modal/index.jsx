import { ReactComponent as Location } from '../../assets/icons/icon-location.svg';
import { ReactComponent as Check } from '../../assets/icons/icon-check.svg';

const Modal = ({
  showModal,
  handleCloseOverlay,
  checked,
  handleCheckbox,
  setshowModal,
}) => (
  <div
    className={`modal-overlay${showModal ? ' visible' : ''}`}
    onClick={handleCloseOverlay}
  >
    <div className='modal'>
      <div className='filter-cont'>
        <Location />
        <input type='text' placeholder='Filter by location…' />
      </div>

      <div>
        <div className='checkbox-cont'>
          <div className={`checkbox${checked ? ' checked' : ''}`}>
            <input
              type='checkbox'
              checked={checked}
              onChange={handleCheckbox}
            />
            <Check
              className='checkmark'
              style={{
                display: checked ? 'block' : 'none',
              }}
            />
          </div>
          <span>full time only</span>
        </div>
        <button
          className='btn btn--default'
          onClick={() => setshowModal(!showModal)}
        >
          search
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
