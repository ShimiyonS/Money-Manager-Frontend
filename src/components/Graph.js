import React from 'react'
import {Doughnut} from "react-chartjs-2"
import {Chart, ArcElement } from 'chart.js';
import {default as api} from './store/apiSlice';
import Labels from './Labels';
import { chart_Data,getTotal } from './helper/Helper';

Chart.register(ArcElement);


const Graph = () => {
  const {data, isFetching, isSuccess, isError}= api.useGetLabelsQuery()
  let grapData;


  if(isFetching){
    grapData = <div>Fectching</div>;
  }else if(isSuccess){
    
    grapData = <Doughnut {...chart_Data(data)}></Doughnut>
  }else if(isError){
    grapData = <div>isError</div>
  }

  return (
    <>
    <div className='flex justify-content max-w-xs mx-auto'>
    <div className='item'>
<div className='chart relative'>
{grapData}
<h3 className='mb-4 font-bold title'>
    Total
    <span className='block text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>
</h3>
</div>
<div className='flex flex-col py-10 gap-4'>
<Labels></Labels>
</div>
    </div>
    </div>
    </>
  )
}

export default Graph