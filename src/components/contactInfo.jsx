
export const ContactInfo = (props) => {
    return (
        <div id='contactInfo'>
        <div className='container'>

<div className="row">
  <div className="col-sm-6">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.07782186747!2d18.8445859!3d-33.9466914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb2f75188e2a5%3A0x7009aa00dee36be2!2sStellenbosch!5e0!3m2!1sen!2sza!4v1653566119669!5m2!1sen!2sza" 
  width="100%" 
  height="60%" 
  style={{border:0}} 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
  title="Stellenbosch"></iframe>

  </div>

  <div className="col-sm-6">
  <div className="contact-details">
  <h2>Contact Details</h2>

      <div className='contact-item'>
        <p>
          <span>
            <i className='fa fa-phone'></i> Phone
          </span>{' '}
          {props.data ? props.data.phone : 'loading'}
        </p>
      </div>
      <div className='contact-item'>
        <p>
          <span>
            <i className='fa fa-envelope-o'></i> Email
          </span>{' '}
          {props.data ? props.data.email : 'loading'}
        </p>
      </div>
      <div className='contact-item'>
        <p>
          <span>
          <i class="fa fa-linkedin"></i> Linkedin
          </span>{' '}
          {props.data ? props.data.linkd : 'loading'}
        </p>
      </div>
 
    </div>
    </div>
</div>


   
      </div>
      </div>

    )
}
          
         