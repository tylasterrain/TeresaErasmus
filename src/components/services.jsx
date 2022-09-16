export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
          <h2>Our Services</h2>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-sm-6 col-md-3'>
                  {' '}

                  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <i className={d.icon} aria-hidden="true">
    </i>
     <h3>{d.name}</h3>
   
    </div>
    <div class="flip-card-back">
    <div className='service-desc'>
                    <p>{d.text}</p>
                  
                  </div>
                  <h3><b>{d.name}</b></h3>
    </div>
  </div>
</div>

                               
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
