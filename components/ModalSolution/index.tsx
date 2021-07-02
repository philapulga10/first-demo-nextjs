import React, { useEffect, useState } from 'react';

import './modal.scss';

type ModalProps = {
  isVisible?: boolean,
  renderFooter?: () => JSX.Element,
  onOk?: () => void,
  onCancel?: () => void,
  isRenderHeader?: boolean,
  isRenderCloseIcon?: boolean,
  btnCancelText?: string,
  btnOkText?: string
};

let CLASS_DEFAULT = "tcl-modal__wrapper";

const ModalSolution: React.FC<ModalProps> = ({
  children,
  isVisible: isVisibleOutside,
  onOk,
  onCancel,
  renderFooter,
  isRenderHeader,
  isRenderCloseIcon,
  btnCancelText,
  btnOkText,
}) => {
  const [className, setClassName] = useState(CLASS_DEFAULT);
  const [isVisible, setVisible] = useState(false);

  // nếu không đã động tới isVisibleOutside thì dùng isVisible mặc định
  useEffect(() => {
    setVisible(isVisibleOutside);
  }, [isVisibleOutside]);

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
    const handler = (event) => {
      console.log('handler', event.which);

      if (event.which === 27) {
        onCancel();
      }
    };

    document.addEventListener('keyup', handler);

    return () => {
      // component will unmount
      document.removeEventListener('keyup', handler);
    };
  }, []);

  const _onCancel = (): void => {
    if (onCancel) {
      onCancel();
    } else {
      setVisible(false);
    }
  }

  const _renderFooter = (): JSX.Element => {
    if (renderFooter) {
      return renderFooter();
    }

    return (
      <>
        <button onClick={_onCancel} className="tcl-modal__cancel">{btnCancelText}</button>
        <button onClick={onOk} className="tcl-modal__ok">{btnOkText}</button>
      </>
    );
  }

  if (isVisible === false) {
    return null;
  }

  return (
    <div className={className}>
      <div onClick={_onCancel} className="tcl-mask"></div>
      <div className="tcl-dialog">
        <div className="tcl-modal__content">
          {
            isRenderHeader && (
              <div className="tcl-modal__header">
                Title demo
                {
                  isRenderCloseIcon && <button onClick={_onCancel} className="tcl-modal__close">X</button>
                }
              </div>
            )
          }
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

ModalSolution.defaultProps = {
  // nếu không truyền mặc định isVisibale = false
  isVisible: false,
  isRenderHeader: true,
  isRenderCloseIcon: true,
  btnCancelText: 'Cancel',
  btnOkText: 'Ok'
};

export default ModalSolution;