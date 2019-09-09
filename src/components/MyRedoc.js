import React from 'react'
import { RedocStandalone  } from 'redoc'


const MyRedoc=()=>(
    <div>
       <RedocStandalone specUrl="http://redocly.github.io/redoc/openapi.yaml"/> 
    </div>
)
export default MyRedoc