export default function Maskot() {
  return (
    <div id="about-content" data-aos="fade-down" data-aos-duration="1200">
      <div className="text-center pb-5">
        <h2>Maskot UMN Medical Center</h2>
        <span className="aboutUnderline maskot-line mx-auto"></span>
      </div>
      <div className="row maskot text-center d-flex justify-content-between align-items-center">
        <div className="col-12 col-md-6">
          <h3 className="py-4"><b>MEDI</b></h3>
          <img src='https://cdn.discordapp.com/attachments/1079650552830513222/1124355699758088283/Medi.webp' alt="medi" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <h3 className="py-4"><b>ICAL</b></h3>
          <img src='https://cdn.discordapp.com/attachments/1079650552830513222/1124355699468669049/Ical.webp' alt="ical" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
