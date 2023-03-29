import React from 'react'
import { Typography } from 'antd'

import CreateBucketForm from '../components/CreateBucketForm'
import DisplayBucketsBox from '../components/DisplayBucketsBox'

const { Title } = Typography;

function BucketPage() {

    return (
        <div>
            <CreateBucketForm />
            {/* <hr /> */}
            <Title>Buckets List</Title>
            <DisplayBucketsBox />
        </div>
    )
}

export default BucketPage