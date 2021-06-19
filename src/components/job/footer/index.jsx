const Footer = ({ job }) => (
  <footer>
    <div className='company-info'>
      <div>
        <span className='position'>{job.position}</span>
        <span className='company'>{job.company}</span>
      </div>

      <button className='btn btn--default'>apply now</button>
    </div>
  </footer>
);

export default Footer;
