import React from 'react';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  return (
    <div className="flex">
      <div className="container p-6 bg-white shadow-lg rounded-lg">
        <div className="section flex ">
          <div className="left flex p-8">
            <div className="main-content">
              <h1 className="font-bold text-3xl">
                Get in <span className="text-[#3FA2F6]">touch</span>
              </h1>
              <p className="pt-3 w-96">
                For time requires a quick but smooth quiver. Football season employee or, to decorate that does not flatter the net.
              </p>
              <form className="pt-10 space-y-6 w-[550px]">
                <input className="border-b-2 w-full p-2" type="text" placeholder="Contact name" />
                <input className="border-b-2 w-full p-2" type="text" placeholder="Street" />
                <div className="flex gap-4">
                  <input className="border-b-2 w-full p-2" type="text" placeholder="City" />
                  <input className="border-b-2 w-full p-2" type="number" placeholder="Postcode" />
                </div>
                <input className="border-b-2 w-full p-2" type="number" placeholder="Contact Phone" />
                <input className="border-b-2 w-full p-2" type="text" placeholder="E-mail" />
                <input className="border-b-2 w-full p-2" type="text" placeholder="Message" style={{ height: '100px' }} />
              </form>
              <button className="w-full mt-6 bg-[#4475F2] text-white py-2 rounded-lg">Submit</button>
              <div className="cardsection mt-10 flex items-center gap-7 w-full bg-white p-4 rounded-lg text-sm">
                <div className="card flex items-center gap-4">
                  <PhonePausedIcon />
                  <div>
                    <p>Phone</p>
                    <p>111 111 111</p>
                  </div>
                </div>
                <div className="card flex items-center gap-4">
                  <MailOutlineIcon />
                  <div>
                    <p>E-MAIL</p>
                    <a href="#">info@company.com</a>
                  </div>
                </div>
                <div className="card flex items-center gap-4">
                  <MailOutlineIcon />
                  <div>
                    <p>Helpdesk</p>
                    <a href="#">https://helpdesk.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-[650px] p-8">
            <iframe
              className="w-full h-[950px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231562.13335862698!2d66.80688988671876!3d24.926675499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338caa5ac57cb%3A0x2c4b1fc512ab6bb!2sAptech%20Gulshan-e-Iqbal!5e0!3m2!1sen!2s!4v1724233528495!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
