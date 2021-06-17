import './index.scss';
import Logos from '../../assets/logos';

const Card = ({
  postedAt,
  position,
  contract,
  company,
  location,
  logoBackground,
  logo,
}) => (
  <div className='job-card'>
    <div className='logo-cont' style={{ background: logoBackground }}>
      <Logos name={logo} />
    </div>
    <div className='meta'>
      <span>{postedAt}</span>•<span>{contract}</span>
    </div>
    <p className='position'>{position}</p>
    <p className='company'>{company}</p>
    <p className='location'>{location}</p>
  </div>
);

const Cards = ({ data }) => {
  return (
    <div className='cards-cont'>
      {data.map(jobData => (
        <Card {...jobData} key={jobData.id} />
      ))}
    </div>
  );
};

export default Cards;
