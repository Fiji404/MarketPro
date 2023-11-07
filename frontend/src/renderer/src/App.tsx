import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/UI/Layout';
import { NewProduct, Home, Stats } from './pages';

export const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/stats" element={<Stats />} />
                </Route>
                <Route path="/new-product" element={<NewProduct />}></Route>
            </>
        )
    );
    return <RouterProvider router={router} />;
};
