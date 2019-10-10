import React from 'react'

import { useParams } from 'react-router-dom'

export default function Topic() {
  
  const paramsInfo = useParams();

  return <h3>Selected topic ID: { paramsInfo.topicId }</h3>;
}
