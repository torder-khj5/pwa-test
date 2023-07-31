import ModalView from '@components/CustomModal/ModalView.tsx';
import { type ModalOptions } from '@components/@shared/Modal/useModal.ts';
import { Modal } from '@components/@shared/Modal';

export default function CustomModal({ children: triggerElement, initialOpen }: ModalOptions) {
  return (
    <Modal initialOpen={initialOpen}>
      <Modal.Trigger asChild>{triggerElement}</Modal.Trigger>
      <Modal.Content>
        <ModalView onClose={() => console.log('close event')} title={'text'} contents={'texttexttext'}></ModalView>
      </Modal.Content>
    </Modal>
  );
}
