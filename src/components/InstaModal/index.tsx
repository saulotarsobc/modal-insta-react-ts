import React from "react";
import './index.scss';

type InstaModalProps = {
  title: String;
};

function InstaModal({ title }: InstaModalProps) {
  return <div>{title}</div>;
}

export default InstaModal;
