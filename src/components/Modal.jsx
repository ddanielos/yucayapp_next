import styles from '../styles/Modal.module.css';
import Image from 'next/image'

const Modal = (props) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <>
      <div className={styles.modalDiv} onClick={props.closeModal}>
        <div className={styles.modalDialog} onClick={handleModalDialogClick}>
          {
            props.typeInsta === "VIDEO"?
              <video controls autoPlay={true}><source src={props.imageInstaURL} type="video/mp4"/></video>
            :
              <img className={styles.imagen} src={props.imageInstaURL} alt=""/>
          }
          <div>
            <p className={styles.story}>{props.imageInstaCaption}</p>
            <a className={styles.goInsta} href={props.permalink} target="_blank" rel="noreferrer"><Image className={styles.imgInsta} src="/static/img/instagram.png" alt="instagram" width={40} height={40}/>Ver en Instagram</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;