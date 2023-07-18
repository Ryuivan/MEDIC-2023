import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaInstagram, FaTiktok, FaLine } from 'react-icons/fa';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="pt-4 text-white">
      <div className="container pb-2">
        <div className="row d-flex justify-content-between">
          <div className="footer-col col-12 col-lg-3 px-md-4 mb-2 text-center">
            <img
              src='https://cdn.discordapp.com/attachments/1079650552830513222/1123229936912711751/Logo_White.webp'
              className="img-fluid mt-4 mb-4"
              width="250"
              height="95"
              alt="Logo_white"
            />
            <div className="ext text-center">
              <h5>
                <FontAwesomeIcon icon={faPhone} className='ext'/>
                Ext. 7000
              </h5>
            </div>
          </div>
          <div className="footer-col col-12 col-lg-3 mb-2 px-md-4 px-4">
            <p className="title mb-4">
              <b>Alamat</b>
            </p>
            <p className="alamat">
              Universitas Multimedia Nusantara
              <br />
              Jl. Scientia Boulevard, Curug Sangereng, Kec. Klp. Dua, Kab.
              Tangerang, Banten 15810
            </p>
          </div>
          <div className="footer-col col-12 col-lg-3 mb-3 px-md-4 px-4">
            <p className="title jam">
              <b>Jam Operasional</b>
            </p>
            <div className="mt-3">
              <div className="jamInner">
                <div className="jamInnerRow1 py-2">
                  <div className="innerTitle">
                    <b>Senin - Jumat</b>
                  </div>
                  <div className="innerContent">08.00 AM - 17.00 PM</div>
                </div>
                <div className="jamInnerRow2 py-2">
                  <div className="innerTitle">
                    <b>Sabtu</b>
                  </div>
                  <div className="innerContent">08.00 AM - 11.00 AM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col col-12 col-lg-3 px-md-4 px-4">
            <p className="title mb-4 sosial">
              <b>Media Sosial</b>
            </p>
            <div className="icon d-flex align-items-center mb-4">
              <a href="mailto:umnmedicalcenter@umn.ac.id" target='_blank' rel='noopener noreferrer'>
                <FaEnvelope className='mediaSosial' />
              </a>
              <a href="https://instagram.com/umnmedicalcenter?igshid=OTJlNzQ0NWM=">
                <FaInstagram className='mediaSosial'/>
              </a>
              <a href="https://vt.tiktok.com/ZSeMMs3xn/">
                <FaTiktok className='mediaSosial' />
              </a>
              <a href="https://line.me/R/ti/p/@470nogaq">
                <FaLine className='mediaSosial' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerLine"></div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="m-0 text-center my-2">
                {" "}
                &copy; 2023 {" "}
                <a
                  href="https://linktr.ee/umnmedicalcenter"
                  className="text-white"
                >
                  <b>UMN Medical Center</b>
                </a>{" "}
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
