import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Misi.css'

export default function Misi() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div className="container px-4 pb-5" data-aos='fade-down' data-aos-duration='1200' data-aos-once='true'>
      <div className="row">
        <div className="col">
          <h2 className="misi-judul text-center">Misi</h2>
          <span className="misi-underline"></span>
        </div>
      </div>
        <div className="row">
          <div className="col">
            <div className="misi-desc">
              Menjadikan UMN Medical Center sebagai Lembaga Semi Otonom yang
              dikenal dan diketahui oleh seluruh civitas, khususnya
              mahasiswa/i, dan pihak eksternal Universitas Multimedia Nusantara.
            </div>
            <div className="misi-desc">
              Mampu memberikan edukasi terkait kesehatan kepada pihak internal
              dan eksternal UMN Medical Center secara edukatif, informatif, dan
              interaktif.
            </div>
            <div className="misi-desc">
              Menjadikan seluruh anggota UMN Medical Center tidak hanya cepat
              tanggap dalam menangani berbagai masalah kesehatan yang ada,
              tetapi atas dasar keinginan dalam menangani dan memberikan
              pelayanan kepada pasien, serta mempunyai rasa tanggung jawab
              terhadap tugas dan kewajibannya masing-masing.
            </div>
            <div className="misi-desc">
              Meningkatkan relasi yang baik antar anggota UMN Medical Center
              dengan generasi sebelumnya untuk menerapkan nilai kekeluargaan
              sesama UMN Medical Center.
            </div>
            <div className="misi-desc">
              Menumbuhkan keberanian untuk seluruh anggota UMN Medical Center
              dalam mengevaluasi kemampuannya masing-masing, serta seluruh
              tatanan lembaga bagian untuk pengembangan diri dan UMN Medical
              Center.
            </div>
          </div>
        </div>
    </div>
  );
}
