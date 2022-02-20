import { Modal as AntModal } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(AntModal)`
  & .ant-modal-body {
    width: 100%;
    padding: 30px;
  }

  & .ant-modal-header {
    border: 0px;
  }

  & .ant-modal-footer {
    border: 0px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 5px;
  }

  & .ant-select-selection {
    box-shadow: 0;
  }

  & .ant-modal-content {
	background-color: #E9E8D2;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Modal = ({ ...props }) => {
	return (
		<StyledModal {...props}>
			hi
		</StyledModal>
	);
}

export default Modal;