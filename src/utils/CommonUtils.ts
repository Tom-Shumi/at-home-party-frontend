import Router from 'next/router';

export const backHome = () => {
  Router.push('/');
}

export const link = (destination: string) => {
  Router.push(destination);
}
