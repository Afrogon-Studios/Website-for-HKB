import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:px-[52px] py-[22px]">
      <div className="flex items-center justify-between">
        <LazyLoadImage
          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/logo-web%201.png?alt=media&token=2bd30132-5945-41ae-ac15-08891a2cdfad"
          alt=""
          className="w-[95px]"
        />
        <ul className="lg:flex hidden items-center gap-10 font-space font-medium text-sm">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>Contact</li>
        </ul>
        <div className="flex items-center lg:gap-9 gap-4 ml-auto mr-7 lg:ml-0 lg:mr-0">
          <div>
            <LazyLoadImage
              src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/search.png?alt=media&token=30e2799d-d51d-4c02-941c-13853feba04c"
              alt=""
              className="w-4"
            />
          </div>
          <div>
            <LazyLoadImage
              src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/user.png?alt=media&token=d029e40c-72a8-4130-a0c7-d732a6cb3501"
              alt=""
              className="w-4"
            />
          </div>
          <div>
            <LazyLoadImage
              src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/heart.png?alt=media&token=ab40acf7-231e-41a9-bab5-767f1ed4438b"
              alt=""
              className="w-4"
            />
          </div>
          <div>
            <Link to="/cart">
              <LazyLoadImage
                src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/bag.png?alt=media&token=f8082f10-0907-4b7d-847c-818a5a78f493"
                alt=""
                className="w-4"
              />
            </Link>
          </div>
        </div>
        <LazyLoadImage onClick={() => setOpen(!open)} className="lg:hidden w-[34px] mr-5" src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/menu.png?alt=media&token=f8373a26-bc59-4a49-b484-53da6fb2c99b&_gl=1*1qfxhe9*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NjMwOTM1OS41MS4xLjE2ODYzMTI2NDguMC4wLjA." alt="" />
        <Dialog
          style={{ position: "relative", zIndex: 50 }}
          open={open}
          onClose={() => setOpen(!open)}
        >
          <div
            style={{
              background: "transparent",
              position: "fixed",
              inset: 0,
              opacity: 0.9,
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              marginTop: "80px",
            }}
          >
            <Dialog.Panel
              style={{
                background:
                  "linear-gradient(144.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#4B0158 91.61%)",
                height: "28%",
                width: "42%",
                marginLeft: "auto",
                marginRight: "15px",
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                gap: "20px",
              }}
            >
              <Dialog.Title className="text-white text-[20px] font-space font-medium outline-none">
                <Link to="/">
                  <p>
                    Home
                  </p>
                </Link>
              </Dialog.Title>
              <Dialog.Title className="text-white text-[20px] font-space font-medium outline-none">
                <Link to="/shop">
                  <p>
                    Shop
                  </p>
                </Link>
              </Dialog.Title>
              <Dialog.Title className="text-white text-[20px] font-space font-medium outline-none">
                <Link to="/about">
                  <p>
                    About
                  </p>
                </Link>
              </Dialog.Title>
              <Dialog.Title className="text-white text-[20px] font-space font-medium outline-none">
                <p>
                  Contact
                </p>
              </Dialog.Title>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Navbar;
