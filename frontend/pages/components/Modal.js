import { Modal as AntModal } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(AntModal)`
  & .ant-modal-body {
    width: 100%;
    padding: 30px;
  }

  & .ant-modal-header {
    border: 0px;
    background-color: #E9E8D2;
  }

  & .ant-modal-title {
	padding-top: 60px;
    font-size: 36px;
	line-height: 36px;
	text-align: center;
	height: fit-content;
    font-family: "Barlow", sans-serif;
	color: #3A445D;
  }

  & .ant-modal-footer {
    border: 0px;
	padding-bottom: 60px;
  }

  & .ant-select-selection {
    box-shadow: 0;
  }

  & .ant-modal-content {
	overflow: hidden;
	background-color: #E9E8D2;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	border: 3px solid #3A445D;
    font-family: "Barlow", sans-serif;
	color: #3A445D;

    @media (max-width: 1024px) {
	  height: 95vh;
	  border-radius: 0;
	  overflow: hidden;
      margin: 0;
	  padding: 0;
      top: 0;
	  box-shadow: none;
	  border: none;
    }
  }
`

const Modal = ({ children, ...props }) => {
	return (
		<StyledModal {...props}>
			{children}
		</StyledModal>
	);
}

export default Modal;