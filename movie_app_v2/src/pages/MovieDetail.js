import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const {id} = useParams();

  return (
    <div>
        <h4>Movie Detail</h4>
    </div>
  )
}

export default MovieDetail;