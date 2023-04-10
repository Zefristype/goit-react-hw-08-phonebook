import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { selectIsRefreshing } from 'redux/selectors';
import { refresh } from 'redux/operations';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Toaster } from 'react-hot-toast';
const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route path="*" element={<NotFound />} /> 
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 2000,
            },
          }}
        />
      </>
    )
  );
};
