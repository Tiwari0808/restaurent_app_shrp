import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElement)}
      {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </>
  );
};

export default Modal;
