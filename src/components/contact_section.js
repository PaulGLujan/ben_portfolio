import React from 'react';
import ContactForm from './contact_form';

export default ()=>(
  <div>
    <div className="contactSection mt-3">
      <ContactForm />
    </div>
    <div className="pseudoToggleBar clearfix mt-1 mb-2"></div>
    {/* <div className="pseudoToggleBar mt-1"></div> */}
    <div className="contactFooter"></div>
  </div>
)