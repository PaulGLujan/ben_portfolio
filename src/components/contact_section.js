import React from 'react';
import ContactForm from './contact_form';

export default ()=>(
  <div>
    <div className="contactSection mt-3">
      <ContactForm />
    </div>
    <h3 className="pseudoToggleBar clearfix mt-1 mb-3">A</h3>
    {/* <div className="pseudoToggleBar mt-1"></div> */}
    <div className="contactFooter"></div>
  </div>
)