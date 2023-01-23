import React from 'react'
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent'

const Error = () => {
  const error = useRouteError()
  let title = 'An Error Occured'
  let message = 'Something went Wrong'
  if(error.status === 500){
    message = error.data.message
  }
  if(error.status === 404){
    title= 'NotFound'
    message = 'Could Not find Resourse or Page'
  }
  return (
    <div>
    <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </div>
  );
}

export default Error
