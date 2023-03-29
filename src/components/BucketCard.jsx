import React, { useState } from 'react';
import { Card, Modal, Input } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { updateBucketName, deleteBucket } from '../features/Buckets';

const BucketCard = ({ bucket }) => {
    const dispatch = useDispatch();

    const [newBucketName, setNewBucketName] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        dispatch(updateBucketName({
            id: bucket.id,
            name: newBucketName,
        }))

        setNewBucketName('');
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const handleOk2 = () => {
        dispatch(deleteBucket({
            id: bucket.id,
        }))

        setIsModalOpen2(false);
    };

    return (
        <Card
            hoverable
            style={{ margin: 20, textAlign: 'center' }}
            actions={[
                <EditOutlined key="edit" onClick={showModal} />,
                <DeleteOutlined onClick={() => { setIsModalOpen2(true) }} />
            ]}
            extra={<Link to={'/' + bucket.id + '/cards'} ><EyeOutlined key="edit" /></Link>}
        >
            {bucket.name}

            <Modal title="Edit Bucket" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input
                    placeholder='New Bucket Name'
                    onChange={(e) => { setNewBucketName(e.target.value) }}
                />
            </Modal>

            <Modal
                title="Are you sure?"
                open={isModalOpen2}
                onOk={handleOk2}
                onCancel={() => { setIsModalOpen2(false) }}
                okType='danger'
            >

            </Modal>
        </Card>
    );
};

export default BucketCard;