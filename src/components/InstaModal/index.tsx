import React from "react";
import "./index.scss";
import { Close } from "./Icons";

type InstaModalProps = {
  title: string;
  srcImg: string;
  description: string;
};

function InstaModal({ title, srcImg, description }: InstaModalProps) {
  /* const openModal = () => {}; */

  return (
    <div className="insta-modal-wrap">
      <div className="insta-modal">
        <header className="modal-header">
          <div className="title-wrap">
            <img src={srcImg} alt="foto de perfil" />
            <span>EntreFiosSTM</span>
          </div>

          <button
            className="btn-close"
            onClick={() => {
              document
                .querySelector(".insta-modal-wrap")
                ?.classList.add("closed");
            }}
          >
            <Close />
          </button>
        </header>

        <main className="modal-main">
          <img src={srcImg} alt={description} />
        </main>

        <footer className="modal-footer">footer</footer>
      </div>
    </div>
  );
}

export default InstaModal;
