import Logos from '../../../assets/logos';

const CompanyInfo = ({ job }) => (
  <div className='company-info'>
    <div
      className='logo-cont'
      style={{
        backgroundColor: job.logoBackground,
      }}
    >
      <Logos name={job.logo} />
    </div>
    <div className='more-info'>
      <div className='company-meta'>
        <span className='company-name'>{job.company}</span>
        <span className='company-site'>{job.website}</span>
      </div>
      <button className='btn btn--secondary'>company site</button>
    </div>
  </div>
);

export default CompanyInfo;
