'use client'

import React from 'react'
import { Modal } from '../ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'


export const StoreModal = () => {
    const storeModal = useStoreModal()
    
  return (
<div>
    <Modal
    title="create store"
    description='Add a new store to manage products and categories'
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
        Future Create Store Form
    </Modal>
</div>
  );
};
