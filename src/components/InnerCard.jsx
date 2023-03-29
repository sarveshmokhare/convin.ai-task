import React, { useState } from 'react';
import { Card, Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { deleteCard, updateCard } from '../features/Buckets';

const { Meta } = Card;

const InnerCard = ({ name, url, bucketId, cardId }) => {
    const dispatch = useDispatch();

    const [newCardName, setNewCardName] = useState('')
    const [newUrl, setNewUrl] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleNewName = () => {
        dispatch(updateCard({
            bucketId,
            cardId,
            newCardName,
            newUrl
        }))

        setIsEditModalOpen(false);
    };

    function handleDeleteCard() {
        dispatch(deleteCard({
            bucketId,
            cardId
        }))

        setIsDeleteModalOpen(false);
    }

    return (
        <Card
            hoverable
            style={{ margin: 20 }}
            actions={[
                <EditOutlined key="edit" onClick={() => { setIsEditModalOpen(true) }} />,
                <DeleteOutlined onClick={() => { setIsDeleteModalOpen(true) }} />
            ]}

        >
            <Meta title={name} description={url} onClick={showModal} />

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={false}>
                <iframe width="100%" height="250" src={url}></iframe>
            </Modal>

            <Modal
                open={isEditModalOpen}
                onOk={handleNewName}
                onCancel={() => { setIsEditModalOpen(false) }}
                closable={false}
            >


                <Input
                    placeholder='New Card Name'
                    onChange={(e) => { setNewCardName(e.target.value) }}
                />
                <br />
                <br />
                <Input
                    placeholder='New URL'
                    onChange={(e) => { setNewUrl(e.target.value) }}
                />

            </Modal>

            <Modal
                open={isDeleteModalOpen}
                onOk={handleDeleteCard}
                onCancel={() => { setIsDeleteModalOpen(false) }}
                title='Are you sure?'
                okType='danger'
            >
            </Modal>
        </Card>
    );
};

export default InnerCard;