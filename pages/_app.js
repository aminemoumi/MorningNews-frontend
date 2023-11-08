import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';

// redux imports
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookmarks from '../reducers/bookmarks';
import hiddenArticles from '../reducers/hiddenArticles';
import user from '../reducers/user';

// redux-persist imports
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({ bookmarks, user, hiddenArticles });
const persistConfig = { key: "bookmarks", storage };

// add user and bookmarks to the store
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

const persistor = persistStore(store);

// const store = configureStore({
//   reducer: { bookmarks, user },
// });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Morning News</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;

