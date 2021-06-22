import React, { useEffect, useState } from 'react';

import './modal.scss';

type ModalProps = {
  isVisible?: boolean,
  renderFooter?: () => JSX.Element,
  onOk: () => void,
  onCancel: () => void
};

let CLASS_DEFAULT = "tcl-modal__wrapper";

const ModalSolution: React.FC<ModalProps> = ({
  children,
  isVisible,
  onOk,
  onCancel,
  renderFooter
}) => {
  const [className, setClassName] = useState(CLASS_DEFAULT);

  useEffect(() => {
    if (isVisible === true) {
      setClassName((oldClass) => (oldClass += " show"));
      // setClassName(className + " show"); => sai cách

      document.querySelector('body').classList.add('tcl-modal__open');
    } else {
      setClassName(CLASS_DEFAULT);

      document.querySelector('body').classList.remove('tcl-modal__open');
    }
  }, [isVisible]);

  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      if (event.which === 27) {
        onCancel();
      }
    });
  }, []);

  const _renderFooter = (): JSX.Element => {
    if (renderFooter) {
      return renderFooter();
    }

    return (
      <>
        <button onClick={onCancel} className="tcl-modal__cancel">Cancel</button>
        <button onClick={onOk} className="tcl-modal__ok">Ok</button>
      </>
    );
  }

  return (
    <div className={className}>
      <div onClick={onCancel} className="tcl-mask"></div>
      <div className="tcl-dialog">
        <div className="tcl-modal__content">
          <div className="tcl-modal__header">
            Title demo
            <button onClick={onCancel} className="tcl-modal__close">X</button>
          </div>
          <div className="tcl-modal__body">{children}</div>
          <div className="tcl-modal__footer">
            {
              _renderFooter()
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSolution;