import React from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'antd';

import BucketCard from './BucketCard'

function DisplayBucketsBox() {

  const bucketsList = useSelector((state) => state.buckets.value)

  return (
    <Row style={{backgroundColor: '#F7F1E5', borderRadius: 12}}>
      {bucketsList.map((bucket) => {
        return <BucketCard key={bucket.id} bucket={bucket} />
      })}
    </Row>
  )
}


export default DisplayBucketsBox