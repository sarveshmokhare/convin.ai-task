import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';

import CreateCardForm from '../components/CreateCardForm'
import DisplayCardsBox from '../components/DisplayCardsBox'

const { Title } = Typography;

function CardPage() {
    const navigate = useNavigate();
    let { bucketId } = useParams();
    // parsing buckertId from string to int
    bucketId = parseInt(bucketId)

    // accessing the bucketsList from redux store where dummyData is used to create the initial state
    const bucketsList = useSelector((state) => state.buckets.value);

    // finding bucket corresponding to which the cards' details is required to be shown
    const bucket = bucketsList.find((bucket) => {
        return bucket.id === bucketId;
    });

    return (
        <div>
            <Button onClick={() => navigate('/')}><ArrowLeftOutlined /></Button>

            <CreateCardForm bucket={bucket} />
                <Title>{'Cards in ' + bucket.name + " Bucket List"}</Title>
            <DisplayCardsBox bucket={bucket} />
        </div>
    )
}

export default CardPage