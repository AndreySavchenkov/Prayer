import * as React from "react";
import {Navigator} from "./src/navigation/Navigator";
import {Provider} from 'react-redux';
import {persistor, store} from "./src/store/store";
import {PersistGate} from "redux-persist/integration/react";


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigator/>
            </PersistGate>
        </Provider>
    );
};

export default App;
