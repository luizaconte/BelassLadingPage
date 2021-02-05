import React from 'react';
import { RouteProps as ReactDOMRouterProps, Redirect } from 'react-router-dom';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const authenticated = sessionStorage.getItem('@plugin/token');

  if (!authenticated && isPrivate)
    return (
      <Redirect
        to={{
          pathname: isPrivate ? '/' : '/home',
        }}
      />
    );

  return <Component />;
};

export default Route;
